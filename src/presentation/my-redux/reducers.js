import { combineReducers } from "redux";
import * as actions from "./actions.js";

const APP_DEFAULT = {
    dataUser: [],
    lastData: [],
    myTeam: [],
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
                dataUser: updateUsers(state.dataUser, action.data)
            };
        case actions.SEND_DELETE_DATA_DISPATCH:
            return {
                ...state,
                dataUser: deleteUser(state.dataUser, action.data)
            };
        case actions.SEND_CREATE_DATA_DISPATCH:
            return {
                ...state,
                dataUser: addUser(state.dataUser, action.data)
            }
        default:
            return state;
    }
};

const updateUsers = (players, newData) => {
    return players.map(player => {
        return player.id === newData.id ? newData : player;
    })
};

const deleteUser = (players, oldPlayerId) => {
    return players.filter(player => { return player.id !== oldPlayerId });
};

const addUser = (players, newPlayer) => {
    let auxPlayers = [...players];
    const idPlayer = players[players.length - 1].id + 7;
    const emailPlayer = newPlayer.first_name + "." + newPlayer.last_name + "@reqres.in";
    auxPlayers.push({ ...newPlayer, id: idPlayer, email: emailPlayer });
    return auxPlayers;
}

export const combinedReducers = combineReducers({ app });
