import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";

const rows = [
    {
        id: "avatar",
        numeric: false,
        disablePadding: false,
        label: "Avatar"
    },
    {
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Nombre"
    },
    {
        id: "lastName",
        numeric: false,
        disablePadding: false,
        label: "Apellido"
    },
    {
        id: "position",
        numeric: false,
        disablePadding: false,
        label: "Posición"
    },
    {
        id: "email",
        numeric: false,
        disablePadding: false,
        label: "Email"
    },
    {
        id: "icons",
        numeric: false,
        disablePadding: false,
        label: ""
    }
];

function TableTestHead(props) {
    const createSortHandler = property => event => {
        props.onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {rows.map(
                    row => (
                        <TableCell
                            key={row.id}
                            align={row.numeric ? "right" : "left"}
                            padding={row.disablePadding ? "none" : "default"}
                        >
                            <Tooltip
                                title="Sort"
                                placement={
                                    row.numeric ? "bottom-end" : "bottom-start"
                                }
                                enterDelay={300}
                            >
                                <TableSortLabel
                                    onClick={() => createSortHandler(row.id)}
                                >
                                    {row.label}
                                </TableSortLabel>
                            </Tooltip>
                        </TableCell>
                    ),
                    this
                )}
            </TableRow>
        </TableHead>
    );
}

TableTestHead.propTypes = {
    rowCount: PropTypes.number.isRequired
};

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    table: {
        minWidth: 1020
    },
    tableWrapper: {
        overflowX: "auto"
    },
    actionStyles: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2.5)
    },
    paddingDense: {
        padding: "5px 0px"
    },
    iconSelected: {
        "&:focus": {
            outline: 0
        }
    },
});

function TablePaginationActions(props) {
    const handleBackButtonClick = event => {
        props.onChangePage("back", props.page - 1);
    };

    const handleNextButtonClick = event => {
        props.onChangePage("next", props.page + 1);
    };

    const { classes, count, page, rowsPerPage, theme } = props;

    return (
        <div className={classes.actionStyles}>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="Previous Page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                ) : (
                        <KeyboardArrowLeft />
                    )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="Next Page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                ) : (
                        <KeyboardArrowRight />
                    )}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired
};

const TablePaginationActionsWrapped = withStyles(styles, { withTheme: true })(
    TablePaginationActions
);

function TablePlayers(props) {
    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(5);

    const handleChangePage = (event, page) => {
        setPage(page);
        if (props.data.length < 12) {
            props.getData(page + 1);
        }
    };

    const { classes } = props;
    const emptyRows =
        rowsPerPage -
        Math.min(rowsPerPage, props.totalData - page * rowsPerPage);

    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table className={classes.table} aria-labelledby="tableTitle">
                    <TableTestHead rowCount={props.data.length} />
                    <TableBody>
                        {props.data
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map(player => {
                                return (
                                    <TableRow
                                        hover
                                        tabIndex={-1}
                                        key={player.id}
                                    >
                                        <TableCell
                                            component="th"
                                            padding="default"
                                        >
                                            <Avatar
                                                src={player.avatar}
                                                alt="avatar"
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            padding="default"
                                        >
                                            {player.first_name}
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            padding="default"
                                        >
                                            {player.last_name}
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            padding="default"
                                        >
                                            {player.position
                                                ? player.position
                                                : "Sin asignar"}
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            padding="default"
                                        >
                                            {player.email}
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton
                                                color="primary"
                                                onClick={() =>
                                                    props.onEditPlayer(player)
                                                }
                                                className={classes.iconSelected}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton
                                                color="primary"
                                                onClick={() =>
                                                    props.deletePlayer(player)
                                                }
                                                className={classes.iconSelected}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 49 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <TablePagination
                rowsPerPageOptions={[]}
                labelDisplayedRows={() => ""}
                component="div"
                count={props.totalData}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    "aria-label": "Previous Page"
                }}
                nextIconButtonProps={{
                    "aria-label": "Next Page"
                }}
                onChangePage={handleChangePage}
                ActionsComponent={TablePaginationActionsWrapped}
            />
        </Paper>
    );
}

TablePlayers.propTypes = {
    classes: PropTypes.object.isRequired,
    onAddClick: PropTypes.func
};

export default withStyles(styles)(TablePlayers);
