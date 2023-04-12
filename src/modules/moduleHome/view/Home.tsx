import ShoppingCart from './../../moduleShoppingCart/view/ShoppingCart';
import InventoryView from '../../moduleInventory/view/InventoryView';
import InventoryViewModel from '../../moduleInventory/viewModel/InventoryViewModel';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../common/components/Loader';
import {
    Grid,
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

const Home = () => {
    const [activeComponent,setActiveComponent] = useState("ShoppingCart");
    const navigate = useNavigate();
    
    return(
    <>
        <Loader isOpen={false}/>
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
                    <ListItem button onClick={ () => setActiveComponent("ShoppingCart")}>
                        <ListItemIcon>
                            <IconShoppingCart/>
                        </ListItemIcon>
                        <ListItemText primary="Carrito De Ventas"/>
                    </ListItem>
                    <ListItem button onClick={ () => setActiveComponent("Inventory")}>
                        <ListItemIcon>
                            <IconShoppingCart/>
                        </ListItemIcon>
                        <ListItemText primary="Inventario"/>
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
                {activeComponent === 'ShoppingCart' && <ShoppingCart/>}

                {activeComponent === 'Inventory' && <InventoryView />}
            </Grid>
        </Grid>
    </>)
};

export default Home;