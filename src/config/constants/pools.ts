import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'



const pools: PoolConfig[] = [
    {
    sousId: 1,
    stakingToken: tokens.oldLiveTrade,
    earningToken: tokens.oldLiveTrade, 
    contractAddress: {
      97: '',
      56: '0x90f190367C016775cf216297db193CEccB36aEe5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '10000000000000000',
    decimals: 18,
  },
  // {
  //   sousId: 214,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.naos,
  //   contractAddress: {
  //     97: '',
  //     56: '0xb38b78529bCc895dA16CE2978D6cD6C56e8CfFC3',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.1736',
  // },
  // {
  //   sousId: 209,
  //   stakingToken: tokens.kshark,
  //   earningToken: tokens.babykshark,
  //   contractAddress: {
  //     97: '',
  //     56: '0xb42b6097B200d509F2E4F10d3F69906AA7526BC6',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '100000000000',
  //   decimals:9,
  // },
  // {
  //   sousId: 208,
  //   stakingToken: tokens.babykshark,
  //   earningToken: tokens.kshark,
  //   contractAddress: {
  //     97: '0xBeDb490970204cb3CC7B0fea94463BeD67d5364D',
  //     56: '0x390e58C934228D1839b5C1E7D86Df0eAA31c535b',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '300000000000',
  //   decimals:18,
  //   sortOrder: 999,

  // },
  // {
  //   sousId: 210,
  //   stakingToken: tokens.COGRIB,
  //   earningToken: tokens.babykshark,
  //   contractAddress: {
  //     97: '',
  //     56: '0x501918a63B948aF8166d25986a5aC2fd7F6636bE',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '6940000000',
  //   decimals:9,
  // },
  // {
  //   sousId: 211,
  //   stakingToken: tokens.KEPHI,
  //   earningToken: tokens.babykshark,
  //   contractAddress: {
  //     97: '',
  //     56: '0x46fa38a94fA6e8ff6E445d045Ab834cFEAf88702',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '6940000000',
  //   decimals:9,
  // },
  // {
  //   sousId: 212,
  //   stakingToken: tokens.BAMI,
  //   earningToken: tokens.babykshark,
  //   contractAddress: {
  //     97: '',
  //     56: '0x8623a2A531BD3CAE740669B4E74b9107fB7CF585',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '6940000000',
  //   decimals:9,
  // },
  // {
  //   sousId: 213,
  //   stakingToken: tokens.LTD,
  //   earningToken: tokens.babykshark,
  //   contractAddress: {
  //     97: '',
  //     56: '0x7fd629D60163C0369E09E444e0513d34F89c460E',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '6940000000',
  //   decimals:9,
  // },
  // {
  //   sousId: 214,
  //   stakingToken: tokens.dpet,
  //   earningToken: tokens.babykshark,
  //   contractAddress: {
  //     97: '',
  //     56: '0x7504928cC86a50A0930c5916079460488f98DF49',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '6940000000',
  //   decimals:9,
  // },
  // {
  //   sousId: 215,
  //   stakingToken: tokens.KAI,
  //   earningToken: tokens.babykshark,
  //   contractAddress: {
  //     97: '',
  //     56: '0x4f0074cbc257fbab50a9c706faf721a50a477452',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '6940000000',
  //   decimals:9,
  // },
  // {
  //   sousId: 216,
  //   stakingToken: tokens.itam,
  //   earningToken: tokens.babykshark,
  //   contractAddress: {
  //     97: '',
  //     56: '0xd94647e60b1a7486b1c77cd96518c72bab292e25',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '6940000000',
  //   decimals:9,
  // },
  // {
  //   sousId: 217,
  //   stakingToken: tokens.aquagoat,
  //   earningToken: tokens.babykshark,
  //   contractAddress: {
  //     97: '',
  //     56: '0x9c89e8233199ca4f422c76ddee489d995eea3efa',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '13880000000',
  //   decimals:9,
  // },
  // {
  //   sousId: 218,
  //   stakingToken: tokens.MFO,
  //   earningToken: tokens.babykshark,
  //   contractAddress: {
  //     97: '',
  //     56: '0x5E150b6e91E6686eBFd2dE17a4D314A7cd681110',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '13880000000',
  //   decimals:9,
  // },
]

export default pools
