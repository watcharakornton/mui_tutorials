import * as React from 'react'
import MyContainer from '../component/MyContainer'
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import {
    Stack,
    Box,
    FormControlLabel,
    Switch,
    Typography,
    TextField,
    MenuItem,
    Button,
    Paper,
    Checkbox,
    Slider,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import {
    Brightness4 as Brightness4Icon,
    Brightness7 as Brightness7Icon,
} from '@mui/icons-material'

// Basic sparkline
export const BasicSparkLine = () => {
    return (
        <MyContainer title="Basic sparkline">
            <Stack direction="row" sx={{ width: '95%' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart
                        plotType='bar'
                        data={[1, 4, 2, 5, 7, 2, 4, 6]}
                        height={100}
                    />
                </Box>
            </Stack>
        </MyContainer>
    )
}

// Area spark line
export const AreaSparkLine = () => {
    return (
        <MyContainer title="Area spark line">
            <Stack direction="row" sx={{ width: '95%' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart data={[3, -10, -2, 5, 7, -2, 4, 6]} height={100} area />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart
                        data={[3, -10, -2, 5, 7, -2, 4, 6]}
                        height={100}
                        curve="natural"
                        area
                    />
                </Box>
            </Stack>
        </MyContainer>
    )
}

// Basic spark line customization
export const BasicSparkLineCustomization = () => {
    const [showHighlight, setShowHighlight] = React.useState(true);
    const [showTooltip, setShowTooltip] = React.useState(true);

    const handleHighlightChange = (event) => {
        setShowHighlight(event.target.checked);
    };

    const handleTooltipChange = (event) => {
        setShowTooltip(event.target.checked);
    };

    return (
        <MyContainer title="Basic spark line customization">
            <Stack direction="column" sx={{ width: '95%' }}>
                <Stack direction="row">
                    <FormControlLabel
                        value="end"
                        control={
                            <Switch
                                color="primary"
                                checked={showHighlight}
                                onChange={handleHighlightChange}
                            />
                        }
                        label="showHighlight"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={
                            <Switch
                                color="primary"
                                checked={showTooltip}
                                onChange={handleTooltipChange}
                            />
                        }
                        label="showTooltip"
                        labelPlacement="end"
                    />
                </Stack>
                <Stack direction="row" sx={{ width: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            data={[1, 4, 2, 5, 7, 2, 4, 6]}
                            height={100}
                            showHighlight={showHighlight}
                            showTooltip={showTooltip}
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            plotType="bar"
                            data={[1, 4, 2, 5, 7, 2, 4, 6]}
                            height={100}
                            showHighlight={showHighlight}
                            showTooltip={showTooltip}
                        />
                    </Box>
                </Stack>
            </Stack>
        </MyContainer>
    )
}

// Custom axis
export const CustomAxis = () => {
    return (
        <MyContainer title="Custom axis">
            <Stack direction="row" sx={{ width: '95%' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart
                        data={[1, 4, 2, 5, 7, 2, 4, 6]}
                        xAxis={{
                            scaleType: 'time',
                            data: [
                                new Date(2022, 5, 1),
                                new Date(2022, 5, 2),
                                new Date(2022, 5, 5),
                                new Date(2022, 5, 6),
                                new Date(2022, 5, 7),
                                new Date(2022, 5, 8),
                                new Date(2022, 5, 11),
                                new Date(2022, 5, 12),
                            ],
                            valueFormatter: (value) => value.toISOString().slice(0, 10),
                        }}
                        height={100}
                        showTooltip
                        showHighlight
                    />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart
                        plotType='bar'
                        data={[1, 4, 2, 5, 7, 2, 4, 6]}
                        height={100}
                        showTooltip
                        showHighlight
                        xAxis={{
                            scaleType: 'band',
                            data: [
                                new DataTransfer(2016, 0, 1),
                                new DataTransfer(2017, 0, 1),
                                new DataTransfer(2018, 0, 1),
                                new DataTransfer(2019, 0, 1),
                                new DataTransfer(2020, 0, 1),
                                new DataTransfer(2021, 0, 1),
                                new DataTransfer(2022, 0, 1),
                                new DataTransfer(2023, 0, 1),
                            ],
                            valueFormatter: (value) => value.getFullYear(),
                        }}
                    />
                </Box>
            </Stack>
        </MyContainer>
    )
}

// Custom YAxis
const settings = {
    valueFormatter: (value) => `${value}%`,
    height: 100,
    showTooltip: true,
    showHighlight: true,
};

const smallValues = [0, 2, 3, 4, 6, 8, 7, 9, 15, 6, 8, 7, 12];
const largeValues = [60, 65, 66, 68, 87, 82, 83, 89, 92, 75, 76, 77, 91];

export const CustomYAxis = () => {
    return (
        <MyContainer title="Custom YAxis">
            <Stack sx={{ width: '95%' }}>
                <Typography>Without fixed y-range</Typography>
                <Stack sx={{ width: '100%', mb: 2 }} direction="row" spacing={2}>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart data={smallValues} color="red" {...settings} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart data={largeValues} {...settings} />
                    </Box>
                </Stack>
                <Typography>With y-range fixed to [0, 100]</Typography>
                <Stack sx={{ width: '100%' }} direction="row" spacing={2}>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            data={smallValues}
                            yAxis={{
                                min: 0,
                                max: 100,
                            }}
                            color="red"
                            {...settings}
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            data={largeValues}
                            yAxis={{
                                min: 0,
                                max: 100,
                            }}
                            {...settings}
                        />
                    </Box>
                </Stack>
            </Stack>
        </MyContainer>
    )
}

// Custom domain YAxis 

const settings2 = {
    valueFormatter: (value) => `${value}%`,
    height: 100,
    showTooltip: true,
    showHighlight: true,
    data: [60, -15, 66, 68, 87, 82, 83, 85, 92, 75, 76, 50, 91],
    margin: { top: 10, bottom: 20, left: 5, right: 5 },
    sx: (theme) => ({
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.divider,
    }),
};

// Extend a value to match a multiple of the step.
function extend(value, step) {
    if (value > 0) {
        // If > 0 go to the next step
        return step * Math.ceil(value / step);
    }
    // If < 0 go to the previous step
    return step * Math.floor(value / step);
}

const yRange = {
    nice: '-100, 100',
    strict: '-15, 92',
    function: '-20, 100',
};

export const CustomDomainYAxis = () => {
    const [domainLimitKey, setDomainLimitKey] = React.useState('nice');

    const domainLimit =
        domainLimitKey === 'function'
            ? (min, max) => ({
                min: extend(min, 10),
                max: extend(max, 10),
            })
            : domainLimitKey;
    return (
        <MyContainer title="Custom domain YAxis">
            <Box
                sx={{
                    width: '95%',
                }}
            >
                <Stack direction="row" alignItems="baseline" justifyContent="space-between">
                    <TextField
                        select
                        value={domainLimitKey}
                        onChange={(event) => setDomainLimitKey(event.target.value)}
                        label="domain limit"
                        sx={{ minWidth: 150, mb: 2 }}
                    >
                        <MenuItem value="nice">nice</MenuItem>
                        <MenuItem value="strict">strict</MenuItem>
                        <MenuItem value="function">function</MenuItem>
                    </TextField>
                    <Typography>y-axis range: {yRange[domainLimitKey]}</Typography>
                </Stack>
                <Stack
                    sx={{
                        width: '100%'
                    }}
                    direction="row"
                    spacing={2}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart {...settings2} yAxis={{ domainLimit }} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart plotType="bar" {...settings2} yAxis={{ domainLimit }} />
                    </Box>
                </Stack>
            </Box>
        </MyContainer>
    )
}

// Color customization
const settings3 = {
    height: 100,
    yAxis: { min: 0, max: 20 },
};

const values = [0, 2, 3, 4, 6, 8, 7, 9, 15, 6, 8, 7, 12];

export const ColorCustomization = () => {
    return (
        <MyContainer title="Color customization">
            <Stack sx={{ width: '100%', maxWidth: 300 }}>
                <SparkLineChart data={values} color="green" {...settings3} />
            </Stack>
        </MyContainer>
    )
}

// Color customization mode
const settings4 = {
    height: 100,
    yAxis: { min: 0, max: 20 },
};

const values2 = [0, 2, 3, 4, 6, 8, 7, 9, 15, 6, 8, 7, 12];

export const ColorCustomizationMode = () => {
    return (
        <MyContainer title="Color customization mode">
            <DarkModeWrapper>
                <SparkLineChart
                    data={values2}
                    color={(mode) => (mode === 'light' ? 'black' : 'white')}
                    {...settings4}
                />
            </DarkModeWrapper>
        </MyContainer>
    )
}

function DarkModeWrapper(props) {
    const theme = useTheme();
    const [colorMode, setColorMode] = React.useState(theme.palette.mode);

    const newTheme = createTheme({ palette: { mode: colorMode } });
    return (
        <ThemeProvider theme={newTheme}>
            <Stack>
                <Button
                    onClick={() =>
                        setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'))
                    }
                    color="inherit"
                    endIcon={colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                >
                    {colorMode} mode
                </Button>
                <Paper sx={{ p: 2, width: '100%', maxWidth: 300 }}>{props.children}</Paper>
            </Stack>
        </ThemeProvider>
    )
}
