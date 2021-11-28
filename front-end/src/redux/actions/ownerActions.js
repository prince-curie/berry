import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import launchToken from '@reach-sh/stdlib/launchToken.mjs'
import {
    LAUNCH_TOKEN,
    VIEW_LENDING_TOKEN,
    ACCEPT_TOKEN
} from '../types'
const stdlib = loadStdlib(process.env);

const id = ''

export const launchTokenAction = (payLoad) => {
    return async (dispatch) => {
        const dashToken = await launchToken(stdlib, payLoad.accOwner, 'dashToken', 'DTN')
        dispatch({ type: LAUNCH_TOKEN, payLoad: dashToken });
    }
}

export const acceptTokenAction = (payLoad) => {
    return async (dispatch) => {
        const ctcOwner = await payLoad.accOwner.contract(backend);

         await backend.Owner(ctcOwner, {
            ...stdlib.hasRandom,
        
            acceptToken: () => {
                return id
                //console.log('try accept token');
            },
        })   

        dispatch({ type: ACCEPT_TOKEN, payLoad: true });
    }
}

export const viewLendingTokenAction = (payLoad) => {
    return async (dispatch) => {
        const ctcOwner = await payLoad.accOwner.contract(backend);

        const data = await backend.Owner(ctcOwner, {
            ...stdlib.hasRandom,
        
            viewLendingToken: (Token) => {
                return Token
                //console.log(`The token accepted for lending is ${Token}`)
            },
        })

        dispatch({ type: VIEW_LENDING_TOKEN, payLoad: data });
    }
}