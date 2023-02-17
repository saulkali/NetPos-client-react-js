import React from "react";
import InventoryHomeViewModel from "../../../subModules/subModuleHome/viewModel/InventoryHomeViewModel";
import {
    Grid,
    TextField,
    InputAdornment,
    Tooltip,
    IconButton,
    Fab,
} from '@mui/material';

import IconQrCode from '@mui/icons-material/QrCode';
import IconSearch from '@mui/icons-material/Search';
import IconAdd from '@mui/icons-material/Add';

interface InventoryViewModelProps{
    viewModel:InventoryHomeViewModel;
    setActiveComponent:React.Dispatch<React.SetStateAction<string>>;
}


const InventoryHomeView:React.FC<InventoryViewModelProps> = ({viewModel,setActiveComponent}) =>{
    return (
        <Grid container>
            <Grid item xs={12}>
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
                        endAdornment:(
                            <Tooltip title="Buscar Articulo" arrow disableFocusListener>
                                <IconButton>
                                    <IconSearch />
                                </IconButton>
                            </Tooltip>
                            
                        )
                    }}
                />
            </Grid>
            <Tooltip title="Agregar Nuevo Articulo" arrow disableFocusListener>
                <Fab color='primary' aria-label='add' onClick={()=>setActiveComponent("InventoryRegisterArticle")}>
                    <IconAdd/>
                </Fab>
            </Tooltip>
        </Grid>
    );
}

export default InventoryHomeView;