import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../my-redux/my-redux";
import TablePlayers from "./tablePlayers";
import ModalEdit from "../modals/modalEdit";
import ModalHelp from "../modals/modalHelp";
import ModalCreate from "../modals/modalCreate";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from '@material-ui/core/CircularProgress';
import ModalError from "../modals/modalError";
import "./players.scss";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: 20
    },
    fab: {
        position: "fixed",
        right: 0,
        bottom: 0,
        width: 70,
        height: 70,
        margin: 20,
        "&:focus": {
            outline: 0
        }
    },
    icon: {
        width: 70,
        height: 70
    },
    iconSelected: {
        "&:focus": {
            outline: 0
        }
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        marginTop: "10%"
    }
}));

function Players(props) {
    const {
        getDataDispatch,
        loadDataUser,
        updateDataDispatch,
        deleteDataDispath,
        createDataDispatch,
        error
    } = props;

    const [page, setPage] = useState(1);
    const [totalData, setTotalData] = useState(12);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalHelp, setShowModalHelp] = useState(false);
    const [showModalError, setShowModalEror] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

    // Load player data
    useEffect(() => {
        if (!loadDataUser || page > 1) {
            getDataDispatch(page);
        }
    }, [getDataDispatch, page, loadDataUser]);

    // Update player
    useEffect(() => {
        if (isUpdate) {
            updateDataDispatch(selectedPlayer);
            setIsUpdate(false);
        }
    }, [isUpdate, updateDataDispatch, selectedPlayer]);

    // Delete player
    useEffect(() => {
        if (isDelete) {
            deleteDataDispath(selectedPlayer);
            setIsDelete(false);
            setTotalData(totalData - 1);
        }
    }, [isDelete, deleteDataDispath, selectedPlayer, totalData]);

    // Create player
    useEffect(() => {
        if (isCreate) {
            createDataDispatch(selectedPlayer);
            setIsCreate(false);
            setTotalData(totalData + 1);
        }
    }, [isCreate, createDataDispatch, selectedPlayer, totalData]);

    // Check error
    useEffect(() => {
        if (error.code) {
            setShowModalEror(true);
        }
    }, [error]);

    const onEditPlayer = player => {
        setSelectedPlayer(player);
        setShowModalEdit(true);
    };

    const updatePlayer = position => {
        setSelectedPlayer({ ...selectedPlayer, position });
        setIsUpdate(true);
        setShowModalEdit(false);
    };

    const deletePlayer = player => {
        setSelectedPlayer(player);
        setIsDelete(true);
    };

    const onCreatePlayer = () => {
        setShowModalCreate(true);
    };

    const createPlayer = newPlayer => {
        setSelectedPlayer(newPlayer);
        setIsCreate(true);
        setShowModalCreate(false);
    };

    const classes = useStyles();

    return (
        <div className="container-players">
            <Navbar />
            {showModalError ? (<ModalError titleError="Error al comunicarse con la API" textError={error.message} onClose={() => setShowModalEror(false)} />) : ""}
            {showModalEdit ? (
                <ModalEdit
                    data={selectedPlayer}
                    onClose={() => setShowModalEdit(false)}
                    onUpdate={updatePlayer}
                />
            ) : (
                    ""
                )}
            {showModalHelp ? (
                <ModalHelp
                    titleHelp="Mercado de fichajes"
                    textHelp1="Este es el mercado de fichajes, donde puedes ver todos los jugadores disponibles para crear tu plantilla."
                    textHelp2="Puedes cambiar la posición de los jugadores, eliminarlos o añadir nuevos jugadores."
                    onClose={() => setShowModalHelp(false)}
                />
            ) : (
                    ""
                )}
            {showModalCreate ? (
                <ModalCreate
                    onClose={() => setShowModalCreate(false)}
                    onCreate={createPlayer}
                />
            ) : (
                    ""
                )}
            <div className="container content-players">
                <Typography
                    variant="h4"
                    component="h4"
                    align="center"
                    classes={{ root: classes.title }}
                >
                    Jugadores

                    <IconButton className={classes.iconSelected} onClick={() => setShowModalHelp(true)}>
                        <HelpOutlineIcon />
                    </IconButton>

                </Typography>
                {props.loadDataUser ? (
                    <TablePlayers
                        data={props.dataUser}
                        totalData={page === 1 && props.dataUser.length === 6 ? totalData : props.dataUser.length}
                        getData={page => setPage(page)}
                        onEditPlayer={onEditPlayer}
                        deletePlayer={deletePlayer}
                    />
                ) : (
                        <div className={classes.loading}>
                            <CircularProgress />
                        </div>
                    )}
                <Fab color="primary" className={classes.fab} onClick={onCreatePlayer} >
                    <AddCircleIcon className={classes.icon} />
                </Fab>
            </div>
        </div>
    );
}

const getDataDispatch = actions.getDataDispatch;
const updateDataDispatch = actions.updateDataDispatch;
const deleteDataDispath = actions.deleteDataDispath;
const createDataDispatch = actions.createDataDispatch;

export default connect(
    (appState, ownProps) => ({
        dataUser: appState.app.dataUser,
        lastData: appState.app.lastData,
        totalData: appState.app.totalData,
        loadDataUser: appState.app.loadDataUser,
        error: appState.error
    }),
    dispatch =>
        bindActionCreators(
            {
                getDataDispatch,
                updateDataDispatch,
                deleteDataDispath,
                createDataDispatch
            },
            dispatch
        )
)(Players);
