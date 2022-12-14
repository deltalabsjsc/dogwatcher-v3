import React, { useState, useEffect } from "react";
import multicall from "utils/multicall";
import BigNumber from "bignumber.js";
import { getAddress } from "utils/addressHelpers";
import contracts from "config/constants/contracts";
import votingProposalsAbi from "config/abi/votingProposals.json"
import { ERC20_ABI } from "config/abi/erc20";
import axios from "axios";
import tokens from "config/constants/tokens";
import { URL_SNAPSHORT_VOTING } from "config";
import { CountProposal, ListVoting, AllowanceType, ListVotingData } from "./type";

export const fetchCountProposals = async (): Promise<CountProposal> => {
    try {
        const calls = [
            {
                address: getAddress(contracts.votingProposals),
                name: 'getCountProposal',
                params: []
            }
        ]
        const [ result ] = await multicall(votingProposalsAbi, calls)
        
        return {
            countProposals:Number(new BigNumber(result).toJSON())
        }
    }
    catch(error) {
        console.log(error)
        return {
            countProposals:0
        }
       
    }
}

export const fetchVoting = async (totalVoting:number): Promise<ListVoting> => {
    const convertData = []
   if ( totalVoting > 0 ) {
    try {
        const calls = [];
        for (let index = 0; index < totalVoting; index++) {
            calls.push(
                {
                    address: getAddress(contracts.votingProposals),
                    name: 'proposals',
                    params: [index]
                },
            )
        }
        const resultProposals = await multicall(votingProposalsAbi, calls)
        for( let index = 0; index < resultProposals.length; index++ ){
            convertData.push(
                {
                    votingId:index,
                    ownerAddress:resultProposals[index].chairPerson,
                    startTime:Number(resultProposals[index].startTime.toString()),
                    endTime:Number(resultProposals[index].endTime.toString()),
                    
                }
            ) 
        }
        return {
            listVoting:convertData
        }
    }
    catch(error) {
        console.log(error)
        return {
            listVoting:convertData
        }
    }
   } else {
        return {
            listVoting:convertData
        }
   }
}

export const fetchAllowance = async (account:string): Promise<AllowanceType> => {
    if ( account ) {
        try {
            const calls = [
                {
                    address: getAddress(tokens.Run.address),
                    name: 'allowance',
                    params: [account, getAddress(contracts.votingProposals)]
                }
            ]
            const [ result ] = await multicall(ERC20_ABI, calls)
            
            return {
                allowance:Number(new BigNumber(result).toString())/1E18
            }
        }
        catch(error) {
            console.log(error)
            return {
                allowance:0
            }
           
        }
    } else {
        return {
            allowance:0
        }
    }
}

export const fetchVotingData = async (votingId:number): Promise<ListVotingData> => {
    try {
        const {data: response} = await axios({
            method: 'GET',
            url: `${URL_SNAPSHORT_VOTING}id=${votingId}`,
        });
        
        const listVotingSnapShort = response.result
        const result = listVotingSnapShort.map((item, key) => {
            return {
                transactionHash:item?.transaction_hash,
                amount:Number(item?.amount)/1E18,
                option:item?.option,
                voter:item?.voter
            }
        })
        .sort((item1,item2) => item2.amount - item1.amount)
        return {
            listVotingData:result
        }
    }
    catch(error) {
        console.log(error)
        return {
            listVotingData:[
                {
                    transactionHash:"",
                    amount:0,
                    option:false,
                    voter:""
                }
            ]
        }
       
    }
}