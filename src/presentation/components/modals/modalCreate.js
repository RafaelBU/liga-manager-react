import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
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
        // const urlCreator = window.URL || window.webkitURL;
        // const imageUrl = urlCreator.createObjectURL(new Blob([event.target.files[0]]));
        const reader = new FileReader();
        reader.onloadend = function() {
            const myDataUrl = reader.result;
            setAvatar(myDataUrl);
            // do something with the URL in the DOM,
            // then save it to local storage
        };

        reader.readAsDataURL(event.target.files[0]);
        // setAvatar(imageUrl);
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
                        style={{width: "97%", margin: 8}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleChangeName}
                    />
                    <TextField
                        id="textfield-last-name"
                        label="Apellido"
                        style={{width: "97%", margin: 8}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleChangeLastName}
                    />
                    <div style={{margin: 8}}>
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
                            style={{width: "100%"}}
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
                        size={90}
                        round={true}
                    />
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="button-file"
                        type="file"
                        onChange={handleChangeAvatar}
                    />
                    <label htmlFor="button-file" style={{margin: 8}}>
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
