import * as React from 'react';
import { Typography } from '@mui/material';

const MyTitle = ({title}) => {
    return (
        <Typography variant='h5' sx={{ mb: 3 }}>{title}</Typography>
    )
}

export default MyTitle