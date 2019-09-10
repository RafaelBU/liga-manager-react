import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from "@material-ui/core/Typography";
import Avatar from "react-avatar";
import "./modalEdit.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ModalEdit(props) {
    const [position, setPosition] = useState(props.data.position ? props.data.position : "");
    const handleChange = event => {
        setPosition(event.target.value);
    };

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={true}
            TransitionComponent={Transition}
            keepMounted
            onClose={props.onClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">
                Selecciona o cambia el puesto del jugador
            </DialogTitle>
            <DialogContent>
                <div>
                    <div className="container-player">
                        <Avatar src={props.data.avatar} alt="player-avatar" size={80} round={true} />
                        <Typography
                            variant="h5"
                            component="h5"
                            className="name-player"
                        >
                            {props.data.first_name + " " + props.data.last_name}
                        </Typography>
                    </div>
                    <div className="container-position">
                        <InputLabel htmlFor="position-simple">Posición</InputLabel>
                        <Select
                            value={position}
                            onChange={handleChange}
                            inputProps={{
                                name: "position",
                                id: 'position-simple',
                            }}
                            className="select-position"
                        >
                            <MenuItem value={"Delantero"}>Delantero</MenuItem>
                            <MenuItem value={"Defensa"}>Defensa</MenuItem>
                            <MenuItem value={"Medio"}>Medio</MenuItem>
                            <MenuItem value={"Portero"}>Portero</MenuItem>
                        </Select>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Cancelar
            </Button>
                <Button onClick={() => props.onUpdate(position)} color="primary">
                    Aceptar
            </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalEdit;