import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Avatar from "react-avatar";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ModalTeam(props) {
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
                {"Cambiar " + props.positionSelected}
            </DialogTitle>
            <DialogContent>
                {props.data.filter(player => player.position === props.positionSelected).length > 0 ?
                    props.data.filter(player => player.position === props.positionSelected).map((player, index) => {
                        return (
                            <Avatar
                                key={index}
                                src={player.avatar}
                                size={65}
                                round={true}
                                style={{ marginRight: 8, marginBottom: 8 }}
                                onClick={() =>
                                    props.onSetPlayer(player.avatar)
                                }
                            />

                        );
                    }) : "No tienes " + props.positionSelected.toLowerCase() +
                    "s, ve al mercado de fichajes y asigna " + props.positionSelected.toLowerCase() + "s para poder colocarlos en el campo."}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Cancelar
            </Button>
            </DialogActions>
        </Dialog>
    )
};

export default ModalTeam;