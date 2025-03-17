import * as React from 'react';
import {
    Box,
    Rating,
    Typography
} from '@mui/material';

export const BasicRating = () => {
    const [value, setValue] = React.useState(2);

    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Basic Rating</Typography>
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <Typography component="legend">Controlled</Typography>
                <Rating 
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Typography component="legend">Uncontrolled</Typography>
                <Rating 
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                        console.log(newValue);
                    }}
                    defaultValue={2}
                />
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={value} readOnly />
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} />
            </Box>
        </>
    );
}
