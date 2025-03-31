import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Box,
    Stack,
    CircularProgress,
} from '@mui/material';

export const CircularSize = () => {
    return (
        <MyContainer title="Circular Size">
            <Stack spacing={2} direction="row" alignItems="center">
                <CircularProgress size="30px" />
                <CircularProgress size={40} />
                <CircularProgress size="3rem" />
            </Stack>
        </MyContainer>
    )
}

export const CircularColor = () => {
    return (
        <MyContainer title="Circular Color">
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Stack>
        </MyContainer>
    )
}

export const CircularIndeterminate = () => {
    return (
        <MyContainer title="Circular Indeterminate">
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </MyContainer>
    )
}