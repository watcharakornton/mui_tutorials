import * as React from 'react'
import {
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormHelperText,
    FormLabel,
    Button,
} from '@mui/material';
import { pink } from '@mui/material/colors';

export const ErrorRadios = () => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText('');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === 'best') {
            setHelperText('You got it!');
            setError(false);
        } else if (value === 'worst') {
            setHelperText('Sorry, wrong answer');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };

    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Error Radios</Typography>
            <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 3 }} error={error} variant="standard">
                    <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
                    <RadioGroup 
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="best" control={<Radio />} label="The best!" />
                        <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                    <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                        Check Answer
                    </Button>
                </FormControl>
            </form>
        </>
    );
}

export const FormControlLabelPlacement = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Form Control Label Placement</Typography>
            <FormControl>
                <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                >
                    <FormControlLabel 
                        value="bottom"
                        control={<Radio />}
                        label="Bottom"
                        labelPlacement='bottom'
                    />
                    <FormControlLabel value="end" control={<Radio />} label="End" />
                </RadioGroup>
            </FormControl>
        </>
    );
}

export const ColorRadioButtons = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (
        <div>
            <Typography variant='body1' sx={{ mb: 3 }}>Color Radio Buttons</Typography>
            <Radio {...controlProps('a')} />
            <Radio {...controlProps('b')} color="secondary" />
            <Radio {...controlProps('c')} color="success" />
            <Radio {...controlProps('d')} color="default" />
            <Radio
                {...controlProps('e')}
                sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }}
            />
        </div>
    )
}

export const SizeRadioButtons = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (
        <div>
            <Typography variant='body1' sx={{ mb: 3 }}>Size Radio Buttons</Typography>
            <Radio {...controlProps('a')} size="small" />
            <Radio {...controlProps('b')} />
            <Radio
                {...controlProps('c')}
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 28,
                    },
                }}
            />
        </div>
    )
}

export const RadioButtons = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Radio Buttons</Typography>
            <div>
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                />
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                />
            </div>
        </>
    )
}

export const ControlledRadioButtonsGroup = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Controlled Radio Buttons Group</Typography>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
        </>
    );
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
