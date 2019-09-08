import { combineEpics } from "redux-observable";
import { dataRepository } from "../../data/data";
import { Observable } from "rxjs";

export const ERROR = "ERROR";
export const error = error => {
    return {
        type: ERROR,
        error: error
    };
};

export const GET_DATA_DISPATCH = "GET_DATA_DISPATCH";
export const SEND_DATA_DISPATCH = "SEND_DATA_DISPATCH";
export const UPDATE_DATA_DISPATCH = "UPDATE_DATA_DISPATCH";
export const SEND_UPDATE_DATA_DISPATCH = "SEND_UPDATE_DATA_DISPATCH";
export const DELETE_DATA_DISPATCH = "DELETE_DATA_DISPATCH";
export const SEND_DELETE_DATA_DISPATCH = "SEND_DELETE_DATA_DISPATCH";
export const CREATE_DATA_DISPATCH = "CREATE_DATA_DISPATCH";
export const SEND_CREATE_DATA_DISPATCH = "SEND_CREATE_DATA_DISPATCH";
export const SET_TEAM_DISPATCH = "SET_TEAM_DISPATCH";

export const getDataDispatch = page => {
    return {
        type: GET_DATA_DISPATCH,
        page
    };
};

export const sendDataDispatch = data => {
    return {
        type: SEND_DATA_DISPATCH,
        data
    };
};

export const updateDataDispatch = player => {
    return {
        type: UPDATE_DATA_DISPATCH,
        player
    };
};

export const sendUpdateDataDispatch = data => {
    return {
        type: SEND_UPDATE_DATA_DISPATCH,
        data
    };
};

export const deleteDataDispath = player => {
    return {
        type: DELETE_DATA_DISPATCH,
        playerId: player.id
    };
};

export const sendDeleteDataDispatch = data => {
    return {
        type: SEND_DELETE_DATA_DISPATCH,
        data
    };
};

export const createDataDispatch = player => {
    return {
        type: CREATE_DATA_DISPATCH,
        player
    };
};

export const sendCreateDataDispatch = data => {
    return {
        type: SEND_CREATE_DATA_DISPATCH,
        data
    };
};

export const setTeamDispatch = (index, avatar) => {
    return {
        type: SET_TEAM_DISPATCH,
        index,
        avatar
    }
}

const getDataEpic = action$ =>
    action$.ofType(GET_DATA_DISPATCH).mergeMap(action =>
        dataRepository
            .getDataDispatch(action.page)
            .map(sendDataDispatch)
            .catch(err => Observable.of(error(err)))
    );

const updateDataEpic = action$ =>
    action$.ofType(UPDATE_DATA_DISPATCH).mergeMap(action =>
        dataRepository
            .updateDataDispatch(action.player)
            .map(sendUpdateDataDispatch)
            .catch(err => Observable.of(error(err)))
    );

const deleteDataEpic = action$ =>
    action$.ofType(DELETE_DATA_DISPATCH).mergeMap(action =>
        dataRepository
            .deleteDataDispath(action.playerId)
            .map(sendDeleteDataDispatch)
            .catch(err => Observable.of(error(err)))
    );

const createDataEpic = action$ =>
    action$.ofType(CREATE_DATA_DISPATCH).mergeMap(action =>
        dataRepository
            .createDataDispatch(action.player)
            .map(sendCreateDataDispatch)
            .catch(err => Observable.of(error(err)))
    );

export const combinedEpics = combineEpics(getDataEpic, updateDataEpic, deleteDataEpic, createDataEpic);
