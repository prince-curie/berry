import {
    SET_ACCOUNT,
    SET_BALANCE,
    SET_NETWORK,
    SET_CONTRACT
} from '../types'

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