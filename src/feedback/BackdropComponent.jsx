import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Backdrop,
    CircularProgress,
    Button,
} from '@mui/material';

export const SimpleBackdrop = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <MyContainer title="Simple Backdrop">
            <div>
                <Button onClick={handleOpen}>Show backdrop</Button>
                <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        </MyContainer>
    )
}