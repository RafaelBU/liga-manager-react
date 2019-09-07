import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../my-redux/my-redux";
import ModalEdit from "../modals/modalEdit";

const useStyles = makeStyles(theme => ({
    root: {
        //display: "flex",
        //justifyContent: "center",
        width: "100%",
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: 20
    },
    inline: {
        display: "inline"
    },
    itemText: {
        width: "25%",
        textAlign: "left"
    }
}));

function Players(props) {
    const { getDataDispatch, loadDataUser, updateDataDispatch, deleteDataDispath } = props;

    const [page, setPage] = useState(1);
    // const [positions] = useState(["Portero", "Defensa", "Medio", "Delantero"]);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    //const [refContainer, setRefContainer] = useState(null);

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
    });

    // Delete player
    useEffect(() => {
        if (isDelete) {
            deleteDataDispath(selectedPlayer);
            setIsDelete(false);
        }
    });

    // Create player

    const onEditPlayer = player => {
        setSelectedPlayer(player);
        setShowModalEdit(true)
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

    const createPlayer = () => {

    }

    const classes = useStyles();

    console.log("Info actualizada ", selectedPlayer);

    console.log("DATA USER ES ", props.dataUser);

    return (
        <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
            <Navbar />
            {showModalEdit ? <ModalEdit data={selectedPlayer} onClose={() => setShowModalEdit(false)} onUpdate={(newData) => updatePlayer(newData)} /> : ""}
            <div className="container-fluid" style={{ marginTop: 100 }}>
                <Typography
                    variant="h4"
                    component="h4"
                    align="center"
                    classes={{ root: classes.title }}
                >
                    Jugadores <HelpOutlineIcon style={{ cursor: "pointer" }} onClick={() => alert("hola")} />
                </Typography>
                <List className={classes.root}>
                    {props.loadDataUser
                        ? props.dataUser.map((user, index) => {
                            return (
                                <div key={index}>
                                    <ListItem >
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="player-avatar"
                                                src={user.avatar}
                                                onClick={() => onEditPlayer(user)}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                user.first_name
                                            }
                                            classes={{ root: classes.itemText }}
                                        />
                                        {/* <ListItemText
                                              primary={user.email}
                                              //primary="prueba@mail.com"
                                              //classes={{root: classes.itemText}}
                                          /> */}
                                        <ListItemText
                                            primary={
                                                user.position ? user.position : "Sin asignar"
                                            }
                                            classes={{ root: classes.itemText }}
                                        />
                                        {/* <ListItemIcon
                                              classes={{root: classes.itemText}}
                                          >
                                              <EditIcon />
                                          </ListItemIcon> */}
                                        <ListItemIcon>
                                            <DeleteIcon onClick={() => deletePlayer(user)} />
                                        </ListItemIcon>
                                        {/* <ListItemText
                                              primary="Brunch this weekend?"
                                              secondary={
                                                  <React.Fragment>
                                                      <Typography
                                                          component="span"
                                                          variant="body2"
                                                          className={
                                                              classes.inline
                                                          }
                                                          color="textPrimary"
                                                      >
                                                          Ali Connors
                                                      </Typography>
                                                      {
                                                          " — I'll be in your neighborhood doing errands this…"
                                                      }
                                                  </React.Fragment>
                                              }
                                          /> */}
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </div>
                            );
                        })
                        : "Load..."}
                </List>
                <AddCircleIcon color="primary" style={{
                    position: "fixed",
                    right: 0,
                    bottom: 0,
                    width: 80,
                    height: 80,
                    margin: 20
                }} onClick={() => createPlayer()} />
            </div>
        </div>
    );
}

const getDataDispatch = actions.getDataDispatch;
const updateDataDispatch = actions.updateDataDispatch;
const deleteDataDispath = actions.deleteDataDispath;

export default connect(
    (appState, ownProps) => ({
        dataUser: appState.app.dataUser,
        lastData: appState.app.lastData,
        loadDataUser: appState.app.loadDataUser
    }),
    dispatch =>
        bindActionCreators(
            {
                getDataDispatch,
                updateDataDispatch,
                deleteDataDispath
            },
            dispatch
        )
)(Players);
