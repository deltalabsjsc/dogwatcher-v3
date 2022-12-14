import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import {  Skeleton, Text, Heading, MinusIcon, PlusIcon } from 'components/Pancake-uikit'
import { Button, IconButton, AddIcon, useModal, Flex } from '@thaihuuluong/dogwatcher-uikit'
import { useLocation } from 'react-router-dom'
import { BigNumber } from 'bignumber.js'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Balance from 'components/Balance'
import { useWeb3React } from '@web3-react/core'
import { useFarmUser, useLpTokenPrice, usePriceLtdBusd } from 'state/farms/hooks'
import { fetchFarmUserDataAsync } from 'state/farms'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { useTranslation } from 'contexts/Localization'
import { useERC20 } from 'hooks/useContract'
import { BASE_ADD_LIQUIDITY_URL, startTimeStake } from 'config'
import { useAppDispatch } from 'state'
import { getAddress } from 'utils/addressHelpers'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getBalanceAmount, getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import useUnstakeFarms from '../../../hooks/useUnstakeFarms'
import DepositModal from '../../DepositModal'
import WithdrawModal from '../../WithdrawModal'
import useStakeFarms from '../../../hooks/useStakeFarms'
import useApproveFarm from '../../../hooks/useApproveFarm'
import { ActionContainer, ActionTitles, ActionContent } from './styles'

const IconButtonWrapper = styled.div`
  display: flex;
`

const StyledHeading = styled(Heading)`
  font-size:20px !important;
  color: ${({ theme }) => theme.colors.text};
  font-weight:normal;
`
const CustomActionContainer = styled(ActionContainer)`
  border-radius:5px;
  border:none !important;
`
interface StackedActionProps extends FarmWithStakedValue {
  userDataReady: boolean
  lpLabel?: string
  displayApr?: string
}

const Staked: React.FunctionComponent<StackedActionProps> = ({
  pid,
  apr,
  multiplier,
  lpSymbol,
  lpLabel,
  lpAddresses,
  quoteToken,
  token,
  userDataReady,
  displayApr,
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { allowance, tokenBalance, stakedBalance } = useFarmUser(pid)
  const { onStake } = useStakeFarms(pid)
  const { onUnstake } = useUnstakeFarms(pid)
  const location = useLocation()
  const lpPrice = useLpTokenPrice(lpSymbol)
  const cakePrice = usePriceLtdBusd()

  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const lpAddress = getAddress(lpAddresses)
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: quoteToken.address,
    tokenAddress: token.address,
  })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`

  const handleStake = async (amount: string) => {
    await onStake(amount)
    dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
  }

  const handleUnstake = async (amount: string) => {
    await onUnstake(amount)
    dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
  }

  const displayBalance = useCallback(() => {
    const stakedBalanceBigNumber = getBalanceAmount(stakedBalance)
    if (stakedBalanceBigNumber.gt(0) && stakedBalanceBigNumber.lt(0.0000001)) {
      return stakedBalanceBigNumber.toFixed(10, BigNumber.ROUND_DOWN)
    }
    if (stakedBalanceBigNumber.gt(0) && stakedBalanceBigNumber.lt(0.0001)) {
      return getFullDisplayBalance(stakedBalance).toLocaleString()
    }
    return stakedBalanceBigNumber.toFixed(3, BigNumber.ROUND_DOWN)
  }, [stakedBalance])
  const currentTime = Date.now()
  const timeCanStake = currentTime > startTimeStake
  // const onPresentDeposit = () => console.log("not found")
  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      lpPrice={lpPrice}
      lpLabel={lpLabel}
      apr={apr}
      displayApr={displayApr}
      stakedBalance={stakedBalance}
      onConfirm={handleStake}
      tokenName={lpSymbol}
      multiplier={multiplier}
      addLiquidityUrl={addLiquidityUrl}
      cakePrice={cakePrice}
    />,
  )
  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={handleUnstake} tokenName={lpSymbol} />,
  )
  const lpContract = useERC20(lpAddress)
  const dispatch = useAppDispatch()
  const { onApprove } = useApproveFarm(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))

      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, dispatch, account, pid])

  if (!account) {
    return (
      <CustomActionContainer>
        <ActionTitles>
          <Text bold textTransform="uppercase" color="#B1B5C3" fontSize="12px" fontWeight='600'>
            {t('Start Farming')}
          </Text>
        </ActionTitles>
        <ActionContent>
          <ConnectWalletButton width="100%"/>
        </ActionContent>
        { !timeCanStake && 
            <Flex mt="1.5rem" width="100%">
              <Text textAlign="left" color='primaryBright'>{t("Farming RUN-BUSD pairs active at 1 PM UTC (8 PM GMT+7)")}</Text>
            </Flex>
          }
      </CustomActionContainer>
    )
  }

  if (isApproved) {
    if (stakedBalance.gt(0)) {
      return (
        <>
        <CustomActionContainer>
          <ActionTitles>
            <Text textTransform="uppercase" color="primaryBright" fontSize="16px" pr="4px">
              {lpSymbol}
            </Text>
            <Text textTransform="uppercase" color="textSubtle" fontSize="16px">
              {t('Staked')}
            </Text>
          </ActionTitles>
          <ActionContent>
            <div>
              <StyledHeading>{displayBalance()}</StyledHeading>
              {stakedBalance.gt(0) && lpPrice.gt(0) && (
                <Balance
                  fontSize="12px"
                  color="textSubtle"
                  decimals={2}
                  value={getBalanceNumber(lpPrice.times(stakedBalance))}
                  unit=" USD"
                  prefix="~"
                />
              )}
            </div>
            <IconButtonWrapper>
              <IconButtonPlus variant="tertiary" onClick={onPresentWithdraw} mr="6px" disabled={!timeCanStake}>
                <MinusIcon width="14px" />
              </IconButtonPlus>
              <IconButtonPlus
                variant="tertiary"
                onClick={onPresentDeposit}
                disabled={['history', 'archived'].some((item) => location.pathname.includes(item)) || !timeCanStake}
              >
                <PlusIcon width="14px" />
              </IconButtonPlus>
            </IconButtonWrapper>
          </ActionContent>
          { !timeCanStake && 
            <Flex mt="1.5rem" width="100%">
              <Text textAlign="left" color='primaryBright'>{t("Farming RUN-BUSD pairs active at 1 PM UTC (8 PM GMT+7)")}</Text>
            </Flex>
          }
        </CustomActionContainer>
        </>
      )
    }

    return (
      <CustomActionContainer>
        <ActionTitles>
          <Text bold textTransform="uppercase" color="textSubtle" fontSize="16px" pr="4px">
            {t('Stake').toUpperCase()}
          </Text>
          <Text bold textTransform="uppercase" color="primaryBright" fontSize="16px">
            {lpSymbol}
          </Text>
        </ActionTitles>
        <ActionContent>
          <Button
            width="100%"
            onClick={onPresentDeposit}
            variant="secondary"
            disabled={['history', 'archived'].some((item) => location.pathname.includes(item)) || !timeCanStake}
          >
            {t('Stake LP')}
          </Button>
        </ActionContent>
        { !timeCanStake && 
            <Flex mt="1.5rem" width="100%">
              <Text textAlign="left" color='primaryBright'>{t("Farming RUN-BUSD pairs active at 1 PM UTC (8 PM GMT+7)")}</Text>
            </Flex>
          }
      </CustomActionContainer>
    )
  }

  if (!userDataReady) {
    return (
      <CustomActionContainer>
        <ActionTitles>
          <Text bold textTransform="uppercase" color="textSubtle" fontSize="16px">
            {t('Start Farming')}
          </Text>
        </ActionTitles>
        <ActionContent>
          <Skeleton width={180} marginBottom={28} marginTop={14} />
        </ActionContent>
        { !timeCanStake && 
            <Flex mt="1.5rem" width="100%">
              <Text textAlign="left" color='primaryBright'>{t("Farming RUN-BUSD pairs active at 1 PM UTC (8 PM GMT+7)")}</Text>
            </Flex>
          }
      </CustomActionContainer>
    )
  }

  return (
    <CustomActionContainer>
      <ActionTitles style={{marginBottom:"8px"}}>
        <Text textTransform="uppercase" color="textSubtle" fontSize="16px">
          {t('Enable Farm')}
        </Text>
      </ActionTitles>
      <ActionContent>
        <Button width="100%" disabled={requestedApproval || !timeCanStake } onClick={handleApprove} variant="primary">
          {t('Enable Contract')}
        </Button>
      </ActionContent>
      { !timeCanStake && 
            <Flex mt="1.5rem" width="100%">
              <Text textAlign="left" color='primaryBright'>{t("Farming RUN-BUSD pairs active at 1 PM UTC (8 PM GMT+7)")}</Text>
            </Flex>
          }
    </CustomActionContainer>
    
  )
}

export default Staked

const IconButtonPlus = styled(IconButton)`
  background: #FF592C;
  color: #fff;
`