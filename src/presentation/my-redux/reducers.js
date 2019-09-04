import {combineReducers} from "redux";
import * as actions from "./actions.js";

const APP_DEFAULT = {
    dataUser: [],
    lastData: [],
    loadDataUser: false
};
const app = (state = APP_DEFAULT, action) => {
    switch (action.type) {
        case actions.SEND_DATA_DISPATCH:
            return {
                ...state,
                dataUser: state.dataUser.concat(action.data),
                lastData: action.data,
                loadDataUser: true
            };
        default:
            return state;
    }
};

export const combinedReducers = combineReducers({app});
