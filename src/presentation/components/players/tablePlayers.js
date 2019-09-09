import React, {useState} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
// import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
// import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";
// import {repository} from "data";
// import find from "lodash.find";
// import xorby from "lodash.xorby";
//import Autocomplete from "../selector/Autocomplete";

// function desc(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//         return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//         return 1;
//     }
//     return 0;
// }

// const stableSort = (array, cmp) => {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//         const order = cmp(a[0], b[0]);
//         if (order !== 0) return order;
//         return a[1] - b[1];
//     });
//     return stabilizedThis.map(el => el[0]);
// };

// const getSorting = (order, orderBy) => {
//     return order === "desc"
//         ? (a, b) => desc(a, b, orderBy)
//         : (a, b) => -desc(a, b, orderBy);
// };

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
    // const {onSelectAllClick, order, orderBy, numSelected, rowCount} = props;

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
    //numSelected: PropTypes.number.isRequired,
    // onRequestSort: PropTypes.func.isRequired,
    // onSelectAllClick: PropTypes.func.isRequired,
    // order: PropTypes.string.isRequired,
    // orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3
    },
    table: {
        minWidth: 1020
    },
    tableWrapper: {
        overflowX: "auto"
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        marginTop: "10%"
    },
    actionStyles: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5
    },
    paddingDense: {
        padding: "5px 0px"
    }
});

function TablePaginationActions(props) {
    const handleBackButtonClick = event => {
        props.onChangePage("back", props.page - 1);
    };

    const handleNextButtonClick = event => {
        props.onChangePage("next", props.page + 1);
    };

    const {classes, count, page, rowsPerPage, theme} = props;

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

const TablePaginationActionsWrapped = withStyles(styles, {withTheme: true})(
    TablePaginationActions
);

function TablePlayers(props) {
    // state = {
    //     order: "asc",
    //     orderBy: "question",
    //     selected: this.props.mode === "add" ? [] : this.props.selected,
    //     data: [],
    //     totalData: 0,
    //     page: 0,
    //     isLoad: false,
    //     rowsPerPage: 5,
    //     tags:[]
    // };
    // const [order, setOrder] = useState("asc");
    // const [orderBy, setOrderBy] = useState("position");
    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(5);

    // componentDidMount() {
    //     this.requestQuestions({
    //         orderBy: "question",
    //         startAfter: null,
    //         limit: this.state.rowsPerPage
    //     });
    // }

    // requestQuestions(page) {
    //     this.addDisposable(
    //         repository.observeQuestions(page).subscribe(questions => {
    //             this.setState({ ...questions, isLoad: true });
    //         })
    //     );
    // }

    // const handleRequestSort = (event, property) => {
    //     const orderBy = property;
    //     let orderAux = "desc";

    //     if (orderBy === property && order === "desc") {
    //         orderAux = "asc";
    //     }

    //     // this.setState({
    //     //     order,
    //     //     orderBy
    //     // });
    //     setOrder(orderAux);
    //     setOrderBy(orderBy);
    // };

    // const handleSelectAllClick = event => {
    //     let refsSelected = [];
    //     if (event.target.checked) {
    //         refsSelected = this.state.data.map(question => ({
    //             id: question.id,
    //             tags: question.tags
    //         }));
    //     }
    //     this.props.onQuestionsSelected(refsSelected);
    // };

    // const handleClick = (event, id, tags) => {
    //     const {selected} = this.props;
    //     const question = {id: id, tags: tags};
    //     const questionsSelected = xorby(selected, [question], "id");
    //     this.props.onQuestionsSelected(questionsSelected);
    // };

    const handleChangePage = (event, page) => {
        // const {data} = this.state;
        // this.setState({page: page, isLoad: false}, () =>
        //     event === "next"
        //         ? this.requestQuestions({
        //               orderBy: "question",
        //               startAfter: data[data.length - 1].documentSnapshot,
        //               limit: this.state.rowsPerPage
        //           })
        //         : this.requestQuestions({
        //               orderBy: "question",
        //               endBefore: data[0].documentSnapshot,
        //               limit: this.state.rowsPerPage
        //           })
        // );
        setPage(page);
        if (props.data.length < 12) {
            props.getData(page + 1);
        }
    };

    // const handleChangeRowsPerPage = event => {
    //     this.setState(
    //         { rowsPerPage: event.target.value, page: 0, isLoad: false },
    //         () => {
    //             this.requestQuestions({
    //                 orderBy: "question",
    //                 startAfter: null,
    //                 limit: this.state.rowsPerPage
    //             });
    //         }
    //     );
    // };

    // getParseTags = tags => {
    //     let parseTags = "";
    //     tags &&
    //         tags.forEach((tag, index) => {
    //             parseTags += tag.charAt(0).toUpperCase() + tag.slice(1);
    //             if (index !== tags.length - 1) {
    //                 parseTags += ", ";
    //             }
    //         });

    //    return parseTags;
    // };

    // searchByTags = tags => {
    //     this.setState({tags: tags});
    //     repository.searchByTags(tags).subscribe(questions => {
    //         console.log(questions)
    //         this.setState({data: questions, isLoad: true});
    //     });

    // };

    // isSelected = id =>
    //     find(this.props.selected, question => question.id === id) !== undefined;

    const {classes} = props;
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
                                // const isSelected = this.isSelected(
                                //     n.id
                                // );
                                return (
                                    <TableRow
                                        hover
                                        tabIndex={-1}
                                        key={player.id}
                                    >
                                        <TableCell
                                            component="th"
                                            padding="dense"
                                        >
                                            <Avatar
                                                src={player.avatar}
                                                alt="avatar"
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            padding="dense"
                                        >
                                            {player.first_name}
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            padding="dense"
                                        >
                                            {player.last_name}
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            padding="dense"
                                        >
                                            {player.position
                                                ? player.position
                                                : "Sin asignar"}
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            padding="dense"
                                        >
                                            {player.email}
                                        </TableCell>
                                        <TableCell align="right">
                                            <EditIcon
                                                color="primary"
                                                onClick={() =>
                                                    props.onEditPlayer(player)
                                                }
                                            />
                                            <DeleteIcon
                                                color="primary"
                                                onClick={() =>
                                                    props.deletePlayer(player)
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow style={{height: 49 * emptyRows}}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <TablePagination
                rowsPerPageOptions={[]}
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
