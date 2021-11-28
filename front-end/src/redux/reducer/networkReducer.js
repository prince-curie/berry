import {
    SET_ACCOUNT,
    SET_BALANCE,
    SET_NETWORK,
    SET_CONTRACT
} from '../types'

const initNetState = {
    acc: null,
    bal: null,
    net: null,
    ctc: null,
};

export const networkReducer = (state = initNetState, action) => {
    switch (action.type) {
        case SET_ACCOUNT:
            return { ...state, acc: action.payload };
        case SET_BALANCE:
            return { ...state, bal: action.payload };
        case SET_NETWORK:
            return { ...state, net: action.payload };
        case SET_CONTRACT:
            return { ...state, ctc: action.payload };
        default:
            return state;

    }
}