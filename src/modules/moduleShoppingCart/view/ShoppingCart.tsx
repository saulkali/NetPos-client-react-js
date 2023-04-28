import React from 'react';
import {
    TextField,
    InputAdornment,
    Divider,
    Tooltip,
    Grid,
    Typography,
    Card,
    Avatar,
    IconButton,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    SpeedDial,
    Paper,
    SpeedDialAction
} from '@mui/material';
import ImageTest from './../../../assets/PyPosLogin.png';
import {makeStyles} from '@material-ui/core/styles';
import IconQrCode from '@mui/icons-material/QrCode';

import IconDone from '@mui/icons-material/Done';
import IconRemoveItem from '@mui/icons-material/Delete';
import IconClearShoppoingCart from '@mui/icons-material/RemoveShoppingCart';
import IconSearch from '@mui/icons-material/Search';
import SpeedDialIcon from '@mui/icons-material/OpenInBrowser'

const useStyles = makeStyles((theme) => ({
    
    fabDone: {
    },
    fabRemoveItem: {
    },
    fabClearItem: {
    },
    minPadding:{
        margin:theme.spacing(8)
    }
  }));

const ShoppingCart = () =>{
    const classes = useStyles();
    return (
        <>
            <Paper elevation={8}>
                <Grid container>
                    <Grid item xs={12} margin={2}>
                        <Typography gutterBottom variant="h5" component="div">
                            Carrito De Ventas
                        </Typography>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12} margin={2}>
                        <TextField
                            id='outlined-basic'
                            className={classes.minPadding}
                            label='Codigo de barra'
                            variant='outlined'
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <IconQrCode/>
                                    </InputAdornment>
                                ),
                                endAdornment:(
                                    <Tooltip title="Buscar Articulo" arrow disableFocusListener>
                                        <IconButton>
                                            <IconSearch />
                                        </IconButton>
                                    </Tooltip>
                                    
                                )
                            }}
                        />
                        <Grid item xs={6} sm={3} margin={2}>
                            <Card>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={ImageTest}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Coca Cola 600 ml
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        Costo: $20
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        Piezas: 23
                                    </Typography>
                                    

                                    <Typography variant="h3" color="text.primary">
                                        $1200
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    >                    
                        <SpeedDialAction
                            key='name action'
                            icon={<IconDone/>}
                            tooltipTitle='Realizar Venta'
                            />

                        <SpeedDialAction
                            key='name action'
                            icon={<IconRemoveItem/>}
                            tooltipTitle='Remover Articulo Del Carrito'
                            />

                        <SpeedDialAction
                            key='name action'
                            icon={<IconClearShoppoingCart/>}
                            tooltipTitle='Cancelar Venta'
                            />
                </SpeedDial>
            </Paper>
        </>
    );
};

export default ShoppingCart;
