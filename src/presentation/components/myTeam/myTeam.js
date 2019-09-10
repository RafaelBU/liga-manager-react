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
import IconButton from "@material-ui/core/IconButton";
import "./myTeam.scss";

const useStyles = makeStyles(() => ({
    title: {
        marginTop: 100,
        marginBottom: 20
    },
    avatar: {
        cursor: "pointer"
    },
    iconSelected: {
        "&:focus": {
            outline: 0
        }
    },
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
    }, [isChangeTeam, setTeamDispatch, indexPlayer, avatar]);

    const classes = useStyles();

    const handleClickOpen = (index, position) => {
        setIndexPlayer(index);
        setPositionSelected(position);
        setShowModalPlayers(true);
    };

    const handleClose = () => {
        setShowModalPlayers(false);
    };

    const setPlayer = avatar => {
        setAvatar(avatar);
        setIsChangeTeam(true);
        setShowModalPlayers(false);
    };

    return (
        <div className="container-myTeam">
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
                Alineación
                <IconButton className={classes.iconSelected} onClick={() => setShowModalHelp(true)}>
                    <HelpOutlineIcon />
                </IconButton>
            </Typography>
            <div
                className="container stadium-style"
            >
                <div className="row justify-content-center mb-4 mb-md-5">
                    <div className="col-12 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={team[0]}
                            size={75}
                            round={true}
                            className={classes.avatar}
                            onClick={() => handleClickOpen(0, "Portero")}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-4 mb-md-5">
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={team[1]}
                            size={75}
                            round={true}
                            className={classes.avatar}
                            onClick={() => handleClickOpen(1, "Defensa")}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={team[2]}
                            size={75}
                            round={true}
                            className={classes.avatar}
                            onClick={() => handleClickOpen(2, "Defensa")}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={team[3]}
                            size={75}
                            round={true}
                            className={classes.avatar}
                            onClick={() => handleClickOpen(3, "Defensa")}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-4 mb-md-5">
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={team[4]}
                            size={75}
                            round={true}
                            className={classes.avatar}
                            onClick={() => handleClickOpen(4, "Medio")}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={team[5]}
                            size={75}
                            round={true}
                            className={classes.avatar}
                            onClick={() => handleClickOpen(5, "Medio")}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={team[6]}
                            size={75}
                            round={true}
                            className={classes.avatar}
                            onClick={() => handleClickOpen(6, "Medio")}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-4 mb-md-5">
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={team[7]}
                            size={75}
                            round={true}
                            className={classes.avatar}
                            onClick={() => handleClickOpen(7, "Medio")}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={team[8]}
                            size={75}
                            round={true}
                            className={classes.avatar}
                            onClick={() => handleClickOpen(8, "Medio")}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={team[9]}
                            size={75}
                            round={true}
                            className={classes.avatar}
                            onClick={() => handleClickOpen(9, "Medio")}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <Avatar
                            alt="player-avatar"
                            src={team[10]}
                            size={75}
                            round={true}
                            className={classes.avatar}
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
