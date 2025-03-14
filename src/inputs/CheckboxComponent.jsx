import * as React from 'react';
import {
    Checkbox,
    Typography,
    FormGroup,
    FormControlLabel
} from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const SizeCheckboxes = () => {
    return (
        <div>
            <Typography variant='body1'>Size Checkboxes</Typography>
            <Checkbox {...label} defaultChecked size="small" />
            <Checkbox {...label} defaultChecked />
            <Checkbox
                {...label} 
                defaultChecked 
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }}}
            />
        </div>
    );
}

export const CheckboxLabels = () => {
    return (
        <>
            <Typography variant='body1'>Checkbox Labels</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel required control={<Checkbox />} label="Required" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup>
        </>
    )
}

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
