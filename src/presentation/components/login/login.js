import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import googleLogo from "../../assets/google.svg";
// import facebookLogo from "../../assets/facebook.svg";
import "./login.scss";
import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

function Login(props) {
    // const responseGoogle = response => {
    //     console.log(response);
    // };

    const [isAuth, setIsAuth] = useState(false);

    const loginSucces = response => {
        // localStorage.setItem("token", response.accessToken);
        // localStorage.setItem("name", response.profileObj.name);
        // localStorage.setItem("avatar", response.profileObj.imageUrl);
        localStorage.setItem("token", 123);
        localStorage.setItem("name", "Rafael Buzón Urbano");
        localStorage.setItem("avatar", avatar);

        setIsAuth(true);
    };

    const loginFailure = response => {
        console.log("response failure ", response);
    };

    // const responseFacebook = response => {
    //     console.log("RESPONSE DE FACEBOOK ", response);
    // };

    const {from} = props.location.state || {from: {pathname: "/home"}};

    const useStyles = makeStyles(theme => ({
        card: {
            minWidth: 275
            //width: 400,
        },
        bullet: {
            display: "inline-block",
            margin: "0 2px",
            transform: "scale(0.8)"
        },
        title: {
            fontSize: 20,
            padding: 20
        },
        cardActions: {
            padding: 20,
            justifyContent: "center"
        },
        button: {
            margin: theme.spacing(1)
        }
    }));

    const classes = useStyles();

    return isAuth ? (
        <Redirect to={from} />
    ) : (
        <div className="container-login">
            <Card className={classes.card}>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        align="center"
                    >
                        Bienvenido a Liga Manager
                    </Typography>
                </CardContent>
                <CardActions classes={{root: classes.cardActions}}>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={() => loginSucces()}
                        >
                            <img src={googleLogo} alt="google-logo" />
                        </Button>
                        {/* <GoogleLogin
                            clientId="784406214165-b9kjjdc4j062angd690qektitsoej31p.apps.googleusercontent.com"
                            render={renderProps => (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={renderProps.onClick}
                                >
                                    <img src={googleLogo} alt="google-logo" />
                                </Button>
                            )}
                            onSuccess={loginSucces}
                            onFailure={loginFailure}
                        /> */}
                        {/* <div>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={() => loginSucces()}
                            >
                                <img src={googleLogo} alt="google-logo" />
                            </Button>
                        </div> */}
                        {/* <div>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={() => loginSucces()}
                            >
                                <img src={facebookLogo} alt="facebook-logo" />
                            </Button>
                        </div>
                        <FacebookLogin
                            appId="385226395712116"
                            fields="name,email,picture"
                            callback={responseFacebook}
                            render={renderProps => (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={renderProps.onClick}
                                >
                                    <img
                                        src={facebookLogo}
                                        alt="facebook-logo"
                                    />
                                </Button>
                            )}
                        /> */}
                    </div>
                </CardActions>
            </Card>
        </div>
    );
}

export default Login;
