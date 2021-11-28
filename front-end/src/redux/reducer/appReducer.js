import {
    SET_CONTRACT_INFO,
    SET_ROLE,
    SET_ARGS
} from '../types'

const initAppState = {
    ctcInfo: null,
    participant: "",
    args: {}
};

export const appReducer = (state = initAppState, action) => {
    switch (action.type) {
        case SET_CONTRACT_INFO:
            return { ...state, ctcInfo: action.payload };
        case SET_ROLE:
            return { ...state, participant: action.payload };
        case SET_ARGS:
            return { ...state, args: { ...state.args, ...action.payload } };
        default:
            return state;
    }
}