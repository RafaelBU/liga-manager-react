import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../my-redux/my-redux";

function Players(props) {
    const { getDataDispatch, loadDataUser } = props;
    const [page, setPage] = useState(1);
    //const [refContainer, setRefContainer] = useState(null);

    useEffect(() => {
        if (!loadDataUser || page > 1) {
            getDataDispatch(page);
        }
    }, [getDataDispatch, page, loadDataUser]);

    return (
        <div>
            <Navbar />
            <p>Componente de players</p>
            {props.loadDataUser ? props.dataUser.map(user => {
                return (
                    <ul> <li>
                        {user.first_name}
                    </li>
                        <li>
                            {user.email}
                        </li></ul>

                )

            }) : "Load..."}
        </div>
    )
}

const getDataDispatch = actions.getDataDispatch;

export default connect(
    (appState, ownProps) => ({
        dataUser: appState.app.dataUser,
        lastData: appState.app.lastData,
        loadDataUser: appState.app.loadDataUser
    }),
    dispatch =>
        bindActionCreators(
            {
                getDataDispatch
            },
            dispatch
        )
)(Players);
