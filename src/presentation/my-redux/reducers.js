import { combineReducers } from "redux";
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
        case actions.SEND_UPDATE_DATA_DISPATCH:
            return {
                ...state,
                dataUser: updateArrayUsers(state.dataUser, action.data)
            }
        default:
            return state;
    }
};

const updateArrayUsers = (players, newData) => {
    return players.map(player => {
        return player.id === newData.id ? newData : player;
    })
};

export const combinedReducers = combineReducers({ app });
