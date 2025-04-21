import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { ThemeProvider } from '@mui/material/styles';
import {
    Box,
} from '@mui/material';

export const BoxSx = () => {
    return (
        <MyContainer title="Box Sx">
            <ThemeProvider
                theme={{
                    palette: {
                        primary: {
                            main: '#007FFF',
                            dark: '#0066CC',
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        width: 100,
                        height: 100,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                    }}
                />
            </ThemeProvider>
        </MyContainer>
    )
}

export const BoxBasic = () => {
    return (
        <MyContainer title="Box Basic">
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                This box renders as an HTML section element.
            </Box>
        </MyContainer>
    )
}
