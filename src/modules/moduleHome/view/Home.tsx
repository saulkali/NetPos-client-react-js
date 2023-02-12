import ShoppingCart from './../../moduleShoppingCart/view/ShoppingCart';

import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../common/components/Loader';
import {
    Grid,
    AppBar,
    Toolbar,
    Tooltip,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    ListItemIcon,
    Button,
    Avatar
} from '@mui/material';

import IconShoppingCart from '@mui/icons-material/ShoppingCart';
import IconAccountBox from '@mui/icons-material/AccountBox';
import IconLogOut from '@mui/icons-material/ExitToApp';
import IconEdit from '@mui/icons-material/Edit';
import IconMenu from '@mui/icons-material/Menu';

const Home = () => {

    const [openMenu,setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const OpenMenuClick = () =>{
        setOpenMenu(!openMenu);
    };

    const CloseMenuClick = () =>{
        setOpenMenu(false);
    };
    return(
    <>
        <Loader/>
        <Grid container>
            <Grid item xs={2}>
                <List>
                    <ListItem alignItems='center'>
                        <Avatar/>
                        <ListItemText
                            primary="Saul Burciaga Hernandez"
                            secondary="elfacker1998@gmail.com"
                        />
                    </ListItem>
                    <ListItem>
                        <Button fullWidth style={
                                {
                                    backgroundColor:"blue",
                                    color:"white",
                                    marginTop:20
                                }
                            }>
                            <IconEdit/>
                            Editar Perfil
                        </Button>
                    </ListItem>
                </List>
                
                <ListSubheader>Herramientas</ListSubheader>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <IconShoppingCart/>
                        </ListItemIcon>
                        <ListItemText primary="Carrito De Ventas"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <IconAccountBox/>
                        </ListItemIcon>
                        <ListItemText primary="Registrar Empleado"/>
                    </ListItem>
                </List>
                <ListSubheader>Desarrollo Y Configuraciones</ListSubheader>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <IconShoppingCart/>
                        </ListItemIcon>
                        <ListItemText primary="Configuraciones"/>
                    </ListItem>
                </List>
                <Button
                    fullWidth
                    style={
                        {
                            backgroundColor:"red",
                            color:"white",
                            marginTop:20
                        }
                    }
                    onClick = {
                        ()=> navigate("/login")
                    }
                    >
                        <IconLogOut/>
                        Cerrar Sesion
                </Button>
                
            </Grid>
            <Grid item xs={10}>
                <ShoppingCart/>
            </Grid>
        </Grid>
    </>)
};

export default Home;