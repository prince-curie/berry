import {
    SET_ACCOUNT,
    SET_BALANCE,
    SET_NETWORK,
    SET_CONTRACT,
    STORE_USER
} from '../types';
import { loadStdlib } from "@reach-sh/stdlib";

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
         console.log('received', payload)
          // Load standard library with selected network
      const stdlib = loadStdlib(payload);
      //get the account
      const acc = await stdlib.getDefaultAccount();
       // Get the balance of the account
    const balAtomic = await stdlib.balanceOf(acc);
    const bal = stdlib.formatCurrency(balAtomic, 4);
    let user = {
        address: acc,
        balance: bal,
        network: payload
    }

    dispatch({ type: STORE_USER, payLoad: user });
     }
}