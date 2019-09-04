import React from "react";
import Avatar from 'react-avatar';

function Navbar() {
    const name = localStorage.getItem("name");
    const avatar = localStorage.getItem("avatar");

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", padding: 10, backgroundColor: "#1976d2" }}>
            <Avatar src={avatar} round={true} />
            <span style={{ color: "white", alignSelf: "center" }}>Bienvenido {name} </span>
            <Avatar src={avatar} round={true} style={{ marginLeft: "auto" }} />
        </div>
    );
};

export default Navbar;