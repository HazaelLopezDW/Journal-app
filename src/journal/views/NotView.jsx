import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { setActiveNote, startSaveNote } from "../../store/journal"
import { ImageGallery } from "../components"

export const NotView = () => {

    const dispatch = useDispatch();
    const { active:note } = useSelector(state => state.journal);
    const { title, body, date, onInputChange, formState } = useForm(note);
    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString()
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);
    
    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            sx={{ mb: 1 }}
            className="animate__animated fadeIn animate__faster"
        >
            <Grid item>
                <Typography fontSize={39} fontWeight="light">
                    {dateString}
                </Typography>
            </Grid>
            <Grid item>
                <Button 
                    onClick={onSaveNote}
                    color="primary" 
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedio en esté día?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>
            {/* Image gallery */}
            <ImageGallery />
        </Grid>
    )
}
