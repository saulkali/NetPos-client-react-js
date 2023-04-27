import React, { useEffect, useState } from 'react';
import {animated} from 'react-spring';
import {makeStyles} from '@material-ui/core/styles';
import TitleAnimationLogin from '../animations/Animations';
import IconLock from '@mui/icons-material/Lock';
import LoginViewModel from '../viewModel/LoginViewModel';
import ImageLogin from './../../../assets/PyPosLogin.png';
import IconSend from '@mui/icons-material/Send';
import IconEmail from '@mui/icons-material/Email';
import IconPassword from '@mui/icons-material/Password';

import LoginResponses from '../enums/LoginResponses';
import Stringsval from '../../../res/StringsVal';
import {useNavigate } from 'react-router-dom';


import Loader from '../../../common/components/Loader';
import {
    inject,
    observer
} from 'mobx-react';

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Checkbox,
    Link,
    Grid,
    Typography,
    FormControlLabel,
    InputAdornment,
    Snackbar,
    Alert
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    imageContainer: {
        backgroundImage: `url(${ImageLogin})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "33%",
        [theme.breakpoints.up("sm")]: {
            height: "100%",
        }
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

interface LoginViewModelProps{
    viewModel:LoginViewModel;
}

const LoginView:React.FC<LoginViewModelProps> = ({viewModel})=> { 
    const [messageSnackBar,setMessageSnackBar] = useState("");
    const classes = useStyles();
    const titleAnimation = TitleAnimationLogin();
    const navigate = useNavigate();

    useEffect(
        () => {
            switch(viewModel.messageLoginResponse){
                case LoginResponses.CREDENTIALNOTVALID:
                    setMessageSnackBar(Stringsval.msgSnackBarCredentialNotValid);
                    break;
                case LoginResponses.EMPTYFIELDS:
                    setMessageSnackBar(Stringsval.msgSnackBarEmptysFields);
                    break;
                case LoginResponses.SUCCESS:
                    navigate("/");
                    break;
                case LoginResponses.USERNOTEXISTS:
                    setMessageSnackBar(Stringsval.msgSnackaBarUserNotExists);
                    break;
                default:
                    setMessageSnackBar(Stringsval.msgSnackBarUnknow);
                    break;
            }
        }, 
        [viewModel.messageLoginResponse,navigate]
    );

    return (
        
        <Grid container className={classes.root}>
            <Loader isOpen={viewModel.showLoader} />
            <Snackbar 
                open={viewModel.showSnackBar} 
                autoHideDuration={4000}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                onClose= {()=> viewModel.showSnackBar = false}>
                <Alert onClose={()=> viewModel.showSnackBar = false} severity="error" sx={{ width: '100%' }}>
                    {messageSnackBar}
                </Alert>
            </Snackbar>
            <Grid item xs={12} sm={7} className={classes.imageContainer} />
            <Grid item xs={12} sm={5} className={classes.formContainer}>
                <div>
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <animated.div style={titleAnimation}>
                            <Avatar className={classes.avatar}>
                                <IconLock/>
                            </Avatar>
                            <Typography component="h1" variant='h6'>
                                Inicio De Sesion
                            </Typography>
                            <form className={classes.form} onSubmit={(e)=> e.preventDefault()} >
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    required
                                    value={viewModel.username}
                                    onChange={(e)=> viewModel.username = e.target.value}
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <IconEmail/>
                                            </InputAdornment>
                                        ),
                                    }}
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
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <IconPassword/>
                                            </InputAdornment>
                                            
                                        ),
                                    }}
                                    value={viewModel.password}
                                    onChange={(e) => viewModel.password = e.target.value}
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
                                    onClick={viewModel.login}
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
                                        <Link onClick={()=> navigate("/settings")} variant='body2'>
                                            {"Configuraciones"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <p>Copyright © NetPos 2023.</p>
                            </form>
                        </animated.div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}


export default inject('viewModel')(observer(LoginView));