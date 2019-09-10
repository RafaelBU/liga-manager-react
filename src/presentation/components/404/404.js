import React from "react";
import "./404.scss";
import { NavLink } from "react-router-dom";

function NotFound() {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-12 text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>

                            <div className="contant_box_404">
                                <h3 className="h2">Upss, hubo un problema</h3>

                                <p>Parece que esta página no existe</p>

                                <NavLink to="/home">
                                    <button className="link_404">
                                        Volver al inicio
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
