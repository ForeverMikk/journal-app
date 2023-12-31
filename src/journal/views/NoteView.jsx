import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    // Grid se usa cuando quieres organizar facilmente los componentes internos y Box es como un div cualquiera
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}}> 
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>
                28 de Agosoto, 2023
            </Typography>
        </Grid>

        <Grid item>
            <Button color="primary" sx={{p: 2}}>
                <SaveOutlined sx={{fontSize: 30, mr: 1}} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingresa un titulo"
                label='Titulo'
                sx={{border: 'none', mb: 1}}
            />

            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Que sucedio hoy?"
                minRows={5}
            />
        </Grid>

        {/* Galeria de Imagenes */}
        <ImageGallery />

    </Grid>
  )
}
