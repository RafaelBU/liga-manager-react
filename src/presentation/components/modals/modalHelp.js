import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

function ModalHelp(props) {
    const classes = useStyles();

    return (
        <Dialog
            open={true}
            TransitionComponent={Transition}
            keepMounted
            onClose={props.onClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">
                {props.titleHelp}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.textHelp1} <br />
                    {props.textHelp2}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Entendido
            </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalHelp;