import * as apiDataSource from "../datasources/apiDataSource";
import { Observable } from "rxjs";

export const getDataDispatch = page => {
    return Observable.from(apiDataSource.getDataDispatch(page))
        .take(1)
        .catch(error => {
            throw parseError(error);
        });
};

export const updateDataDispatch = data => {
    return Observable.from(apiDataSource.updateDataDispatch(data))
        .take(1)
        .catch(error => {
            throw parseError(error);
        });
};

const parseError = error => {
    switch (error.response.status) {
        case 401:
            return {
                code: errors.PERMISSION_DENIED_ERROR,
                message: error.message
            };
        case 500:
            return {
                code: errors.INVALID_DOCUMENT,
                message: error.message
            };
        default:
            return {
                code: errors.UNKNOWN_ERROR,
                message: error.message
            };
    }
};

const errors = {
    SERVER_ERROR: "SERVER_ERROR",
    PERMISSION_DENIED_ERROR: "PERMISSION_DENIED_ERROR",
    UNKNOWN_ERROR: "UNKNOWN_AUTH_ERROR"
};
