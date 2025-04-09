import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Box,
    Link,
} from '@mui/material';

const preventDefault = (event) => event.preventDefault();

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