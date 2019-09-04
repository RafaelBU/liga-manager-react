import {combineEpics} from "redux-observable";
import {dataRepository} from "../../data/data";
import {Observable} from "rxjs";

export const ERROR = "ERROR";
export const error = error => {
    return {
        type: ERROR,
        error: error
    };
};

export const GET_DATA_DISPATCH = "GET_DATA_DISPATCH";
export const SEND_DATA_DISPATCH = "SEND_DATA_DISPATCH";

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

const dataEpic = action$ =>
    action$.ofType(GET_DATA_DISPATCH).mergeMap(action =>
        dataRepository
            .getDataDispatch(action.page)
            .map(sendDataDispatch)
            .catch(err => Observable.of(error(err)))
    );

export const combinedEpics = combineEpics(dataEpic);
