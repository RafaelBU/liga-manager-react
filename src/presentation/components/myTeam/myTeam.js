import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Avatar from "react-avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../my-redux/my-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
    title: {
        margin: 20
    },
    avatar: {
        textAlign: "center"
    }
}));

function MyTeam(props) {
    const [open, setOpen] = useState(false);
    const [team, setTeam] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]);

    const [indexPlayer, setIndexPlayer] = useState(-1);
    const { getDataDispatch, loadDataUser } = props;
    const [page, setPage] = useState(1);
    //const [refContainer, setRefContainer] = useState(null);

    useEffect(() => {
        if (!loadDataUser || page > 1) {
            getDataDispatch(page);
        }
    }, [getDataDispatch, page, loadDataUser]);

    const classes = useStyles();

    const handleClickOpen = index => {
        console.log("index en el open es ", index);
        setIndexPlayer(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const setPlayer = avatar => {
        console.log("avatar es ", avatar);
        console.log("indexPlayer es ", indexPlayer);
        team[indexPlayer] = avatar;
        setTeam([...team]);
        setOpen(false);
    };

    console.log("team es ", team);

    return (
        <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
            <Navbar />
            <div >
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        Cambiar jugador
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            <ul>
                                {props.dataUser.map(player => {
                                    return (
                                        <li>
                                            <Avatar
                                                src={player.avatar}
                                                size={75}
                                                round={true}
                                                onClick={() =>
                                                    setPlayer(player.avatar)
                                                }
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Aceptar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <Typography
                variant="h4"
                component="h4"
                align="center"
                classes={{ root: classes.title }}
            >
                Alineación <HelpOutlineIcon style={{ cursor: "pointer" }} onClick={() => alert("hola")} />
            </Typography>
            <div
                className="container-fluid"
                style={{
                    height: "90vh",
                    background:
                        "url(https://datos.elconfidencial.com/datos-28062018-alineacion-mundial-22/src/img/Soccer-Field_nuevo-01.png) no-repeat",
                    backgroundSize: "100% 100%"
                }}
            >
                <div className="row justify-content-center mb-4 mb-md-5">
                    <div className="col-12 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={
                                team[0] !== null
                                    ? team[0]
                                    : localStorage.getItem("avatar")
                            }
                            size={75}
                            round={true}
                            onClick={() => handleClickOpen(0)}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-4 mb-md-5">
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={
                                team[1] !== null
                                    ? team[1]
                                    : localStorage.getItem("avatar")
                            }
                            size={75}
                            round={true}
                            onClick={() => handleClickOpen(1)}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={
                                team[2] !== null
                                    ? team[2]
                                    : localStorage.getItem("avatar")
                            }
                            size={75}
                            round={true}
                            onClick={() => handleClickOpen(2)}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={
                                team[3] !== null
                                    ? team[3]
                                    : localStorage.getItem("avatar")
                            }
                            size={75}
                            round={true}
                            onClick={() => handleClickOpen(3)}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-4 mb-md-5">
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={
                                team[4] != null
                                    ? team[4]
                                    : localStorage.getItem("avatar")
                            }
                            size={75}
                            round={true}
                            onClick={() => handleClickOpen(4)}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={
                                team[5] != null
                                    ? team[5]
                                    : localStorage.getItem("avatar")
                            }
                            size={75}
                            round={true}
                            onClick={() => handleClickOpen(5)}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={
                                team[6] !== null
                                    ? team[6]
                                    : localStorage.getItem("avatar")
                            }
                            size={75}
                            round={true}
                            onClick={() => handleClickOpen(6)}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-4 mb-md-5">
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={
                                team[7] !== null
                                    ? team[7]
                                    : localStorage.getItem("avatar")
                            }
                            size={75}
                            round={true}
                            onClick={() => handleClickOpen(7)}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={
                                team[8] !== null
                                    ? team[8]
                                    : localStorage.getItem("avatar")
                            }
                            size={75}
                            round={true}
                            onClick={() => handleClickOpen(8)}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={
                                team[9] !== null
                                    ? team[9]
                                    : localStorage.getItem("avatar")
                            }
                            size={75}
                            round={true}
                            onClick={() => handleClickOpen(9)}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={
                                team[10] !== null
                                    ? team[10]
                                    : localStorage.getItem("avatar")
                            }
                            size={75}
                            round={true}
                            onClick={() => handleClickOpen(10)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const getDataDispatch = actions.getDataDispatch;

export default connect(
    (appState, ownProps) => ({
        dataUser: appState.app.dataUser,
        lastData: appState.app.lastData,
        loadDataUser: appState.app.loadDataUser
    }),
    dispatch =>
        bindActionCreators(
            {
                getDataDispatch
            },
            dispatch
        )
)(MyTeam);
