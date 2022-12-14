import { ChainId } from '@pancakeswap/sdk'
import BigNumber from "bignumber.js/bignumber"
import { BIG_TEN } from 'utils/bigNumber'



BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://bscscan.com',
  [ChainId.TESTNET]: 'https://testnet.bscscan.com',
}

// CAKE_PER_BLOCK details
// 40 CAKE is minted per block
// 20 CAKE per block is sent to Burn pool (A farm just for burning cake)
// 10 CAKE per block goes to CAKE syrup pool
// 9 CAKE per block goes to Yield farms and lottery
// CAKE_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// CAKE/Block in src/views/Home/components/CakeDataRow.tsx = 15 (40 - Amount sent to burn pool)
export const CAKE_PER_BLOCK = new BigNumber(0.07)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const CAKE_PER_YEAR = CAKE_PER_BLOCK.times(BLOCKS_PER_YEAR)
export const BASE_URL = ''
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_URL}/pool`
export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.MAINNET]
export const BASE_BSC_URL = BASE_BSC_SCAN_URLS[process.env.REACT_APP_CHAIN_ID]
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 200000
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const TRANDING_FEE = 3
export const TRANSFER_FEE = 5
export const LINK_BOX_RUNGTOGETHER = "https://runtogether-s3.s3.ap-southeast-1.amazonaws.com"
export const BASE_URL_LISTONSALE = "https://cpp6fapx3xvw.usemoralis.com:2053/server/functions/EventSales"
export const BASE_URL_INWALLET = "https://5s3iedtqrrh1.usemoralis.com:2053/server/functions/BalanceNFT"
export const X_API_KEY = "bs3KPqselIh2JpCMX9EyS3ey0QwhNCwLCuLjk62EjKfH3hzuSGq7Ae4ODXtTsaiq"
export const BASE_URL_NFT_MARKETPLACE = "https://esirlcnqosl6.usemoralis.com:2053/server/functions/EventSales"
export const GET_NFT_BALANCE = "https://deep-index.moralis.io/api/v2/nft"
export const GET_NFT_BALANCE_OWNER = "https://deep-index.moralis.io/api/v2"
export const URL = process.env.REACT_APP_API_AUTH
export const startTimeStake = 1662469200000
export const LIMIT_VOTING = 100
export const MIN_CREATE_VOTING_PROPOSALS = 1000000
export const URL_SNAPSHORT_VOTING ="https://frvomtq0yglr.usemoralis.com:2053/server/functions/StakeToVote?"
export const MIN_OPEN_POOL_STORE = 2500000

export const BASE_URL_DATA_ADMIN = "https://p9e4wgd2e6.execute-api.ap-southeast-1.amazonaws.com/Prod/items"
export const BASE_URL_DATA_ADMIN_BY_ID = "https://p9e4wgd2e6.execute-api.ap-southeast-1.amazonaws.com/Prod/item/"
export const BASE_URL_DATA_ADMIN_CRUD = "https://b5d51grytd.execute-api.ap-southeast-1.amazonaws.com/Prod/item"
export const BASE_URL_LOGIN = "https://y0pgvg7is5.execute-api.ap-southeast-1.amazonaws.com/Dev/admin/login"

export const KAI_RPC_ENDPOINT = 'https://rpc.kardiachain.io'

// https://p9e4wgd2e6.execute-api.ap-southeast-1.amazonaws.com/Prod


export const optionArrayToken = [
  {
      label: 'RUN',
      value: '0xc643E83587818202E0fFf5eD96D10Abbc8Bb48e7',
  },
  {
      label: 'HES',
      value: '0x80A466Cea081bDd8E9c3Be80268Aad16915D03D0',
  },
  {
      label: 'BAMI',
      value: '0xe2d3486f46efbd4199ea087e9e466dcc35ee0248',
  },
  {
      label: 'LTD',
      value: '0xdbad544416df0677254645422bb560af8408cae7',
  },
  {
    label: 'HTD',
    value: '0x5E2689412Fae5c29BD575fbe1d5C1CD1e0622A8f',
},
{
  label: 'BNB',
  value: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
},
{
  label: 'BUSD',
  value: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
},
{
  label: 'USDT',
  value: '0x55d398326f99059fF775485246999027B3197955',
},
]

export const optionArrayProject = [
  {
    label: 'Project DeltaLabs',
    value: 'ProjectDeltaLabs',
  },
  {
      label: 'Project Run',
      value: 'ProjectRun',
  },
  {
      label: 'Project Hesman',
      value: 'ProjectHesman',
  },
  {
      label: 'Project Bami',
      value: 'ProjectBami',
  },
  {
      label: 'Project LTD',
      value: 'ProjectLTD',
  },
]
export const optionArraySortProject = [
  {
    label: 'All',
    value: '',
  },
  {
    label: 'Project DeltaLabs',
    value: 'ProjectDeltaLabs',
  },
  {
      label: 'Project Run',
      value: 'ProjectRun',
  },
  {
      label: 'Project Hesman',
      value: 'ProjectHesman',
  },
  {
      label: 'Project Bami',
      value: 'ProjectBami',
  },
  {
      label: 'Project LTD',
      value: 'ProjectLTD',
  },
]