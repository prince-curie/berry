import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import launchToken from '@reach-sh/stdlib/launchToken.mjs'
import {
    LAUNCH_TOKEN,
    VIEW_LENDING_TOKEN,
    ACCEPT_TOKEN,
    SET_ACCOUNT,
    SET_CONTRACT,
    SET_ID
} from '../types'
const stdlib = loadStdlib('ALGO');

const id = process.env.REACT_APP_TOKEN_ID

export const launchTokenAction = (payLoad) => {
    return async (dispatch) => {
        const dashToken = await launchToken(stdlib, payLoad.accOwner, 'dashToken', 'DTN')
        dispatch({ type: LAUNCH_TOKEN, payLoad: dashToken });
    }
}

//DEPLOYING CONTRACT BY OWNER
export const deployContractAction = () => {
   
    return async (dispatch) => {
        try {
            const id = process.env.REACT_APP_TOKEN_ID
            const mnemonic = process.env.REACT_APP_OWNER_MNEMONIC
            console.log('received mnemonice', id)
            const acc = await stdlib.newAccountFromMnemonic(mnemonic.trim())
            console.log('received addresss', acc)
            const ctcOwner = acc.contract(backend);
            console.log('passed here', ctcOwner)
           // const dashToken = await launchToken(stdlib, acc, 'DashToken', 'DTN')
           // console.log(`dashtoken ==> ${dashToken.id}`)
            dispatch({type: SET_CONTRACT, payload: ctcOwner})
            dispatch({type: SET_ID, payload: id})
            dispatch({ type: SET_ACCOUNT, payload: acc })
    
            const Common = () => ({
    
                viewLendingToken: ({ id, lendingAPY, borrowingAPY }) => {
                    console.log(`The token accepted for lending is: tokenId = ${id}, lendingAPY = ${lendingAPY} , borrowingAPY = ${borrowingAPY}`)
                },
            });
    
            await Promise.all([
                backend.Owner(ctcOwner, {
                    acceptToken: id,
                    ...Common()
                }),
    
            ]);
            
        } catch (error) {
            console.log(error)
        }
    }
}

export const getDateAction = (payLoad) => {
    return async (dispatch) => {
        const ctcOwner = await payLoad.accOwner.contract(backend);

        const data = await backend.Owner(ctcOwner, {
            ...stdlib.hasRandom,

            getDate: () => {
                console.log('fetching date')
                const date = Math.floor(Date.now() / 86400000)
                console.log(date)
                return date;
            }
        })

        dispatch({ type: VIEW_LENDING_TOKEN, payLoad: data });
    }
}