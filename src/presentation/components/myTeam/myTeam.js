import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Avatar from "react-avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../my-redux/my-redux";
import ModalHelp from "../modals/modalHelp";
import ModalTeam from "../modals/modalTeam";

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: 100,
        marginBottom: 20
    },
    avatar: {
        textAlign: "center"
    }
}));

function MyTeam(props) {
    const [showModalPlayers, setShowModalPlayers] = useState(false);
    const [showModalHelp, setShowModalHelp] = useState(false);
    const [isChangeTeam, setIsChangeTeam] = useState(false);
    const [avatar, setAvatar] = useState("");
    const [indexPlayer, setIndexPlayer] = useState(-1);
    const [positionSelected, setPositionSelected] = useState("");
    const { getDataDispatch, loadDataUser, setTeamDispatch, team } = props;

    // Load players data
    useEffect(() => {
        if (!loadDataUser) {
            getDataDispatch(1);
            getDataDispatch(2);
        }
    }, [getDataDispatch, loadDataUser]);


    // Chante team
    useEffect(() => {
        if (isChangeTeam) {
            setTeamDispatch(indexPlayer, avatar);
            setIsChangeTeam(false);
        }
    });

    const classes = useStyles();

    const handleClickOpen = (index, position) => {
        console.log("index en el open es ", index);
        setIndexPlayer(index);
        setPositionSelected(position);
        setShowModalPlayers(true);
    };

    const handleClose = () => {
        setShowModalPlayers(false);
    };

    const setPlayer = avatar => {
        console.log("avatar es ", avatar);
        console.log("indexPlayer es ", indexPlayer);
        setAvatar(avatar);
        setIsChangeTeam(true);
        setShowModalPlayers(false);
    };

    console.log("team es ", team);

    return (
        <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
            <Navbar />
            {showModalPlayers ? <ModalTeam data={props.dataUser} positionSelected={positionSelected} onSetPlayer={(avatar) => setPlayer(avatar)} onClose={handleClose} /> : ""}
            {showModalHelp ? <ModalHelp titleHelp="Alineación" textHelp1="Esta es la sección donde puedes crear tu propia alineación para hacer el mejor equipo posible."
                textHelp2="Pulsa sobre cada posición del campo para asignar a uno de los jugadores del mercado de fichajes." onClose={() => setShowModalHelp(false)} /> : ""}
            <Typography
                variant="h4"
                component="h4"
                align="center"
                classes={{ root: classes.title }}
            >
                Alineación <HelpOutlineIcon style={{ cursor: "pointer" }} onClick={() => setShowModalHelp(true)} />
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
                            onClick={() => handleClickOpen(0, "Portero")}
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
                            onClick={() => handleClickOpen(1, "Defensa")}
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
                            onClick={() => handleClickOpen(2, "Defensa")}
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
                            onClick={() => handleClickOpen(3, "Defensa")}
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
                            onClick={() => handleClickOpen(4, "Medio")}
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
                            onClick={() => handleClickOpen(5, "Medio")}
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
                            onClick={() => handleClickOpen(6, "Medio")}
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
                            onClick={() => handleClickOpen(7, "Medio")}
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
                            onClick={() => handleClickOpen(8, "Medio")}
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
                            onClick={() => handleClickOpen(9, "Medio")}
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
                            onClick={() => handleClickOpen(10, "Delantero")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const getDataDispatch = actions.getDataDispatch;
const setTeamDispatch = actions.setTeamDispatch;

export default connect(
    (appState, ownProps) => ({
        dataUser: appState.app.dataUser,
        lastData: appState.app.lastData,
        loadDataUser: appState.app.loadDataUser,
        team: appState.app.team
    }),
    dispatch =>
        bindActionCreators(
            {
                getDataDispatch,
                setTeamDispatch
            },
            dispatch
        )
)(MyTeam);
