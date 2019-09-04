import React from "react";

import Navbar from "../navbar/navbar";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div>
                    <NavLink to="/players">JUGADORES</NavLink>
                </div>
                <div>
                    <NavLink to="/myTeam">MI EQUIPO</NavLink>
                </div>
            </div>
        </div>


    );
};

export default Home;