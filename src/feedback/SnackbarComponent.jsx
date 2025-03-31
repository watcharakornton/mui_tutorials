import * as React from 'react'
import MyContainer from '../component/MyContainer'
import {
    Button,
    Snackbar,
    IconButton,
} from '@mui/material';
import {
    Close as CloseIcon
} from '@mui/icons-material';

export const SimpleSnackbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
         
        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton 
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <MyContainer title="Simple Snackbar">
            <div>
                <Button onClick={handleClick}>Open Snackbar</Button>
                <Snackbar 
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note archived"
                    action={action}
                />
            </div>
        </MyContainer>
    );
}
