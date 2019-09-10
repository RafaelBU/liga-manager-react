import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ModalHelp from "../modals/modalHelp";
import "./home.scss";

function Home() {
    const [showModalHelp, setShowModalHelp] = useState(false);

    const useStyles = makeStyles(() => ({
        title: {
            margin: 20,
            marginBottom: 0
        },
        iconSelected: {
            "&:focus": {
                outline: 0
            }
        },
    }));

    const classes = useStyles();

    return (
        <div className="container-home">
            <Navbar />
            <div className="container content-home">
                {showModalHelp ? (
                    <ModalHelp
                        titleHelp="Liga manager"
                        textHelp1="Bienvenido a Liga Manager, un sencillo e intuitivo simulador de gestión de plantillas de fútbol, esta es la sección principal."
                        textHelp2="Desde aquí puedes acceder a las distintas secciones del simulador: Mercado de fichajes y Alineación."
                        onClose={() => setShowModalHelp(false)}
                    />
                ) : (
                        ""
                    )}
                <Typography
                    variant="h4"
                    component="h4"
                    align="center"
                    classes={{ root: classes.title }}
                >
                    Liga Manager
                    <IconButton className={classes.iconSelected} onClick={() => setShowModalHelp(true)}>
                        <HelpOutlineIcon />
                    </IconButton>

                </Typography>

                <div className="row container-papers">
                    <div className="col-md-12">
                        <Paper className="paper-mercado-style" elevation={2}>
                            <NavLink to="/players">
                                <div className="paper-style" />
                            </NavLink>
                        </Paper>
                    </div>
                    <div className="col-md-12">
                        <Paper className="paper-alineacion-style" elevation={2}>
                            <NavLink to="/myTeam">
                                <div className="paper-style" />
                            </NavLink>
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
