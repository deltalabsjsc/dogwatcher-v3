import React, { useCallback, useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import BigNumber from 'bignumber.js'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'state'
import { investPool } from 'config/constants/investPool';
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import { ToastDescriptionWithTx } from 'components/Toast'
import { usePoolStoreContract } from 'hooks/useContract'
import { fetchData } from 'state/poolProposals/fetchDataUser'
import { fetchDataPool } from 'state/poolProposals/actions'

export const useWithdrawPoolStore = (userAddress, contractAddress, onRefresh) => {
  const [requestedWithdraw, setRequestedWithdraw] = useState(false)
  const { toastSuccess, toastError } = useToast()
  const { callWithGasPrice } = useCallWithGasPrice()
  const { t } = useTranslation()
  const poolStoreContract = usePoolStoreContract(contractAddress)
  const [ pendingWithdraw, setPendingWithdraw ] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const handleWithdraw = useCallback(async () => {
    setPendingWithdraw(true)
    try {
      
      const tx = await callWithGasPrice(poolStoreContract, 'withdraw', [userAddress])
      const receipt = await tx.wait()
      if (receipt.status) {
        toastSuccess(
          t('Successful Withdraw'),
          <ToastDescriptionWithTx txHash={receipt.transactionHash}/>
        )
        setRequestedWithdraw(true)
        setPendingWithdraw(false)
        onRefresh(Date.now())
        try {
            const result = await fetchData(userAddress, investPool)
            dispatch(fetchDataPool(result))
        } catch (e) {
            console.log(e)
        }
      } else {
        // user rejected tx or didn't go thru
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
        setRequestedWithdraw(false)
        setPendingWithdraw(false)
      }
    } catch (e) {
      console.error(e)
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      setPendingWithdraw(false)
    }
  }, [
    poolStoreContract,
    t,
    dispatch,
    userAddress,
    toastError,
    toastSuccess,
    callWithGasPrice,
    setPendingWithdraw,
    onRefresh
  ])

  return { handleWithdraw, requestedWithdraw, pendingWithdraw }
}
