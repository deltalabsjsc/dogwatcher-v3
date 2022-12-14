import { createAction } from '@reduxjs/toolkit'
import { AllowanceType, CountProposal, ListVoting, ListVotingData } from './type'

export const fetchTotalProposals = createAction<CountProposal>('votingProposals/fetchProposals')
export const fetchListProposals = createAction<ListVoting>('votingProposals/fetchListProposals')
export const fetchAllowanceVoting = createAction<AllowanceType>('votingProposals/fetchAllowanceVoting')
export const fetchSnapShortVoting = createAction<ListVotingData>('votingProposals/fetchSnapShortVoting')