import React from "react";
import "./App.css";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Players from "./components/players/players";
import MyTeam from "./components/myTeam/myTeam";
import NotFound from "./components/404/404";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <ProtectedRoute path="/home" component={Home} />
                <ProtectedRoute path="/players" component={Players} />
                <ProtectedRoute path="/myTeam" component={MyTeam} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
