import {
    SET_CONTRACT_INFO,
    SET_ROLE,
    SET_ARGS
} from '../types'

export const setContractInfo = (ctcInfo) => {
    return {
        type: SET_CONTRACT_INFO,
        payload: ctcInfo,
    };
}

export const setRole = (role) => {
    console.log("Role is set: " + role);
    return {
        type: SET_ROLE,
        payload: role
    };
}

export const setArgs = (args) => {
    return {
        type: SET_ARGS,
        payload: args
    };
}