import React, { useState } from 'react'
import styled from 'styled-components'
import { useTooltip, Flex, Box, Text, LinkExternal, Grid, HelpIcon } from '@thaihuuluong/dogwatcher-uikit'
import {  ExpandableLabel } from 'components/Pancake-uikit'
import useTheme from 'hooks/useTheme'
import { useTranslation } from 'contexts/Localization'
import { getApy } from 'utils/compoundApyHelpers'



const Footer = styled(Flex)`
  width: 100%;
  background: 'linear-gradient(106.94deg, rgba(255, 255, 255, 0.17) 24.69%, rgba(255, 255, 255, 0.1) 82.76%)';
`

const BulletList = styled.ul`
  list-style-type: none;
  margin-top: 16px;
  padding: 0;
  li {
    margin: 0;
    padding: 0;
  }
  li::before {
    content: '•';
    margin-right: 4px;
    color: ${({ theme }) => theme.colors.textSubtle};
  }
  li::marker {
    font-size: 12px;
  }
`

interface RoiCalculatorFooterProps {
  isFarm: boolean
  apr: number
  displayApr: string
  autoCompoundFrequency: number
  multiplier: string
  linkLabel: string
  linkHref: string
  performanceFee: number
}

const RoiCalculatorFooter: React.FC<RoiCalculatorFooterProps> = ({
  isFarm,
  apr,
  displayApr,
  autoCompoundFrequency,
  multiplier,
  linkLabel,
  linkHref,
  performanceFee,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useTranslation()
  const { theme } = useTheme()
  const {
    targetRef: multiplierRef,
    tooltip: multiplierTooltip,
    tooltipVisible: multiplierTooltipVisible,
  } = useTooltip(
    <>
      <Text color="text">
        {t(
          'The Multiplier represents the proportion of CAKE rewards each farm receives, as a proportion of the CAKE produced each block.',
        )}
      </Text>
      <Text my="24px" color="text">
        {t('For example, if a 1x farm received 1 CAKE per block, a 40x farm would receive 40 CAKE per block.')}
      </Text>
      <Text color="text">{t('This amount is already included in all APR calculations for the farm.')}</Text>
    </>,
    { placement: 'top-end', tooltipOffset: [20, 10] },
  )

  const gridRowCount = isFarm ? 4 : 2
  const apy = (getApy(apr, autoCompoundFrequency > 0 ? autoCompoundFrequency : 1, 365, performanceFee) * 100).toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  return (
    <Footer p="16px" flexDirection="column">
      <ExpandableLabel expanded={isExpanded} onClick={() => setIsExpanded((prev) => !prev)}>
        {isExpanded ? t('Hide') : t('Details')}
      </ExpandableLabel>
      {isExpanded && (
        <Box px="8px">
          {/* <Grid gridTemplateColumns="2.5fr 1fr" gridRowGap="8px" gridTemplateRows={`repeat(${gridRowCount}, auto)`}>
            {isFarm && (
              <>
                <Text color="textSubtle" small>
                  {t('APR (incl. LP rewards)')}
                </Text>
                <Text small textAlign="right">
                  {displayApr}%
                </Text>
              </>
            )}
            <Text color="textSubtle" small>
              {t('APY')}
            </Text>
            <Text small textAlign="right">
              {apr &&
              <>
                {apr.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
              </>              
              }
            </Text>
            {isFarm && (
              <>
                <Text color="textSubtle" small>
                  {t('Farm Multiplier')}
                </Text>
                <Flex justifyContent="flex-end" alignItems="flex-end">
                  <Text small textAlign="right" mr="4px">
                    {multiplier}
                  </Text>
                  <span ref={multiplierRef}>
                    <HelpIcon color="textSubtle" width="16px" height="16px" />
                  </span>
                  {multiplierTooltipVisible && multiplierTooltip}
                </Flex>
              </>
            )}
          </Grid> */}
          <BulletList>
            <li>
              <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                {t('Calculated based on current rates.')}
              </Text>
            </li>
            {isFarm && (
              <li>
                <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                  {t('LP rewards: 0.17% trading fees, distributed proportionally among LP token holders.')}
                </Text>
              </li>
            )}
            <li>
              <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                {t(
                  'All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.',
                )}
              </Text>
            </li>
            {performanceFee > 0 && (
              <li>
                <Text mt="14px" fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                  {t('All estimated rates take into account this pool’s %fee%% performance fee', {
                    fee: performanceFee,
                  })}
                </Text>
              </li>
            )}
          </BulletList>
        </Box>
      )}
    </Footer>
  )
}

export default RoiCalculatorFooter
