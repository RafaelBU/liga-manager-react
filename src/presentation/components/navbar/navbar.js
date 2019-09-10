import React from "react";
import Avatar from "react-avatar";
import { NavLink } from "react-router-dom";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { GoogleLogout } from "react-google-login";
import "./navbar.scss";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
}));

function Navbar() {
    const name = localStorage.getItem("name");
    const avatar = localStorage.getItem("avatar");

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const logout = () => {
        localStorage.clear();
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <NavLink
                            to="/home"
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Liga Manager
                        </NavLink>
                    </Typography>
                    <div className="navbar-avatar-container">
                        <Avatar src={avatar} size={50} round={true} />
                        <span
                            className="d-none d-md-inline name-style"
                        >
                            {name}
                        </span>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                                <ChevronRightIcon />
                            )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <NavLink
                        to="/home"
                        style={{ color: "#3f51b5", textDecoration: "none" }}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Inicio"} />
                        </ListItem>
                    </NavLink>
                    <NavLink
                        to="/players"
                        style={{ color: "#3f51b5", textDecoration: "none" }}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleOutlineIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Fichajes"} />
                        </ListItem>
                    </NavLink>
                    <NavLink
                        to="/myTeam"
                        style={{ color: "#3f51b5", textDecoration: "none" }}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <AssignmentOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Alineación"} />
                        </ListItem>
                    </NavLink>
                    <NavLink
                        to="/"
                        style={{ color: "#3f51b5", textDecoration: "none" }}
                    >
                        <GoogleLogout
                            clientId="784406214165-b9kjjdc4j062angd690qektitsoej31p.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={logout}
                            render={renderProps => (
                                <ListItem button onClick={renderProps.onClick}>
                                    <ListItemIcon>
                                        <PowerSettingsNewIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Logout"} />
                                </ListItem>
                            )}
                        />
                    </NavLink>
                </List>
            </Drawer>
        </div>
    );
}

export default Navbar;
