import {createEpicMiddleware} from "redux-observable";
import * as availableActions from "./actions";
import * as reducers from "./reducers";
import {createStore, applyMiddleware} from "redux";

export const actions = availableActions;

export const store = createStore(
    reducers.combinedReducers,
    applyMiddleware(createEpicMiddleware(actions.combinedEpics))
);
