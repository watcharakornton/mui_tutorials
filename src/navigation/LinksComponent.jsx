import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Box,
    Link,
} from '@mui/material';

const preventDefault = (event) => event.preventDefault();

export const ButtonLink = () => {
    return (
        <MyContainer title="Button Link">
            <Link
                component="button"
                variant='body2'
                onClick={() => {
                    console.info("I'm a button.");
                }}
            >
                Button link
            </Link>
        </MyContainer>
    )
}

export const UnderlineLink = () => {
    return (
        <MyContainer title="Underline Link">
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    typography: 'body1',
                    '& > :not(style) ~ :not(style)': {
                        ml: 2,
                    },
                }}
                onClick={preventDefault}
            >
                <Link href="#" underline='none'>
                    {'underline="none"'}
                </Link>
                <Link href="#" underline='hover'>
                    {'underline="hover"'}
                </Link>
                <Link href="#" underline='always'>
                    {'underline="always"'}
                </Link>
            </Box>
        </MyContainer>
    )
}

export const Links = () => {
    return (
        <MyContainer title="Links">
            <Box
                sx={{
                    typography: 'body1',
                    '& > :not(style) ~ :not(style)': {
                        ml: 2,
                    },
                }}
                onClick={preventDefault}
            >
                <Link href="#">Link</Link>
                <Link href="#" color="inherit">
                    {'color="inherit"'}
                </Link>
                <Link href="#" variant='body2'>
                    {'variant="body2"'}
                </Link>
            </Box>
        </MyContainer>
    )
}