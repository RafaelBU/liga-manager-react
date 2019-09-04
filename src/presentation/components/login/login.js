import React, { useState } from "react";
import {
    Redirect
} from 'react-router-dom'
import avatar from "../../assets/avatar.jpg";
//import GoogleLogin from "react-google-login";

function Login(props) {
    // const responseGoogle = response => {
    //     console.log(response);
    // };

    const [isAuth, setIsAuth] = useState(false);

    const loginSucces = () => {
        localStorage.setItem("token", 123);
        localStorage.setItem("name", "Rafael Buzón Urbano");
        localStorage.setItem("avatar", avatar);
        setIsAuth(true);
    };

    const { from } = props.location.state || { from: { pathname: '/home' } }


    return (
        isAuth ? <Redirect to={from} /> : <button type="button" onClick={loginSucces}>Click Me!</button>

        /*<GoogleLogin
            clientId="784406214165-b9kjjdc4j062angd690qektitsoej31p.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />*/
    );
}

export default Login;
