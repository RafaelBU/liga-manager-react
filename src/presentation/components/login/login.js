import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./login.scss";
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
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={() => loginSucces()}
                            >
                                Log in with google
                            </Button>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={() => loginSucces()}
                            >
                                Log in with facebook
                            </Button>
                        </div>
                    </div>
                </CardActions>
            </Card>
        </div>
    );

    /*<GoogleLogin
            clientId="784406214165-b9kjjdc4j062angd690qektitsoej31p.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />*/
}

export default Login;
