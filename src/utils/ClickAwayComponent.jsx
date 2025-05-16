import * as React from 'react'
import MyContainer from '../component/MyContainer'
import {
    Box,
    ClickAwayListener,
    Portal,
} from '@mui/material/'

export const ClickAway = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    };

    return (
        <MyContainer title="Click-Away">
            <ClickAwayListener onClickAway={handleClickAway}>
                <Box sx={{ position: 'relative' }}>
                    <button type="button" onClick={handleClick}>
                        Open menu dropdown
                    </button>
                    {open ? (
                        <Box sx={styles}>
                            Click me, I will stay visible until you click outside.
                        </Box>
                    ) : null}
                </Box>
            </ClickAwayListener>
        </MyContainer>
    );
}

export const PortalClickAway = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'fixed',
        width: 200,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    };

    return (
        <MyContainer title="Portal Click Away">
            <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                    <button type="button" onClick={handleClick}>
                        Open menu dropdown
                    </button>
                    {open ? (
                        <Portal>
                            <Box sx={styles}>
                                Click me, I will stay visible until you click outside.
                            </Box>
                        </Portal>
                    ) : null}
                </div>
            </ClickAwayListener>
        </MyContainer>
    )
}