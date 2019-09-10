import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Avatar from "react-avatar";
import "./modalCreate.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexWrap: "no-wrap"
    },
    input: {
        display: "none"
    }
}));

function ModalCreate(props) {
    const [first_name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [avatar, setAvatar] = useState("");
    const [isEnable, setIsEnable] = useState(false);
    const classes = useStyles();

    const handleChangeName = event => {
        setName(event.target.value);
    };

    const handleChangeLastName = event => {
        setLastName(event.target.value);
    };

    const handleChangePosition = event => {
        setPosition(event.target.value);
    };

    const handleChangeAvatar = event => {
        const reader = new FileReader();
        reader.onloadend = function () {
            const myDataUrl = reader.result;
            setAvatar(myDataUrl);
        };

        reader.readAsDataURL(event.target.files[0]);
    };

    useEffect(() => {
        setIsEnable(
            first_name !== "" &&
            last_name !== "" &&
            position !== "" &&
            avatar !== ""
        );
    }, [first_name, last_name, position, avatar]);

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
                Añade un nuevo jugador al mercado de fichajes
            </DialogTitle>
            <DialogContent>
                <div>
                    <TextField
                        id="textfield-name"
                        label="Nombre"
                        className="textField-style"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleChangeName}
                    />
                    <TextField
                        id="textfield-last-name"
                        label="Apellido"
                        className="textField-style"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleChangeLastName}
                    />
                    <div className="margin-style">
                        <InputLabel htmlFor="position-simple">
                            Posición
                        </InputLabel>
                        <Select
                            value={position}
                            onChange={handleChangePosition}
                            inputProps={{
                                name: "position",
                                id: "position-simple"
                            }}
                            className="select-style"
                        >
                            <MenuItem value={"Delantero"}>Delantero</MenuItem>
                            <MenuItem value={"Defensa"}>Defensa</MenuItem>
                            <MenuItem value={"Medio"}>Medio</MenuItem>
                            <MenuItem value={"Portero"}>Portero</MenuItem>
                        </Select>
                    </div>
                    <Avatar
                        src={avatar}
                        alt="selected-avatar"
                        size={70}
                        round={true}
                    />
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="button-file"
                        type="file"
                        onChange={handleChangeAvatar}
                    />
                    <label htmlFor="button-file" className="margin-style">
                        <Button
                            variant="contained"
                            component="span"
                            color="primary"
                        >
                            Añadir foto
                        </Button>
                    </label>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Cancelar
                </Button>
                {isEnable ? (
                    <Button
                        onClick={() =>
                            props.onCreate({
                                first_name,
                                last_name,
                                position,
                                avatar
                            })
                        }
                        color="primary"
                    >
                        Aceptar
                    </Button>
                ) : (
                        <Button color="primary" disabled>
                            Aceptar
                    </Button>
                    )}
            </DialogActions>
        </Dialog>
    );
}

export default ModalCreate;
