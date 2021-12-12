import {
    SET_ACCOUNT,
    SET_BALANCE,
    SET_NETWORK,
    SET_CONTRACT,
    STORE_USER
} from '../types';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');
//reach.setProviderByName('TestNet')

export const setAccount = (acc) => {
    return {
        type: SET_ACCOUNT,
        payload: acc
    };
}

export const setBalance = (bal) => {
    return (dispatch) => {
        dispatch({
          type: SET_BALANCE,
        payload: bal
        })
    };
}

export const setNetwork = (net) => {
    return (dispatch) => {
        dispatch({
          type: SET_NETWORK,
        payload: net
        })
    };
}

export const setContract = (ctc) => {
    return {
        type: SET_CONTRACT,
        payload: ctc
    };
}

export const disconnect = () => {
  return (dispatch) => {
    dispatch({type: STORE_USER, payload: null})
  }
}

export const storeWallet = (payload) => {
     return async (dispatch) => {
         let user;
        if(typeof window.AlgoSigner !== 'undefined') {
            // connects to the browser AlgoSigner instance
            window.AlgoSigner.connect()
            // finds the TestNet accounts currently in AlgoSigner
            .then(() => window.AlgoSigner.accounts({
                ledger: 'TestNet'
            }))
            .then((accountData) => {
                // the accountData object should contain the Algorand addresses from TestNet that AlgoSigner currently knows about
                console.log('ahajakl',accountData);
                user = accountData
                localStorage.setItem('address', user)
                dispatch({ type: STORE_USER, payload: accountData });
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

export const handleImportAccount = (mnemonic) => {
    return async (dispatch) => {
    try {
      const acc = await reach.newAccountFromMnemonic(mnemonic.trim())

      // check balance of account before funding
      let balanceOfAcc = await reach.balanceOf(acc)
      console.log("Checking the balance of our imported account")
      console.log(reach.formatCurrency(balanceOfAcc, 6))
      dispatch({ type: STORE_USER, payload: acc });

    }
    catch (err) {
      console.log(err)
      alert('Something went wrong. Please try again later');
    }
}
  }

  export const createNewAccount = () => {
    return async (dispatch) => {
    try {
      // Create New Account
      const acc = await reach.createAccount();

      // check balance of given Account
      let balanceOfAcc = await reach.balanceOf(acc)
      console.log("Checking the balance of our new account", acc)
      console.log(reach.formatCurrency(balanceOfAcc, 6))

      // Set this account as the global account
      dispatch({ type: STORE_USER, payload: acc });
    
    } catch (error) {
      console.log(error)
      alert('Something went wrong. Please try again later');
    }
}
  }
