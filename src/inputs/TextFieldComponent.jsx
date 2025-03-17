import * as React from 'react';
import {
    Typography,
    Box,
    TextField,
} from '@mui/material';

export const BasicTextFields = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Basic Text Fields</Typography>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }}}
                noValidate
                autoComplete='off'
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
        </>
    )
}
