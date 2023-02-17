import React from 'react';
import {
    TextField,
    InputAdornment,
    Fab,
    Tooltip,
    Grid,
    Typography,
    Card,
    IconButton,
    CardMedia,
    CardActions,
    CardContent,
    Button
} from '@mui/material';
import ImageTest from './../../../assets/PyPosLogin.png';
import {makeStyles} from '@material-ui/core/styles';
import IconQrCode from '@mui/icons-material/QrCode';

import IconDone from '@mui/icons-material/Done';
import IconRemoveItem from '@mui/icons-material/Delete';
import IconClearShoppoingCart from '@mui/icons-material/RemoveShoppingCart';
import IconSearch from '@mui/icons-material/Search';

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
            <Grid container>
                <Grid item xs={8}>
                    <TextField
                        id='outlined-basic'
                        className={classes.minPadding}
                        label='Contraseña'
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
                    <Grid container>
                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 345 }}>
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
                                    
                                    <Typography variant="h6" color="text.primary">
                                        Total: $1200
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item xs={4}>
                    <Tooltip title="Realizar Venta" arrow >
                        <Fab color='primary' aria-label='add' className={classes.fabDone}>
                            <IconDone/>
                        </Fab>
                    </Tooltip>
                    <Tooltip title="Remover Articulo Del Carrito" arrow disableFocusListener>
                        <Fab color='primary' aria-label='add' className={classes.fabRemoveItem}>
                            <IconRemoveItem/>
                        </Fab>
                    </Tooltip>
                    <Tooltip title="Cancelar Venta" arrow disableFocusListener>
                        <Fab color='primary' aria-label='add' className={classes.fabClearItem}>
                            <IconClearShoppoingCart/>
                        </Fab>
                    </Tooltip>
                </Grid>
            </Grid>
        </>
    );
};

export default ShoppingCart;
