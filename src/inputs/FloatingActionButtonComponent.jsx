import * as React from 'react';
import { Box, Fab, Typography } from '@mui/material';
import {
    Add as AddIcon,
    Edit as EditIcon,
    Favorite as FavoriteIcon,
    Navigation as NavigationIcon,
} from '@mui/icons-material';

export const FloatingActionButtonSize = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 2 }}>Floating Action Button Size</Typography>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab size="small" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab size="medium" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Box>
        </>
    );
}

export const FloatingActionButtons = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 2 }}>Floating Action Buttons</Typography>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
                <Fab variant='extended'>
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
                <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab>
            </Box>
        </>
    );
}
