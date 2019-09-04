import React from "react";
import {
    Route,
    Redirect
} from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
    return (<Route {...rest} render={(props) => (
        localStorage.getItem("token") !== null
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }} />
    )} />)
}

export default ProtectedRoute;