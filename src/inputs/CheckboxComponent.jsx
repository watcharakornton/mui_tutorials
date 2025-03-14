import * as React from 'react';
import {
    Checkbox,
    Typography
} from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Checkboxes = () => {
    return (
        <>
            <Typography variant='body1'>Checkboxes</Typography>
            <div>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} />
                <Checkbox {...label} disabled />
                <Checkbox {...label} disabled checked />
            </div>
        </>
    )
}
