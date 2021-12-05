import {
    SET_ACCOUNT,
    SET_BALANCE,
    SET_NETWORK,
    SET_CONTRACT,
    STORE_USER
} from '../types';
//import { loadStdlib } from "@reach-sh/stdlib";
import * as reach from '@reach-sh/stdlib/ALGO'

export const setAccount = (acc) => {
    return {
        type: SET_ACCOUNT,
        payload: acc
    };
}

export const setBalance = (bal) => {
    return {
        type: SET_BALANCE,
        payload: bal
    };
}

export const setNetwork = (net) => {
    return {
        type: SET_NETWORK,
        payload: net
    };
}

export const setContract = (ctc) => {
    return {
        type: SET_CONTRACT,
        payload: ctc
    };
}

export const storeWallet = (payload) => {
     return async (dispatch) => {
         let user;
        if(typeof window.AlgoSigner !== 'undefined') {
            // connects to the browser AlgoSigner instance
            window.AlgoSigner.connect()
            // finds the TestNet accounts currently in AlgoSigner
            .then(() => window.AlgoSigner.accounts({
                ledger: 'MainNet'
            }))
            .then((accountData) => {
                // the accountData object should contain the Algorand addresses from TestNet that AlgoSigner currently knows about
                console.log(accountData[0]);
                user = accountData[0]
                localStorage.setItem('address', user.address)
                dispatch({ type: STORE_USER, payLoad: accountData[0] });
            })
            .catch((e) => {
                // handle errors and perform error cleanup here
                console.error(e);
            })
        } else {
            alert('Please install AlgoSigner')
        }
      
   
     }
}