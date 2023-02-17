import { useState } from 'react';
import {
    TextField,
    Grid,
    Typography,
    IconButton,
    InputAdornment,
    Tooltip,
    Select,
    InputLabel,
    FormControl,
    Fab
} from '@mui/material';

import IconArrowLeft from '@mui/icons-material/ArrowBack';
import IconQrCode from '@mui/icons-material/QrCode';
import IconMoney from '@mui/icons-material/AttachMoney';
import IconOutBox from '@mui/icons-material/Outbox';
import IconSave from '@mui/icons-material/Save';

import PhotoDefault from './../../../../../assets/PyPosLogin.png';



interface RegisterArticleProps{
    setActiveComponent:React.Dispatch<React.SetStateAction<string>>;
}



const RegisterArticleView:React.FC<RegisterArticleProps> = ({setActiveComponent})=>{
    const [image, setImage] = useState('');
    const handleCapture = () => {
        const constraints = { video: true };
        const video = document.createElement('video');

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                video.srcObject = stream;
                video.play();

                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth/2;
                canvas.height = video.videoHeight/2;

                const context = canvas.getContext('2d');
                context?.drawImage(video, 0, 0, canvas.width, canvas.height);

                const imageUrl = canvas.toDataURL('image/png');
                alert(imageUrl);
                setImage(imageUrl);
                video.pause();
                video.srcObject = null;
                stream.getTracks().forEach(track => track.stop());
            })
            .catch((err) => {
                console.error(err);
            });
    }
    
    return (
    <Grid container >
        <Grid item  xs={12} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Regresar al inventario" arrow disableFocusListener>
                    <IconButton onClick={()=> setActiveComponent("InventoryHome")}>
                        <IconArrowLeft fontSize='large'/>
                    </IconButton>
                </Tooltip>
                <Typography variant='h4'>
                    Registrar Nuevo Articulo
                </Typography>
            </div>
        </Grid>
        <Grid container>
            <Grid item xs={12} >
                <Grid container>
                    <Grid item xs={4} sx={{ p: 1 }} style={{ height: 300 }}>
                       <img
                            onClick={handleCapture}
                            src={image}
                            alt="Sin Imagen por mostrar"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container>
                            <Grid item xs={12} sx={{ p: 1 }}>
                                <TextField
                                    id='outlined-basic'
                                    label='Codigo De Barra'
                                    variant='outlined'
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <IconQrCode/>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sx={{ p: 1 }}>
                                <TextField
                                    id='outlined-basic'
                                    label='Confirmar Codigo De Barra'
                                    variant='outlined'
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <IconQrCode/>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6 } sx={{ p: 1 }}>
                <TextField
                    id='outlined-basic'
                    label='Nombre Del Articulo'
                    variant='outlined'
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <IconQrCode/>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <Grid item xs={6} sx={{ p: 1 }}>
                <TextField
                    id='outlined-basic'
                    label='Nombre Del Articulo'
                    variant='outlined'
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <IconQrCode/>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <Grid item xs={6} sx={{ p: 1 }}>
                <TextField
                    id='outlined-basic'
                    label='Nombre Del Articulo'
                    variant='outlined'
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <IconQrCode/>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <Grid item xs={6} sx={{ p: 1 }}>
                <TextField
                    id='outlined-basic'
                    label='Nombre Del Articulo'
                    variant='outlined'
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <IconQrCode/>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <Grid item xs={6} sx={{ p: 1 }}>
                <TextField
                    label="Precio Unitario"
                    type="number"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {
                        step: 0.01,
                        min: 0,
                        },
                        startAdornment: (
                            <InputAdornment position='start'>
                                <IconMoney/>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <Grid item xs={6} sx={{ p: 1 }}>
                <TextField
                    label="Cantidad en stock"
                    type="number"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {
                        step: 0.01,
                        min: 0,
                        },
                        startAdornment: (
                            <InputAdornment position='start'>
                                <IconOutBox/>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <Grid item xs={6} sx={{ p: 1 }}>
                <FormControl fullWidth>
                    <InputLabel id="typeSale">Tipo De Venta</InputLabel>
                    <Select
                        labelId="typeSale"
                        id="demo-simple-select"
                        fullWidth
                        label="Age"
                    >
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6} sx={{ p: 1 }}>
                <FormControl fullWidth>
                    <InputLabel id="typeSale">Tipo De Venta</InputLabel>
                    <Select
                        labelId="typeSale"
                        id="demo-simple-select"
                        fullWidth
                        label="Tipo De Venta"
                    >
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6} sx={{ p: 1 }}>
                <FormControl fullWidth>
                    <InputLabel id="typeSale">Tipo De Venta</InputLabel>
                    <Select
                        labelId="typeSale"
                        id="demo-simple-select"
                        fullWidth
                        label="Age"
                    >
                    </Select>
                </FormControl>
            </Grid>

        </Grid>
        <Tooltip title="Guardar Articulo" arrow disableFocusListener>
            <Fab color='primary' aria-label='add' onClick={()=>setActiveComponent("InventoryRegisterArticle")}>
                <IconSave/>
            </Fab>
        </Tooltip>
    </Grid>
    );
};

export default RegisterArticleView;