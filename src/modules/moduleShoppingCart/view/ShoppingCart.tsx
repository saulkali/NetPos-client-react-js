import {
    TextField,
    InputAdornment,
    Fab,
    Tooltip
} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';
import IconQrCode from '@mui/icons-material/QrCode';

import IconDone from '@mui/icons-material/Done';
import IconRemoveItem from '@mui/icons-material/Delete';
import IconClearShoppoingCart from '@mui/icons-material/RemoveShoppingCart';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        top: '64px',
        bottom: '64px',
        left: 0,
        right: 0
    },
    fabDone: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },
    fabRemoveItem: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(10)
    },
    fabClearItem: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(18)
    }
  }));

const ShoppingCart = () =>{
    const classes = useStyles();
    return (
        <>
        <TextField
            id='outlined-basic'
            label='Contraseña'
            variant='outlined'
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <IconQrCode/>
                    </InputAdornment>
                ),
            }}
            />
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
        </>
    );
};

export default ShoppingCart;
