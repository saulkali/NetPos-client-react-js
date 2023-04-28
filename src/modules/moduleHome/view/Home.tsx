import ShoppingCart from './../../moduleShoppingCart/view/ShoppingCart';
import InventoryView from '../../moduleInventory/view/InventoryView';
import InventoryViewModel from '../../moduleInventory/viewModel/InventoryViewModel';
import * as React from 'react';
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
    Menu,
    AppBar,
    Toolbar,
    Typography,
    Paper,
    MenuList,
    MenuItem,
    Divider
} from '@mui/material';

import IconShoppingCart from '@mui/icons-material/ShoppingCart';
import IconAccountBox from '@mui/icons-material/AccountBox';
import IconLogOut from '@mui/icons-material/ExitToApp';
import IconEdit from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
    const [activeComponent,setActiveComponent] = useState("ShoppingCart");

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };
   

    return(
    <>
        <Loader isOpen={false}/>
        
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={ () => {setActiveComponent("ShoppingCart");handleClose();}}>
                    <ListItemIcon>
                        <IconShoppingCart fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Carrito de ventas  </ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        F1
                    </Typography>
            </MenuItem>
            <MenuItem onClick={ () => {setActiveComponent("Inventory"); handleClose();}}>
                <ListItemIcon>
                    <IconShoppingCart fontSize="small" />
                </ListItemIcon>
                <ListItemText>Inventario</ListItemText>
                <Typography variant="body2" color="text.secondary">
                    F2
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <IconShoppingCart fontSize="small" />
                </ListItemIcon>
                <ListItemText>Empleados</ListItemText>
                <Typography variant="body2" color="text.secondary">
                    ⌘V
                </Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <IconShoppingCart fontSize="small" />
                </ListItemIcon>
                <ListItemText>Configuraciones</ListItemText>
            </MenuItem>
        </Menu>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    id="basic-button"
                    onClick={handleClick}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    NetPosSystem
                </Typography>
                <Button 
                    id="basic-button"
                    onClick={handleClick}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    color="inherit">Login</Button>
            </Toolbar>
        </AppBar>

        {activeComponent === 'ShoppingCart' && <ShoppingCart/>}
        {activeComponent === 'Inventory' && <InventoryView />}
            
    </>)
};

export default Home;