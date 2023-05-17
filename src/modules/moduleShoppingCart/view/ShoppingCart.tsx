import React from 'react';
import {
    TextField,
    InputAdornment,
    Divider,
    Tooltip,
    Grid,
    Box,
    Typography,
    TableContainer,
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    IconButton,
    SpeedDial,
    Paper,
    SpeedDialAction
} from '@mui/material';
import ImageTest from './../../../assets/PyPosLogin.png';
import {makeStyles} from '@material-ui/core/styles';
import IconQrCode from '@mui/icons-material/QrCode';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentIcon from '@mui/icons-material/Payment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

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
                    
                    <Grid item xs={4} margin={2}>
                        
                        <Paper elevation={8}>
                            <Typography margin={2} gutterBottom variant="h5" component="div">
                                General
                            </Typography>
                            <Divider/>
                            <Box p={2} margin={2}>
                                <Box display="flex" alignItems="center" mb={1}>
                                <ShoppingCartIcon />
                                <Typography variant="h6" style={{ marginLeft: 8 }}>
                                    Piezas: 23
                                </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" mb={1}>
                                <AttachMoneyIcon />
                                <Typography variant="h6" style={{ marginLeft: 8 }}>
                                    Total: $ 34,000
                                </Typography>
                                </Box>
                                {/* Agrega aquí más elementos para el pago y el cambio, utilizando el mismo patrón. */}
                                <Box display="flex" alignItems="center" mb={1}>
                                <PaymentIcon />
                                <Typography variant="h6" style={{ marginLeft: 8 }}>
                                    Pago: $ {/* Coloca el valor del pago aquí */}
                                </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" mb={1}>
                                <MonetizationOnIcon />
                                <Typography variant="h6" style={{ marginLeft: 8 }}>
                                    Cambio: $ {/* Coloca el valor del cambio aquí */}
                                </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={7} margin={2}>
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
                            }}/>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell align="right">Calories</TableCell>
                                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow key='872734'>
                                            <TableCell component="th" scope="row">
                                                Name Product
                                            </TableCell>
                                            <TableCell align="right">2</TableCell>
                                            <TableCell align="right">67</TableCell>
                                            <TableCell align="right">3</TableCell>
                                            <TableCell align="right">3</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
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
