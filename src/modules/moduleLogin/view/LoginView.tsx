import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TitleAnimationLogin from '../animations/Animations';
import {observer,inject} from 'mobx-react';
import { useNavigate} from 'react-router-dom';
import IconLock from '@mui/icons-material/Lock';
import LoginViewModel from '../viewModel/LoginViewModel';
import ImageLogin from './../../../assets/PyPosLogin.png';
import IconSend from '@mui/icons-material/Send';

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Checkbox,
    Link,
    Grid,
    Typography,
    FormControlLabel
} from '@mui/material';


interface customModel{
    loginViewModel: typeof LoginViewModel;
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    imageContainer: {
        backgroundImage: `url(${ImageLogin})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    formContainer: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
    },
    avatar: {
        margin:theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width:'100%',
        marginTop:theme.spacing(1)
    },
    submit: {
        margin:theme.spacing(3,0,2)
    }
}));

const LoginView:React.FC<customModel> = ({loginViewModel}) =>{
        const classes = useStyles();
        const navigate = useNavigate();

        const titleAnimation = TitleAnimationLogin();
        
        return (
            <Grid container className={classes.root}>
                <Grid item xs={7} className={classes.imageContainer} />
                <Grid item xs={5} className={classes.formContainer}>
                    <div>
                        <CssBaseline/>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <IconLock/>
                            </Avatar>
                            <Typography component="h1" variant='h6'>
                                Inicio De Sesion
                            </Typography>
                            <form className={classes.form} >
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    required
                                    fullWidth
                                    id='email'
                                    label="Direccion de correo electronico"
                                    name='email'
                                    autoComplete='email'
                                    autoFocus
                                />
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    required
                                    fullWidth
                                    name='password'
                                    label='password'
                                    type='password'
                                    id='password'
                                    autoComplete='current-password'
                                />
                                <FormControlLabel
                                    control={<Checkbox value='remember' color='primary'/>}
                                    label="Recordar Contraseña?"
                                />
                                <Button 
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                    onClick={() => navigate("/")}
                                >
                                    <IconSend/>
                                    Ingresar
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href='#' variant='body2'>
                                            {"Olvidaste la contraseña?"}
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href='#' variant='body2'>
                                            {"Aun no tienes cuenta?"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <p>Copyright © pypos 2023.</p>
                            </form>
                        </div>
                    </div>
                    
                </Grid>
            </Grid>
            
        );

}


export default inject('loginViewModel')(observer(LoginView));