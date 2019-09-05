import React, { useState, useEffect } from "react";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const useStyles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(3, 2),
            height: windowHeight <= 768 ? "35%" : "50%",
            width: windowWidth <= 768 ? "100%" : "50%",
            margin: 10,
            background: "url(http://img2.rtve.es/i/?w=1600&i=1562141178452.jpg) no-repeat",
            backgroundSize: "100% 100%"
        },
        root2: {
            padding: theme.spacing(3, 2),
            height: windowHeight <= 768 ? "35%" : "50%",
            width: windowWidth <= 768 ? "100%" : "50%",
            margin: 10,
            background: "url(http://www.futbolprimera.es/files/campo-de-futbol_4.jpeg) no-repeat",
            backgroundSize: "100% 100%"
        },
        title: {
            margin: 20,
            marginBottom: 0
        },
    }));

    const classes = useStyles();

    useEffect(() => {
        window.addEventListener('resize', updateDimension);
    }, []);

    useEffect(() => {
        updateDimension();

        return () => {
            return () => window.removeEventListener('resize', updateDimension);
        }
    }, [windowWidth, windowHeight])

    const updateDimension = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }

    return (
        <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
            <Navbar />
            <Typography
                variant="h4"
                component="h4"
                align="center"
                classes={{ root: classes.title }}
            >
                Liga Manager <HelpOutlineIcon style={{ cursor: "pointer" }} onClick={() => alert("hola")} />
            </Typography>
            <div className="container-fluid">
                <div
                    style={{
                        display: "flex",
                        //flexDirection: "column",
                        flexWrap: windowWidth <= 768 ? "wrap" : "no-wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80vh"
                    }}
                >
                    <Paper className={classes.root} elevation={2}>
                        <NavLink to="/players" ><div style={{ height: "100%" }} /></NavLink>
                    </Paper>
                    <Paper className={classes.root2} elevation={2}>
                        <NavLink to="/myTeam" ><div style={{ height: "100%" }} /></NavLink>
                    </Paper>
                </div>

                {/*  <div className="row" style={{ alignItems: "center" }}>
                    <div className="col-12 col-md-6">
                        <Paper className={classes.root}>
                            <Typography variant="h5" component="h3">
                                This is a sheet of paper.
                            </Typography>
                            <Typography component="p">
                                <NavLink to="/players">JUGADORES</NavLink>
                            </Typography>
                        </Paper>
                    </div>
                    <div className="col-12 col-md-6">
                        <Paper className={classes.root}>
                            <Typography variant="h5" component="h3">
                                This is a sheet of paper.
                            </Typography>
                            <Typography component="p">
                                <NavLink to="/myTeam">MI EQUIPO</NavLink>
                            </Typography>
                        </Paper>
                    </div>
                </div> */}
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Home;
