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
    }
};

export const sendUpdateDataDispatch = data => {
    return {
        type: SEND_UPDATE_DATA_DISPATCH,
        data
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

export const combinedEpics = combineEpics(getDataEpic, updateDataEpic);
