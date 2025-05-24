import * as React from 'react';
import MyContainer from '../component/MyContainer';
import MuiStyledCodeBlock from '../component/MuiStyledCodeBlock';
import {
    Stack,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Box,
    Typography,
    IconButton,
} from '@mui/material';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import { BarChart, BarPlot } from '@mui/x-charts/BarChart';
import { useAnimate } from '@mui/x-charts/hooks';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { styled } from '@mui/material/styles';
import { interpolateObject } from '@mui/x-charts-vendor/d3-interpolate';
import { dataset, valueFormatter } from '../data/weather';
import { addLabels, balanceSheet } from '../data/netflixsBalanceSheet';

export const BasicBars = () => {
    return (
        <MyContainer title="Basic Bars">
            <BarChart
                xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                height={300}
            />
        </MyContainer>
    )
}

// BarsDataset
const BarsChartSetting = {
    yAxis: [
        {
            label: 'rainfall (mm)',
            width: 60,
        },
    ],
    height: 300,
};

export const BarsDataset = () => {
    return (
        <MyContainer title="Bars Dataset">
            <BarChart
                dataset={dataset}
                xAxis={[{ dataKey: 'month' }]}
                series={[
                    { dataKey: 'london', label: 'London', valueFormatter },
                    { dataKey: 'paris', label: 'Paris', valueFormatter },
                    { dataKey: 'newYork', label: 'New York', valueFormatter },
                    { dataKey: 'seoul', label: 'Seoul', valueFormatter },
                ]}
                {...BarsChartSetting}
            />
        </MyContainer>
    )
}

// StackBars
export const StackBars = () => {
    return (
        <MyContainer title="Stack Bars">
            <BarChart
                dataset={balanceSheet}
                series={addLabels([
                    { dataKey: 'currAss', stack: 'assets' },
                    { dataKey: 'nCurrAss', stack: 'assets' },
                    { dataKey: 'curLia', stack: 'liability' },
                    { dataKey: 'nCurlia', stack: 'liability' },
                    { dataKey: 'capStock', stack: 'equity' },
                    { dataKey: 'retEarn', stack: 'equity' },
                    { dataKey: 'treas', stack: 'equity' },
                ])}
                xAxis={[{ dataKey: 'year' }]}
                yAxis={[{ width: 80 }]}
                {...config}
            />
        </MyContainer>
    )
}

const config = {
    height: 350,
    margin: { left: 40 },
    hideLegend: true,
};

// HorizontalBars

const HorizontalBarsChartsSetting = {
    xAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
    height: 400,
};

export const HorizontalBars = () => {
    return (
        <MyContainer title="Horizontal Bars">
            <BarChart
                dataset={dataset}
                yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
                layout="horizontal"
                {...HorizontalBarsChartsSetting}
            />
        </MyContainer>
    )
}

// TickPlacementBars
function TickParamsSelector({
    tickPlacement,
    tickLabelPlacement,
    setTickPlacement,
    setTickLabelPlacement,
}) {
    return (
        <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
            <FormControl>
                <FormLabel id="tick-placement-radio-buttons-group-label">
                    tickPlacement
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby='tick-placement-radio-buttons-group-label'
                    name="tick-placement"
                    value={tickPlacement}
                    onChange={(event) => setTickPlacement(event.target.value)}
                >
                    <FormControlLabel value="start" control={<Radio />} label="start" />
                    <FormControlLabel value="end" control={<Radio />} label="end" />
                    <FormControlLabel value="middle" control={<Radio />} label="middle" />
                    <FormControlLabel
                        value="extremities"
                        control={<Radio />}
                        label="extremities"
                    />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="label-placement-radio-buttons-group-label">
                    tickLabelPlacement
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="label-placement-radio-buttons-group-label"
                    name="label-placement"
                    value={tickLabelPlacement}
                    onChange={(event) => setTickLabelPlacement(event.target.value)}
                >
                    <FormControlLabel value="tick" control={<Radio />} label="tick" />
                    <FormControlLabel value="middle" control={<Radio />} label="middle" />
                </RadioGroup>
            </FormControl>
        </Stack>
    );
}

const TickPlacementBarsChartSetting = {
    yAxis: [
        {
            label: 'rainfall (mm)',
            width: 60,
        },
    ],
    series: [{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }],
    height: 300,
};

export const TickPlacementBars = () => {
    const [tickPlacement, setTickPlacement] = React.useState('middle');
    const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');

    return (
        <MyContainer title="Tick Placement Bars">
            <div style={{ width: '95%' }}>
                <TickParamsSelector
                    tickPlacement={tickPlacement}
                    tickLabelPlacement={tickLabelPlacement}
                    setTickPlacement={setTickPlacement}
                    setTickLabelPlacement={setTickLabelPlacement}
                />
                <BarChart
                    dataset={dataset}
                    xAxis={[{ dataKey: 'month', tickPlacement, tickLabelPlacement }]}
                    {...TickPlacementBarsChartSetting}
                />
            </div>
        </MyContainer>
    )
}

// Grid Demo
const GridDemoChartSetting = {
    xAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
    height: 400,
};

export const GridDemo = () => {
    return (
        <MyContainer title="Grid Demo">
            <BarChart
                dataset={dataset}
                yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
                layout="horizontal"
                grid={{ vertical: true }}
                {...GridDemoChartSetting}
            />
        </MyContainer>
    )
}

export const BarLabel = () => {
    return (
        <MyContainer title="Bar Label">
            <BarChart
                xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                height={300}
                barLabel="value"
            />
        </MyContainer>
    )
}

export const CustomLabels = () => {
    return (
        <MyContainer title="Custom Labels">
            <BarChart
                series={[
                    { data: [4, 2, 5, 4, 1], stack: 'A', label: 'Series A1' },
                    { data: [2, 8, 1, 3, 1], stack: 'A', label: 'Series A2' },
                    { data: [14, 6, 5, 8, 9], label: 'Series B2' },
                ]}
                barLabel={(item, context) => {
                    if ((item.value ?? 0) > 10) {
                        return 'High';
                    }
                    return context.bar.height < 60 ? null : item.value?.toString();
                }}
                height={350}
            />
        </MyContainer>
    )
}

// Labels Above Bars

export const LabelsAboveBars = () => {
    return (
        <MyContainer title="Labels Above Bars">
            <ChartContainer
                xAxis={[{ scaleType: 'band', data: ['A', 'B', 'C'] }]}
                series={[
                    {
                        type: 'bar',
                        id: 'base',
                        data: [5, 7, 11],
                    },
                ]}
                width={300}
                height={400}
            >
                <BarPlot barLabel="value" slots={{ barLabel: BarLabelForLabelsAboveBars }} />
                <ChartsXAxis />
                <ChartsYAxis />
            </ChartContainer>
        </MyContainer>
    )
}

const Text = styled('text')(({ theme }) => ({
    ...theme?.typography?.body2,
    stoke: 'none',
    fill: (theme.vars || theme)?.palette?.text?.primary,
    transition: 'opacity 0.2s ease-in, fill 0.2s ease-in',
    textAnchor: 'middle',
    dominantBaseline: 'central',
    pointerEvents: 'none',
}));

function BarLabelForLabelsAboveBars(props) {
    const {
        seriesId,
        dataIndex,
        color,
        isFaded,
        isHighlighted,
        classes,
        xOrigin,
        yOrigin,
        x,
        y,
        width,
        height,
        layout,
        skipAnimation,
        ...otherProps
    } = props;

    const animatedProps = useAnimate(
        { x: x + width / 2, y: y - 8 },
        {
            initialProps: { x: x + width / 2, y: yOrigin },
            createInterpolator: interpolateObject,
            transformProps: (p) => p,
            applyProps: (element, p) => {
                element.setAttribute('x', p.x.toString());
                element.setAttribute('y', p.y.toString());
            },
            skip: skipAnimation,
        },
    );

    return (
        <Text {...otherProps} fill={color} textAnchor="middle" {...animatedProps} />
    )
}

// BarClick

const barChartsParams = {
    series: [
        {
            id: 'series-1',
            data: [3, 4, 1, 6, 5],
            label: 'A',
            stack: 'total',
            highlightScope: {
                highlight: 'item'
            },
        },
        {
            id: 'series-2',
            data: [4, 3, 1, 5, 8],
            label: 'B',
            stack: 'total',
            highlightScope: {
                highlight: 'item'
            },
        },
        {
            id: 'series-3',
            data: [4, 2, 5, 4, 1],
            label: 'C',
            highlightScope: {
                highlight: 'item'
            },
        },
    ],
    xAxis: [{ data: ['0', '3', '6', '9', '12'], id: 'axis1' }],
    height: 400,
};

export const BarClick = () => {
    const [itemData, setItemData] = React.useState();
    const [axisData, setAxisData] = React.useState();

    return (
        <MyContainer title="Bar Click">
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 0, md: 4 }}
                sx={{ width: '95%' }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <BarChart
                        {...barChartsParams}
                        onItemClick={(event, d) => setItemData(d)}
                        onAxisClick={(event, d) => setAxisData(d)}
                    />
                </Box>

                <Stack direction="column" sx={{ width: { xs: '100%', md: '40%' } }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography>Click on the chart</Typography>
                        <IconButton
                            aria-label="reset"
                            size="small"
                            onClick={() => {
                                setItemData(undefined)
                                setAxisData(null);
                            }}
                        >
                            <UndoOutlinedIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    <MuiStyledCodeBlock
                        code={`// Data from item click
${itemData ? JSON.stringify(itemData, null, 2) : '// The data will appear here'}

// Data from axis click
${axisData ? JSON.stringify(axisData, null, 2) : '// The data will appear here'}
`}
                        language="json"
                    />
                </Stack>
            </Stack>
        </MyContainer>
    )
}

// Tiny Bar Charts

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const uData2 = [4000, -3000, -2000, 2780, -1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const pData2 = [2400, 1398, -9800, 3908, 4800, -3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export const TinyBarCharts = () => {
    return (
        <MyContainer title="Tiny Bar Charts">
            <ChartContainer
                width={500}
                height={300}
                series={[{ data: uData, label: 'uv', type: 'bar' }]}
                xAxis={[{ scaleType: 'band', data: xLabels }]}
            >
                <BarPlot />
            </ChartContainer>
        </MyContainer>
    )
}

// Simple Bar Chart
export const SimpleBarChart = () => {
    return (
        <MyContainer title="Simple Bar Chart">
            <BarChart
                height={300}
                series={[
                    { data: pData, label: 'pv', id: 'pvId' },
                    { data: uData, label: 'uv', id: 'uvId' },
                ]}
                xAxis={[{ data: xLabels }]}
                yAxis={[{ width: 50 }]}
            />
        </MyContainer>
    )
}

export const StackedBarChart = () => {
    return (
        <MyContainer title="Stacked Bar Chart">
            <BarChart
                height={300}
                series={[
                    { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
                    { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
                ]}
                xAxis={[{ data: xLabels }]}
                yAxis={[{ width: 50 }]}
            />
        </MyContainer>
    )
}

// Mixed Bar Chart
export const MixedBarChart = () => {
    return (
        <MyContainer title="Mixed Bar Chart">
            <BarChart
                height={300}
                series={[
                    { data: pData, label: 'pv', stack: 'stack1' },
                    { data: amtData, label: 'amt' },
                    { data: uData, label: 'uv', stack: 'stack1' },
                ]}
                xAxis={[{ data: xLabels }]}
                yAxis={[{ width: 50 }]}
            />
        </MyContainer>
    )
}

export const PositiveAndNegativeBarChart = () => {
    return (
        <MyContainer title="Positive and Negative Bar Chart">
            <BarChart
                height={300}
                series={[
                    { data: pData2, label: 'pv' },
                    { data: uData, label: 'uv' },
                ]}
                xAxis={[{ data: xLabels }]}
                yAxis={[{ width: 60, max: 10000 }]}
            />
        </MyContainer>
    )
}

export const BarChartStackBySign = () => {
    return (
        <MyContainer title="Bar Chart Stack by Sign">
            <BarChart
                height={300}
                series={[
                    { data: pData2, label: 'pv', id: 'pvId', stack: 'stack1' },
                    { data: uData2, label: 'uv', id: 'uvId', stack: 'stack1' }
                ]}
                xAxis={[{ data: xLabels }]}
                yAxis={[{ width: 60 }]}
            />
        </MyContainer>
    )
}

export const BiaxialBarChart = () => {
    return (
        <MyContainer title="Biaxial Bar Chart">
            <BarChart
                height={300}
                series={[
                    {
                        data: pData,
                        label: 'pv',
                        id: 'pvId',
                        yAxisId: 'leftAxisId',
                    },
                    {
                        data: uData,
                        label: 'uv',
                        id: 'uvId',
                        yAxisId: 'rightAxisId',
                    },
                ]}
                xAxis={[{ data: xLabels }]}
                yAxis={[
                    { id: 'leftAxisId', width: 50 },
                    { id: 'rightAxisId', position: 'right' },
                ]}
            />
        </MyContainer>
    )
}

// Population Pyramid Bar Chart
const ageGroups = [
    '0-4 yrs',
    '5-9 yrs',
    '10-14 yrs',
    '15-19 yrs',
    '20-24 yrs',
    '25-29 yrs',
    '30-34 yrs',
    '35-39 yrs',
    '40-44 yrs',
    '45-49 yrs',
    '50-54 yrs',
    '55-59 yrs',
    '60-64 yrs',
    '65-69 yrs',
    '70-74 yrs',
    '75-79 yrs',
    '80-84 yrs',
    '85-89 yrs',
    '90-94 yrs',
    '95-99 yrs',
    '100+ yrs',
];

const male = [
    766227, 1097221, 1189663, 1183580, 1620461, 1933726, 1796779, 1808706, 2067075,
    2061862, 2258061, 2068112, 2042614, 1478069, 1012668, 696606, 476263, 201240,
    50323, 8291, 1139,
];

const female = [
    727814, 1044863, 1122176, 1104293, 1484776, 1695058, 1593655, 1673805, 1967944,
    2000130, 2231491, 2045845, 2105499, 1585781, 1152098, 899933, 762492, 445118,
    168603, 36739, 5770,
];

const numberFormatter = Intl.NumberFormat('en-US', {
    useGrouping: true,
});
const numberWithSuffixFormatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
});

export const PopulationPyramidBarChart = () => {
    return (
        <MyContainer title="Population Pyramid Bar Chart">
            <Stack width="95%">
                <Typography variant='h6' textAlign="center">
                    South Korea Population Pyramid - 2022
                </Typography>
                <BarChart 
                    height={500}
                    series={[
                        {
                            data: male.map((d) => -d),
                            label: 'Male',
                            type: 'bar',
                            valueFormatter: (d) => `${numberFormatter.format(-d)}`,
                            stack: 'stack',
                        },
                        {
                            data: female,
                            label: 'Female',
                            type: 'bar',
                            stack: 'stack',
                        },
                    ]}
                    yAxis={[
                        {
                            data: ageGroups,
                            width: 70,
                            disableLine: true,
                            disableTicks: true,
                        },
                    ]}
                    xAxis={[
                        {
                            valueFormatter: (d) => numberWithSuffixFormatter.format(Math.abs(d)),
                            disableLine: true,
                            disableTicks: true,
                        },
                    ]}
                    layout="horizontal"
                    margin={{ right: 70 }}
                />
                <Typography variant="caption">Source: KOSIS</Typography>
            </Stack>
        </MyContainer>
    )
}