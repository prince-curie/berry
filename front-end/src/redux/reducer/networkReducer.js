import {
    SET_ACCOUNT,
    SET_BALANCE,
    SET_NETWORK,
    SET_CONTRACT,
    SET_ID,
    SET_LENDER_CONTRACT,
    SET_USER_BALANCE,
    STORE_USER
} from '../types'

const initNetState = {
    acc: null,
    bal: 0,
    id: null,
    net: null,
    ctc: null,
    user: null,
    userBalance: null,
    ctcLender: null,
};

export const networkReducer = (state = initNetState, action) => {
    switch (action.type) {
        case SET_ACCOUNT:
            return { ...state, acc: action.payload };
        case SET_BALANCE:
            return { ...state, bal: action.payload };
        case SET_USER_BALANCE:
            return { ...state, userBalance: action.payload };
        case SET_ID:
            return { ...state, id: action.payload };
        case SET_NETWORK:
            return { ...state, net: action.payload };
        case SET_CONTRACT:
            return { ...state, ctc: action.payload };
        case SET_LENDER_CONTRACT:
            return { ...state, ctcLender: action.payload };
        case STORE_USER:
            return { ...state, user: action.payload };
        default:
            return state;

    }
}

