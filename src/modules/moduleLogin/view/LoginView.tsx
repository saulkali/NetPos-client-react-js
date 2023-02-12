import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TitleAnimationLogin from '../animations/Animations';
import {observer,inject} from 'mobx-react';
import { useNavigate} from 'react-router-dom';
import IconLock from '@mui/icons-material/Lock';
import LoginViewModel from '../viewModel/LoginViewModel';

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    FormControlLabel
} from '@mui/material';


interface customModel{
    loginViewModel: typeof LoginViewModel;
}

const useStyles = makeStyles((theme) => ({
    paper: {
      },
      avatar: {
      },
      form: {
      },
      submit: {
      }
}));

const LoginView:React.FC<customModel> = ({loginViewModel}) =>{
        const classes = useStyles();
        const titleAnimation = TitleAnimationLogin();
        
        return (
            <div>
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <IconLock/>
                    </Avatar>
                    <Typography component="h1" variant='h6'>
                        Inicio De Sesion
                    </Typography>
                    <form className={classes.form} noValidate>
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
                        >
                            Ingresar
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href='#' variant='body2'>
                                    {"Aun no tienes cuenta?"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>

                </div>
            </div>
        );

}


export default inject('loginViewModel')(observer(LoginView));