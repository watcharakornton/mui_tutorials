import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ChartsReferenceLine } from '@mui/x-charts/ChartsReferenceLine';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsClipPath } from '@mui/x-charts/ChartsClipPath';
import {
    LineChart,
    LinePlot,
    MarkPlot,
    lineElementClasses,
    markElementClasses,
    AnimatedLine,
} from '@mui/x-charts/LineChart';
import {
    useChartId,
    useDrawingArea,
    useLineSeries,
    useXAxis,
    useXScale,
    useYScale,
} from '@mui/x-charts/hooks';
import * as d3shape from '@mui/x-charts-vendor/d3-shape';
import {
    Stack,
    Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const margin = { right: 24 };
const uData = [4000, 3000, 2000, 2700, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];
const data = [4000, 3000, 2000, null, 1890, 2390, 3490];
const xData = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

export const SimpleLineChart = () => {
    return (
        <MyContainer title="Simple Line Chart">
            <LineChart
                height={300}
                series={[
                    { data: pData, label: 'pv' },
                    { data: uData, label: 'uv' },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                yAxis={[{ width: 50 }]}
                margin={margin}
            />
        </MyContainer>
    );
}

export const TinyLineChart = () => {
    return (
        <MyContainer title="Tiny Line Chart">
            <ChartContainer
                width={500}
                height={300}
                series={[{ type: 'line', data: pData }]}
                xAxis={[{ scaleType: 'point', data: xLabels, position: 'none' }]}
                yAxis={[{ position: 'none' }]}
                sx={{
                    [`& .${lineElementClasses.root}`]: {
                        stroke: '#8884d8',
                        strokeWidth: 2,
                    },
                    [`& .${markElementClasses.root}`]: {
                        stroke: '#8884d8',
                        r: 4,
                        fill: '#fff',
                        strokeWidth: 2,
                    },
                }}
                disableAxisListener
            >
                <LinePlot />
                <MarkPlot />
            </ChartContainer>
        </MyContainer>
    )
}

export const DashedLineChart = () => {
    return (
        <MyContainer title="Dashed Line Chart">
            <LineChart
                height={300}
                series={[
                    { data: pData, label: 'pv', id: 'pvId' },
                    { data: uData, label: 'uv', id: 'uvId' },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                yAxis={[{ width: 50 }]}
                sx={{
                    [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
                        strokeWidth: 1,
                    },
                    '.MuiLineElement-series-pvId': {
                        strokeDasharray: '5 5',
                    },
                    '.MuiLineElement-series-uvId': {
                        strokeDasharray: '3 4 5 2',
                    },
                    [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
                        fill: '#fff',
                    },
                    [`& .${markElementClasses.highlighted}`]: {
                        stroke: 'none',
                    },
                }}
                margin={margin}
            />
        </MyContainer>
    )
}

export const BiaxialLineChart = () => {
    return (
        <MyContainer title="Biaxial Line Chart">
            <LineChart
                height={300}
                series={[
                    { data: pData, label: 'pv', yAxisId: 'leftAxisId' },
                    { data: uData, label: 'uv', yAxisId: 'rightAxisId' },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                yAxis={[
                    { id: 'leftAxisId', width: 50 },
                    { id: 'rightAxisId', position: 'right' },
                ]}
            />
        </MyContainer>
    )
}

export const LineChartWithReferenceLines = () => {
    return (
        <MyContainer title="Line Chart with References Lines">
            <ChartContainer
                width={500}
                height={300}
                series={[
                    { data: pData, label: 'pv', type: 'line' },
                    { data: uData, label: 'uv', type: 'line' },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                yAxis={[{ width: 50 }]}
                margin={margin}
            >
                <LinePlot />
                <MarkPlot />
                <ChartsReferenceLine
                    x="Page C"
                    label="Max PV PAGE"
                    lineStyle={{ stroke: 'red' }}
                />
                <ChartsReferenceLine y={9800} label="Max" lineStyle={{ stroke: 'red' }} />
                <ChartsXAxis />
                <ChartsYAxis />
            </ChartContainer>
        </MyContainer>
    )
}

export const LineChartConnectNulls = () => {
    return (
        <MyContainer title="Line Chart Connect Nulls">
            <Stack sx={{ width: '95%' }}>
                <LineChart
                    xAxis={[{ data: xData, scaleType: 'point' }]}
                    series={[{ data }]}
                    height={200}
                    margin={margin}
                />
                <LineChart
                    xAxis={[{ data: xData, scaleType: 'point' }]}
                    series={[{ data, connectNulls: true }]}
                    height={200}
                    margin={margin}
                />
            </Stack>
        </MyContainer>
    )
}

export const LiveLineChartNoSnap = () => {
    const dateFormatter = Intl.DateTimeFormat(undefined, {
        month: '2-digit',
        day: '2-digit',
    });
    const oneDay = 24 * 60 * 60 * 1000; // in milliseconds

    const length = 50;
    const initialFirstData = Array.from({ length }).map(
        (_, __, array) => (array.at(-1) ?? 0) + randBetween(-100, 500),
    );
    const initialSecondData = Array.from({ length }).map(
        (_, __, array) => (array.at(-1) ?? 0) + randBetween(-500, 100),
    );

    const [running, setRunning] = React.useState(false);
    const [date, setDate] = React.useState(new Date(2000, 0, 0));
    const [firstData, setFirstData] = React.useState(initialFirstData);
    const [secondData, setSecondData] = React.useState(initialSecondData);

    React.useEffect(() => {
        if (!running) {
            return undefined
        }
        const intervalId = setInterval(() => {
            setDate((prev) => new Date(prev.getTime() + oneDay));
            setFirstData((prev) => [
                ...prev.slice(1),
                prev.at(-1) + randBetween(-500, 500),
            ]);
            setSecondData((prev) => [
                ...prev.slice(1),
                prev.at(-1) + randBetween(-500, 500),
            ])
        }, 100);

        return () => {
            clearInterval(intervalId)
        };
    }, [running]);

    function randBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <MyContainer title="Live Line Chart No Snap">
            <div style={{ width: '95%' }}>
                <LineChart
                    height={300}
                    skipAnimation
                    series={[
                        { data: secondData, showMark: false },
                        { data: firstData, showMark: false },
                    ]}
                    xAxis={[
                        {
                            scaleType: 'point',
                            data: Array.from({ length }).map(
                                (_, i) => new Date(date.getTime() + i * oneDay),
                            ),
                            valueFormatter: (value) => dateFormatter.format(value),
                        },
                    ]}
                    yAxis={[{ width: 50 }]}
                    margin={{ right: 24 }}
                />
                <Button size="small" variant='contained' onClick={() => setRunning((p) => !p)}>
                    {running ? 'stop' : 'start'}
                </Button>
                <Button
                    size="small"
                    variant='outlined'
                    sx={{ marginLeft: 1.5 }}
                    onClick={() => {
                        setFirstData(initialFirstData);
                        setSecondData(initialSecondData);
                    }}
                >
                    reset
                </Button>
            </div>
        </MyContainer>
    );
}


// Line with uncertainty area
function CustomAnimatedLine(props) {
    const { limit, sxBefore, sxAfter, ...other } = props;
    const { top, bottom, height, left, width } = useDrawingArea();
    const scale = useXScale();
    const chartId = useChartId();

    if (limit === undefined) {
        return <AnimatedLine {...other} />;
    }

    const limitPosition = scale(limit); // Convert value to x coordinate.

    if (limitPosition === undefined) {
        return <AnimatedLine {...other} />;
    }

    const clipIdLeft = `${chartId}-${props.ownerState.id}-line-limit-${limit}-1`;
    const clipIdRight = `${chartId}-${props.ownerState.id}-line-limit-${limit}-2`;
    return (
        <React.Fragment>
            {/* Clip to show the line before the limit */}
            <clipPath id={clipIdLeft}>
                <rect
                    x={left}
                    y={0}
                    width={limitPosition - left}
                    height={top + height + bottom}
                />
            </clipPath>
            {/* Clip to show the line after the limit */}
            <clipPath id={clipIdRight}>
                <rect
                    x={limitPosition}
                    y={0}
                    width={left + width - limitPosition}
                    height={top + height + bottom}
                ></rect>
            </clipPath>
            <g clipPath={`url(#${clipIdLeft})`} className='line-before'>
                <AnimatedLine {...other} />
            </g>
            <g clipPath={`url(#${clipIdRight})`} className='line-after'>
                <AnimatedLine {...other} />
            </g>
        </React.Fragment>
    )
}

function ForecastArea({ limit, forecast }) {
    const lineSeries = useLineSeries();
    const xAxis = useXAxis();
    const xScale = useXScale();
    const yScale = useYScale();

    const xAxisData = xAxis.data?.slice(limit) ?? [];

    if (!yScale) {
        return null;
    }

    return (
        <React.Fragment>
            {lineSeries.map((series) => {
                const data = xAxisData.map((v, i) => ({
                    x: v,
                    y0: forecast[i].y0,
                    y1: forecast[i].y1,
                }));

                const path = d3shape
                    .area()
                    .x((d) => xScale(d.x))
                    .y0((d) => yScale(d.y0))
                    .y1((d) => yScale(d.y1)(data));

                return <path key={`forecast-area-${series.id}`} d={path} fill="#0000ff44" />;
            })}
        </React.Fragment>
    )
}

function ShadedBackground({ limit }) {
    const { top, bottom, height, left, width } = useDrawingArea();
    const scale = useXScale();
    const limitPosition = scale(limit);
    const theme = useTheme();
    const fill =
        theme.palette.mode === 'dark'
            ? theme.palette.grey[900]
            : theme.palette.grey[400]

    return (
        <rect
            x={limitPosition}
            y={0}
            width={left + width - limitPosition}
            height={top + height + bottom}
            fill={fill}
            opacity={0.4}
        />
    );
}

export const LineWithUncertaintyArea = () => {
    const id = React.useId();
    const clipPathId = `${id}-clip-path`;

    return (
        <MyContainer title="Line With Uncertainty Area">
            <ChartContainer
                series={[
                    {
                        type: 'line',
                        data: [1, 2, 3, 4, 1, 2, 3, 4, 5],
                        valueFormatter: (v, i) => `${v}${i.dataIndex > 5 ? ' (estimated)' : ''}`,
                    },
                ]}
                xAxis={[{ data: [0, 1, 2, 3, 4, 5, 6, 7, 8] }]}
                height={200}
                sx={{ '& .line-after path': { strokeDasharray: '10 5' } }}
            >
                <ChartsXAxis />
                <ChartsYAxis />
                <g clipPath={`url(#${clipPathId})`}>
                    <ShadedBackground limit={5} />
                    <LinePlot 
                        slots={{ line: CustomAnimatedLine }}
                        slotProps={{ line: { limit: 5 } }}
                    />
                    <ForecastArea 
                        limit={5}
                        forecast={[
                            { y0: 2, y1: 2 },
                            { y0: 2.3, y1: 4 },
                            { y0: 3, y1: 5 },
                            { y0: 4.4, y1: 5.8 },
                        ]}
                    />
                    <MarkPlot />
                </g>
                <ChartsTooltip />
                <ChartsClipPath id={clipPathId} />
            </ChartContainer>
        </MyContainer>
    )
}

// Custom line marks
export const CustomLineMarks = () => {
    return (
        <MyContainer title="Custom line marks">
            <LineChart 
                height={300}
                series={[
                    {
                        data: pData,
                        label: 'pv',
                        shape: 'cross',
                        showMark: ({ index }) => index % 2 === 0,
                    },
                    {
                        data: uData,
                        label: 'uv',
                        shape: 'diamond',
                        showMark: ({ index }) => index % 2 === 0,
                    },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                yAxis={[{ width: 50 }]}
                margin={margin}
            />
        </MyContainer>
    )
}