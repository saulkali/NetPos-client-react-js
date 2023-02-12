import React , {useState} from 'react';
import { 
    Snackbar,
    IconButton,
    Typography

} from '@mui/material';
import {makeStyles} from '@mui/material/styles';

import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      marginRight: theme.spacing(2),
    },
  }));
  
const SnackBarMessage = (title:String, message:String ) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
  
    const handleClose = (event:React.MouseEvent<HTMLButtonElement>, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
  
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <div className={classes.error}>
          <Typography variant="body2" className={classes.message}>
            <ErrorIcon className={classes.icon} />
            {title}
          </Typography>
          <Typography variant="body2">{message}</Typography>
        </div>
      </Snackbar>
    );
  }
export default SnackBarMessage;