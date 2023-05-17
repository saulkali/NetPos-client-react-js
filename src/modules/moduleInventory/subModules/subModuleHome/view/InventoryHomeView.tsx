import React from "react";
import InventoryHomeViewModel from "../../../subModules/subModuleHome/viewModel/InventoryHomeViewModel";
import {
    Grid,
    TextField,
    InputAdornment,
    Tooltip,
    IconButton,
    TableContainer,
    Table,
    Paper,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    SpeedDial,
    SpeedDialIcon,
    SpeedDialAction
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
        <Grid container margin={2}>
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
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                >                    
                    <SpeedDialAction
                        key='name action'
                        icon={<IconAdd/>}
                        tooltipTitle='Agregar un nuevo articulo'
                        onClick={()=>setActiveComponent("InventoryRegisterArticle")}
                        />
            </SpeedDial>
        </Grid>
        
    );
}

export default InventoryHomeView;