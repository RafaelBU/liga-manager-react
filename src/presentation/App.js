import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/login";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div>
            <App />
            <Switch>
                <Route exact path="/" component={Login} />
                {/* <Route path="/users" component={DataTable} />
                    <Route path="/form" component={DataForm} />
                    <Route component={NotFound} /> */}
            </Switch>
        </div>
    );
}

export default App;
