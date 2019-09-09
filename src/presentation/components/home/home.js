import React, {useState} from "react";
import Navbar from "../navbar/navbar";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ModalHelp from "../modals/modalHelp";

function Home() {
    const [showModalHelp, setShowModalHelp] = useState(false);

    const useStyles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(3, 2),
            height: "45vh",
            margin: 20,
            background:
                "url(http://img2.rtve.es/i/?w=1600&i=1562141178452.jpg) no-repeat",
            backgroundSize: "100% 100%"
        },
        root2: {
            padding: theme.spacing(3, 2),
            height: "45vh",
            margin: 20,
            background:
                "url(http://www.futbolprimera.es/files/campo-de-futbol_4.jpeg) no-repeat",
            backgroundSize: "100% 100%"
        },
        title: {
            margin: 20,
            marginBottom: 0
        }
    }));

    const classes = useStyles();

    return (
        <div style={{backgroundColor: "#f5f5f5", height: "100vh"}}>
            <Navbar />
            <div className="container" style={{marginTop: 100}}>
                {showModalHelp ? (
                    <ModalHelp
                        titleHelp="Liga manager"
                        textHelp1="Bienvenido a Liga Manager, un sencillo e intuitivo simulador de gestión de plantillas de futbol, esta es la sección principal."
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
                    classes={{root: classes.title}}
                >
                    Liga Manager{" "}
                    <HelpOutlineIcon
                        style={{cursor: "pointer"}}
                        onClick={() => setShowModalHelp(true)}
                    />
                </Typography>

                <div className="row" style={{height: "80vh"}}>
                    <div className="col-md-12">
                        <Paper className={classes.root} elevation={2}>
                            <NavLink to="/players">
                                <div style={{height: "100%"}} />
                            </NavLink>
                        </Paper>
                    </div>
                    <div className="col-md-12">
                        <Paper className={classes.root2} elevation={2}>
                            <NavLink to="/myTeam">
                                <div style={{height: "100%"}} />
                            </NavLink>
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
