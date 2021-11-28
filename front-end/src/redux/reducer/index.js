import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { networkReducer } from "./networkReducer";

const allReducers = combineReducers({
    app: appReducer,
    net: networkReducer,
});

export default allReducers;
