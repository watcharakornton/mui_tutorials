import * as React from 'react';
import MyContainer from "../component/MyContainer";
import { styled, useTheme } from '@mui/material/styles';
import {
    Box,
    Typography,
} from '@mui/material'

export const TypographyTheme = () => {
    const theme = useTheme();
    const Div = styled('div')({
        ...theme.typography.button,
        backgroundColor: (theme.vars || theme).palette.background.paper,
        padding: theme.spacing(1),
    });

    return (
        <MyContainer title="Typography Theme">
            <Div>{"This div's text looks like that of a button."}</Div>
        </MyContainer>
    )
}

export const Types = () => {
    return (
        <MyContainer title="Types">
            <Box sx={{ width: '100%', maxWidth: 600 }}>
                <Typography variant='h1' gutterBottom>
                    h1. Heading
                </Typography>
                <Typography variant='h2' gutterBottom>
                    h2. Heading
                </Typography>
                <Typography variant='h3' gutterBottom>
                    h3. Heading
                </Typography>
                <Typography variant='h4' gutterBottom>
                    h4. Heading
                </Typography>
                <Typography variant='h5' gutterBottom>
                    h5. Heading
                </Typography>
                <Typography variant='h6' gutterBottom>
                    h6. Heading
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant='subtitle2' gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant='body1' gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant='body2' gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant='button' gutterBottom sx={{ display: 'block' }}>
                    button text
                </Typography>
                <Typography variant='caption' gutterBottom sx={{ display: 'block' }}>
                    caption text
                </Typography>
                <Typography variant='overline' gutterBottom sx={{ display: 'block' }}>
                    overline text
                </Typography>
            </Box>
        </MyContainer>
    );
}