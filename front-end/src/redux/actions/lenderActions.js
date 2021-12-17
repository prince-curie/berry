import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import {
    ACCEPT_LIQUIDITY_TOKEN,
    LEND_TOKEN,
    AMOUNT_SENT,
    SET_BALANCE,
    SET_LENDER_CONTRACT
} from '../types'
const stdlib = loadStdlib('ALGO');



//lend token
export const lendTokenAction = (payLoad, amount, id) => {
    return async (dispatch) => {
        console.log('was reached 22', payLoad, amount, id)
        payLoad.accLender.tokenAccept(id);

        const ctcLender = await payLoad.accLender.contract(backend, payLoad.ctcOwner.getInfo());

        dispatch({type: SET_LENDER_CONTRACT, payload: ctcLender})
        const Common = () => ({
            viewLendingToken: ({ id, lendingAPY, borrowingAPY }) => {
                console.log(`The token accepted for lending is: tokenId = ${id}, lendingAPY = ${lendingAPY} , borrowingAPY = ${borrowingAPY}`)
            },
            getDate: () => {
                console.log('fetching date')
                let date = 0
                console.log(date)
                return date;
            },
        });

        const Common2 = () => ({
            ...Common(),
            lend: async () => {

                console.log('try lending');
                console.log(`${payLoad.accLender.getAddress()} remaining balance ${await stdlib.balanceOf(payLoad.accLender, id)}`)

                return {
                    token: id, amount: amount, createdAt: Math.floor(Date.now() / 86400000)
                };
            }, 
           
            withdraw: async (amount) => {
                console.log('try withdrawing');
                console.log(`The amount withdrawn is ${amount}`)

                console.log(`${payLoad.accLender.getAddress()} remaining balance ${await stdlib.balanceOf(payLoad.accLender, process.env.REACT_APP_TOKEN_ID)}`)
            },
        });

        await Promise.all([
            backend.Lender(ctcLender, {
                ...Common2()
            })

        ])
    }
}

//withdraw money
export const withdrawAction = (payLoad) => {
    return async (dispatch) => {
        // const ctcOwner = await payLoad.accOwner.contract(backend);
        const ctcLender = await payLoad.accLender.contract(backend, payLoad.ctcOwner.getInfo());

        console.log('withdraw was calles')
        const Common = () => ({
            viewLendingToken: ({ id, lendingAPY, borrowingAPY }) => {
                console.log(`The token accepted for lending is: tokenId = ${id}, lendingAPY = ${lendingAPY} , borrowingAPY = ${borrowingAPY}`)
            },
            getDate: () => {
                console.log('fetching date')
                const date = payLoad.date
                console.log(date)
                return date;
            },
           
        });

        const withdrawal = () => ({
            ...Common(),
            lend: async () => {

                console.log('try lending');
                console.log(`${payLoad.accLender.getAddress()} remaining balance ${await stdlib.balanceOf(payLoad.accLender, process.env.REACT_APP_TOKEN_ID)}`)

                return {
                    token: process.env.REACT_APP_TOKEN_ID, amount:1, createdAt: Math.floor(Date.now() / 86400000)
                };
            },
            withdraw: async (amount) => {
                console.log('try withdrawing');
                console.log(`The amount withdrawn is ${amount}`)

                console.log(`${payLoad.accLender.getAddress()} remaining balance ${await stdlib.balanceOf(payLoad.accLender, process.env.REACT_APP_TOKEN_ID)}`)
            },
        })

        await Promise.all([
            backend.Lender(ctcLender, {
                ...withdrawal()
            })
        ])
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

export const contractBalanceAction = (payLoad) => {
    return async (dispatch) => {
        console.log('what aososososo',payLoad)
        const contractAddress = await payLoad.ctcLender.getContractAddress();
        const address = stdlib.formatAddress(contractAddress)

        var contractBalance = await stdlib.balanceOf(address, payLoad.id)
        console.log(`balance of contract ${contractBalance}`)

        if (typeof contractBalance === 'number') {
            //it's a number
            dispatch({ type: SET_BALANCE, payload: contractBalance });
          }
       
    }
}