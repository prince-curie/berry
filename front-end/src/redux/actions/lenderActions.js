import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import launchToken from '@reach-sh/stdlib/launchToken.mjs'
import {
    ACCEPT_LIQUIDITY_TOKEN,
    LEND_TOKEN,
    AMOUNT_SENT
} from '../types'
const stdlib = loadStdlib(process.env);

const id = ''

export const launchTokenAction = (payLoad) => {
    return async (dispatch) => {
        const dashToken = await launchToken(stdlib, payLoad.accOwner, 'dashToken', 'DTN')
        dispatch({ type: LAUNCH_TOKEN, payLoad: dashToken });
    }
}

export const acceptLiquidityTokenAction = (payLoad) => {
    return async (dispatch) => {
        const ctcOwner = await payLoad.accOwner.contract(backend);
        const ctcLender = await payLoad.accLender.contract(backend, ctcOwner.getInfo());

        await backend.Lender(ctcLender, {
            ...stdlib.hasRandom,

            acceptLiquidityToken: (token) => {
                console.log(`Lender accepting liquidity token ${token}`)

                payLoad.accLender.tokenAccept(token);
            },
        })
        dispatch({ type: ACCEPT_LIQUIDITY_TOKEN, payLoad: true });
    }
}

export const lendTokenAction = (payLoad) => {
    return async (dispatch) => {
        const ctcOwner = await payLoad.accOwner.contract(backend);
        const ctcLender = await payLoad.accLender.contract(backend, ctcOwner.getInfo());

        await backend.Lender(ctcLender, {
            ...stdlib.hasRandom,

            lend: () => {
                console.log('try lending');
                return { token: id, amount: 100000 };
            },
        })
        dispatch({ type: LEND_TOKEN, payLoad: true });
    }
}

export const amountSentAction = (payLoad) => {
    return async (dispatch) => {
        const ctcOwner = await payLoad.accOwner.contract(backend);
        const ctcLender = await payLoad.accLender.contract(backend, ctcOwner.getInfo());
        let amountSent

        await backend.Lender(ctcLender, {
            ...stdlib.hasRandom,

            logInt: (amount) => {
                console.log(`Amount sent in is: ${amount}`)
                amountSent = amount
            },
        })

        dispatch({ type: AMOUNT_SENT, payLoad: amountSent });
    }
}