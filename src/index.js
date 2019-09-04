import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./presentation/App";
import {BrowserRouter as Router} from "react-router-dom";
//import {connect, Provider} from "react-redux";
import {store} from "./presentation/my-redux/my-redux";
import {Provider} from "react-redux";
import * as serviceWorker from "./presentation/serviceWorker";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
