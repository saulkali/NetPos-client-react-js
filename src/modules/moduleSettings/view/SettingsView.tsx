import {
    Grid,
    BottomNavigation,
    BottomNavigationAction,
    AppBar,
    TextField,
    InputAdornment,
    Toolbar,
    Typography,
    IconButton,
    Card,
    CardContent,
    CardActions,
    Button
} from '@mui/material'
import IconArrowLeft from '@mui/icons-material/ArrowBack';
import {useNavigate } from 'react-router-dom';

const SettingsView = () =>{
    const navigate = useNavigate();
    return(
    <Grid container>
        <Grid item xs={12}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'                        
                        color='inherit'
                        onClick={()=> navigate('/')}
                        arial-label='Volver'
                        sx={{mr:2}}>
                            <IconArrowLeft/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Configuraciones
                    </Typography>
                </Toolbar>
            </AppBar>
        </Grid>
        <Grid item xs={12}>
            <Card >
                <CardContent>
                    
                    <Typography variant="h5" component="div">
                        Impresora (ventas)
                    </Typography>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label="puerto usb de impresora"
                        name='email'
                        autoComplete='email'
                        autoFocus
                    />
                    <Typography variant="h5" component="div">
                        Api
                    </Typography>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label="Url"
                        name='email'
                        autoComplete='email'
                        autoFocus
                    />
                </CardContent>
                <CardActions>
                    <Button variant="outlined">
                        Guardar
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        
    </Grid>
    
    )
};

export default SettingsView;