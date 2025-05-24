import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { 
    LineChart,
    LinePlot,
    MarkPlot,
    lineElementClasses,
    markElementClasses,
 } from '@mui/x-charts/LineChart';

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
