import * as React from 'react'
import MyContainer from '../component/MyContainer'
import {
    Grid,
    Box,
    Button,
    Snackbar,
    IconButton,
} from '@mui/material';
import {
    Close as CloseIcon
} from '@mui/icons-material';

export const PositionedSnackbar = () => {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
                    Top-Center
                </Button>
            </Box>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={6}>
                    <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
                        Top-Left
                    </Button>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                    <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
                        Top-Right
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
                        Bottom-Left
                    </Button>
                </Grid>
                <Grid sx={{ textAlign: 'right' }} item xs={6}>
                    <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
                        Bottom-Right
                    </Button>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
                    Bottom-Center
                </Button>
            </Box>
        </React.Fragment>
    );

    return (
        <MyContainer title="Positioned Snackbar">
            <Box sx={{ width: 500 }}>
                {buttons}
                <Snackbar 
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    message="I love snacks"
                    key={vertical + horizontal}
                />
            </Box>
        </MyContainer>
    )
}

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
