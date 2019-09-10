import { combineReducers } from "redux";
import * as actions from "./actions.js";

const APP_DEFAULT = {
    dataUser: JSON.parse(localStorage.getItem("dataUser")) || [],
    lastData: JSON.parse(localStorage.getItem("lastData")) || [],
    team: JSON.parse(localStorage.getItem("team")) || [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    loadDataUser: JSON.parse(localStorage.getItem("loadDataUser")) || false,
    totalData: localStorage.getItem("totalData") ? parseInt(localStorage.getItem("totalData")) : 12
};

const app = (state = APP_DEFAULT, action) => {
    switch (action.type) {
        case actions.SEND_DATA_DISPATCH:
            return {
                ...state,
                dataUser: saveDataUser(state.dataUser, action.data),
                lastData: saveLastDataUser(action.data),
                loadDataUser: saveLoadDataUser()
            };
        case actions.SEND_UPDATE_DATA_DISPATCH:
            return {
                ...state,
                dataUser: updateUsers(state.dataUser, action.data)
            };
        case actions.SEND_DELETE_DATA_DISPATCH:
            return {
                ...state,
                dataUser: deleteUser(
                    state.dataUser,
                    action.data,
                    state.totalData
                )
            };
        case actions.SEND_CREATE_DATA_DISPATCH:
            return {
                ...state,
                dataUser: addUser(state.dataUser, action.data, state.totalData)
            };
        case actions.SET_TEAM_DISPATCH:
            return {
                ...state,
                team: setTeam(state.team, action.index, action.avatar)
            };
        default:
            return state;
    }
};

const error = (state = {}, action) => {
    switch (action.type) {
        case actions.ERROR:
            return {
                ...state,
                ...action.error
            };
        default:
            return state;
    }
};

const saveDataUser = (players, newPlayers) => {
    const result = players.concat(newPlayers);
    localStorage.setItem("dataUser", JSON.stringify(result));
    return result;
};

const saveLastDataUser = newPlayers => {
    localStorage.setItem("lastData", JSON.stringify(newPlayers));
    return newPlayers;
};

const saveLoadDataUser = () => {
    localStorage.setItem("loadDataUser", true);
    return true;
};

const updateUsers = (players, newData) => {
    const result = players.map(player => {
        return player.id === newData.id ? newData : player;
    });
    localStorage.setItem("dataUser", JSON.stringify(result));
    return result;
};

const deleteUser = (players, oldPlayerId, totalData) => {
    const result = players.filter(player => {
        return player.id !== oldPlayerId;
    });
    localStorage.setItem("dataUser", JSON.stringify(result));
    localStorage.setItem("totalData", totalData - 1);
    return result;
};

const addUser = (players, newPlayer, totalData) => {
    let auxPlayers = [...players];
    const idPlayer = players[players.length - 1].id + 7;
    const emailPlayer =
        newPlayer.first_name + "." + newPlayer.last_name + "@reqres.in";
    auxPlayers.push({ ...newPlayer, id: idPlayer, email: emailPlayer });
    localStorage.setItem("dataUser", JSON.stringify(auxPlayers));
    localStorage.setItem("totalData", totalData + 1);
    return auxPlayers;
};

const setTeam = (team, index, avatar) => {
    let auxTeam = [...team];
    auxTeam[index] = avatar;
    localStorage.setItem("team", JSON.stringify(auxTeam));
    return auxTeam;
};

export const combinedReducers = combineReducers({ app, error });
