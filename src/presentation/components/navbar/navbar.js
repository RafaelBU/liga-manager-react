import React from "react";
import Avatar from "react-avatar";
import {NavLink} from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

function Navbar() {
    const name = localStorage.getItem("name");
    const avatar = localStorage.getItem("avatar");

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                padding: 10,
                backgroundColor: "#1976d2"
            }}
        >
            <NavLink to="/home">
                <Avatar src={avatar} size={50} round={true} />
            </NavLink>
            <span style={{marginLeft: 10, color: "white", alignSelf: "center"}}>
                {name}
            </span>
            <div style={{marginLeft: "auto", alignSelf: "center"}}>
                <SettingsIcon
                    style={{cursor: "pointer", marginRight: 10}}
                    color="action"
                    onClick={() => alert("setttings")}
                />
                <PowerSettingsNewIcon
                    style={{cursor: "pointer"}}
                    color="action"
                    onClick={() => alert("logout")}
                />
            </div>
        </div>
    );
}

export default Navbar;
