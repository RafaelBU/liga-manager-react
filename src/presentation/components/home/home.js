import React from "react";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        height: "35%",
        width: "50%",
        margin: 20
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <Paper className={classes.root} elevation={2}>
                        <Typography variant="h5" component="h3" align="center">
                            This is a sheet of paper.
                    </Typography>
                        <Typography component="p" align="center">
                            <NavLink to="/players">JUGADORES</NavLink>
                        </Typography>
                    </Paper>
                    <Paper className={classes.root}>
                        <Typography variant="h5" component="h3" align="center">
                            This is a sheet of paper.
                    </Typography>
                        <Typography component="p" align="center">
                            <NavLink to="/myTeam">MI EQUIPO</NavLink>
                        </Typography>
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
            <Footer />
        </div>


    );
};

export default Home;