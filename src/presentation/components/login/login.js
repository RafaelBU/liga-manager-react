import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GoogleLogin from "react-google-login";
import googleLogo from "../../assets/google.svg";
import ModalError from "../modals/modalError";
import "./login.scss";

function Login(props) {
    const [isAuth, setIsAuth] = useState(false);
    const [showModalError, setShowModalError] = useState(false);

    const loginSucces = response => {
        localStorage.setItem("token", response.tokenId);
        localStorage.setItem("name", response.profileObj.name);
        localStorage.setItem("avatar", response.profileObj.imageUrl);
        setIsAuth(true);
    };

    const loginFailure = () => {
        setShowModalError(true);
    };

    const { from } = props.location.state || { from: { pathname: "/home" } };

    const useStyles = makeStyles(theme => ({
        card: {
            minWidth: 275,
        },
        bullet: {
            display: "inline-block",
            margin: "0 2px",
            transform: "scale(0.8)"
        },
        title: {
            fontSize: 20,
            padding: 10
        },
        cardActions: {
            paddingBottom: 20,
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
                {showModalError ? <ModalError titleError="Error al iniciar sesión"
                    textError="Hubo un problema al inciar sesión, vuelva a intentarlo"
                    onClose={() => setShowModalError(false)} /> : ""}
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            align="center"
                        >
                            Liga Manager
                    </Typography>
                    </CardContent>
                    <CardActions classes={{ root: classes.cardActions }}>
                        <div>
                            <GoogleLogin
                                clientId="784406214165-b9kjjdc4j062angd690qektitsoej31p.apps.googleusercontent.com"
                                render={renderProps => (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        onClick={renderProps.onClick}
                                    >
                                        <img src={googleLogo} alt="google-logo" /> <span className="login-title">Iniciar sesión</span>
                                    </Button>
                                )}
                                onSuccess={loginSucces}
                                onFailure={loginFailure}
                            />
                        </div>
                    </CardActions>
                </Card>
            </div>
        );
}

export default Login;
