import * as React from 'react';
import {
    Typography,
    Box,
    Stack,
    Slider,
} from '@mui/material';
import {
    VolumeDown,
    VolumeUp
} from '@mui/icons-material';

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

function valueText(value) {
    return `${value}°C`
}

export const InputSlider = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Input Slider</Typography>
        </>
    )
}

export const MinimumDistanceSlider = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Minimum Distance Slider</Typography>
        </>
    )
}

export const RangeSlider = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Range Slider</Typography>
            <Box sx={{ width: 300, mx: 'auto' }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay='auto'
                    getAriaValueText={valueText}
                />
            </Box>
        </>
    )
}

export const DiscreteSliderLabel = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Discrete Slider Label</Typography>
            <Box sx={{ width: 300, mx: 'auto' }}>
                <Slider
                    aria-label="Always visible"
                    defaultValue={80}
                    getAriaValueText={valueText}
                    step={10}
                    marks={marks}
                    valueLabelDisplay='on'
                />
            </Box>
        </>
    )
}

export const DiscreteSliderValues = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Discrete Slider Values</Typography>
            <Box sx={{ width: 300, mx: 'auto' }}>
                <Slider
                    aria-label='Restricted values'
                    defaultValue={20}
                    getAriaValueText={valueText}
                    step={null}
                    valueLabelDisplay='auto'
                    marks={marks}
                />
            </Box>
        </>
    )
}

export const DiscreteSliderMarks = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Discrete Slider Marks</Typography>
            <Box sx={{ width: 300, mx: 'auto' }}>
                <Slider
                    aria-label="Custom marks"
                    defaultValue={20}
                    getAriaValueText={valueText}
                    step={10}
                    valueLabelDisplay='auto'
                    marks={marks}
                />
            </Box>
        </>
    )
}

export const DiscreteSliderSteps = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Discrete Slider Steps</Typography>
            <Box sx={{ width: 300, mx: 'auto' }}>
                <Slider
                    aria-label="Small steps"
                    defaultValue={0.00000005}
                    getAriaValueText={valueText}
                    step={0.00000001}
                    marks
                    min={-0.00000005}
                    max={0.0000001}
                    valueLabelDisplay="auto"
                />
            </Box>
        </>
    )
}

export const DiscreteSlider = () => {

    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Discrete Slider</Typography>
            <Box sx={{ width: 300, mx: 'auto' }}>
                <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valueText}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={10}
                    marks
                    min={10}
                    max={110}
                />
                <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
            </Box>
        </>
    )
}

export const SliderSizes = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Slider Sizes</Typography>
            <Box sx={{ width: 300, mx: 'auto' }}>
                <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                />
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </Box>
        </>
    )
}

export const ContinuousSlider = () => {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Continuous Slider</Typography>
            <Box sx={{ width: 200, mx: 'auto' }}>
                <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
                    <VolumeDown />
                    <Slider aria-label="Volume" value={value} onChange={handleChange} />
                    <VolumeUp />
                </Stack>
                <Slider disabled defaultValue={30} aria-label="Disabled slider" />
            </Box>
        </>
    )
}
