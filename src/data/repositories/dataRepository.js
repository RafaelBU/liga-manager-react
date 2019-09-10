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

export const deleteDataDispath = id => {
    return Observable.from(apiDataSource.deleteDataDispath(id))
        .take(1)
        .catch(error => {
            throw parseError(error);
        });
};

export const createDataDispatch = player => {
    return Observable.from(apiDataSource.createDataDispatch(player))
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
                message: "Permiso denegado"
            };
        case 500:
            return {
                code: errors.SERVER_ERROR,
                message: "Error interno en el servidor"
            };
        case 404:
            return {
                code: errors.NOT_FOUND,
                message: "Método no encontrado"
            }
        default:
            return {
                code: errors.UNKNOWN_ERROR,
                message: "Error desconocido"
            };
    }
};

const errors = {
    NOT_FOUND: "NOT_FOUND",
    SERVER_ERROR: "SERVER_ERROR",
    PERMISSION_DENIED_ERROR: "PERMISSION_DENIED_ERROR",
    UNKNOWN_ERROR: "UNKNOWN_AUTH_ERROR"
};
