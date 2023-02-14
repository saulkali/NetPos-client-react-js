import {
    CircularProgress,
    Backdrop
} from '@mui/material';

interface LoginProps{
    isOpen:boolean
}

const Loader = ( {isOpen}:LoginProps) => {
    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isOpen}
                >
                    <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
};

export default Loader;