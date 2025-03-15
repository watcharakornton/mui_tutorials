import * as React from 'react'
import {
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@mui/material';

export const ControlledRadioButtonsGroup = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Controlled Radio Buttons Group</Typography>
        </>
    )
}

export const RowRadioButtonsGroup = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Row Radio Buttons Group</Typography>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel 
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="other"
                    />
                </RadioGroup>
            </FormControl>
        </>
    )
}

export const RadioButtonsGroup = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Radio Buttons Group</Typography>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </>
    )
}
