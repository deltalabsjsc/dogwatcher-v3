import { createAction } from '@reduxjs/toolkit'
import { endBlockProps, endTimeProps, startTimeProps, user, userStaked } from './type'

export const fetchDataUser = createAction<user>('poolRun/fetchDataUser')
export const fetchDataUserStaked = createAction<userStaked>('poolRun/fetchDataUserStaked')
export const fetchTvlPool = createAction<{tvl:number}>('poolRun/fetchTvlPool')
export const fetchEndTimeBlock = createAction<endTimeProps>('poolRun/fetchEndTimeBlock')
export const fetchEndBlock = createAction<endBlockProps>('poolRun/fetchEndBlock')
export const fetchStartTime = createAction<startTimeProps>('poolRun/fetchStartTime')