import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

// Simple scatter chart
// ==================================================================
const data = [
    { x: 100, y: 200, id: 1 },
    { x: 120, y: 100, id: 2 },
    { x: 170, y: 300, id: 3 },
    { x: 140, y: 250, id: 4 },
    { x: 150, y: 400, id: 5 },
    { x: 110, y: 280, id: 6 },
];

export const SimpleScatterChart = () => {
    return (
        <MyContainer title="Simple scatter chart">
            <ScatterChart
                height={300}
                series={[{ data, label: 'pv', id: 'pvId' }]}
                xAxis={[{ min: 0 }]}
            />
        </MyContainer>
    )
}
// ==================================================================

// Multiple Y axes scatter chart
// ==================================================================
const data1 = [
    { x: 100, y: 200, id: 1 },
    { x: 120, y: 100, id: 2 },
    { x: 170, y: 300, id: 3 },
    { x: 140, y: 250, id: 4 },
    { x: 150, y: 400, id: 5 },
    { x: 110, y: 280, id: 6 },
];

const data2 = [
    { x: 300, y: 300, id: 1 },
    { x: 400, y: 500, id: 2 },
    { x: 200, y: 700, id: 3 },
    { x: 340, y: 350, id: 4 },
    { x: 560, y: 500, id: 5 },
    { x: 230, y: 780, id: 6 },
    { x: 500, y: 400, id: 7 },
    { x: 300, y: 500, id: 8 },
    { x: 240, y: 300, id: 9 },
    { x: 320, y: 550, id: 10 },
    { x: 500, y: 400, id: 11 },
    { x: 420, y: 280, id: 12 },
]

export const MultipleYAxesScatterChart = () => {
    return (
        <MyContainer title="Multiple YAxes scatter chart">
            <ScatterChart
                height={300}
                series={[
                    {
                        data: data1,
                        yAxisId: 'leftAxis',
                        valueFormatter: (value) => value && `${value.x}cm, ${value.y}kg`,
                    },
                    {
                        data: data2,
                        yAxisId: 'rightAxis',
                        valueFormatter: (value) => value && `${value.x}cm, ${value.y}kg`,
                    },
                ]}
                xAxis={[{ min: 0 }]}
                yAxis={[
                    { id: 'leftAxis', min: 0 },
                    { id: 'rightAxis', min: 0, position: 'right' },
                ]}
                sx={{
                    [`& .${axisClasses.left}`]: {
                        line: { stroke: '#8884d8' },
                        text: { fill: '#8884d8' },
                    },
                    [`& .${axisClasses.right}`]: {
                        line: { stroke: '#88ca9d' },
                        text: { fill: '#88ca9d' },
                    },
                }}
            />
        </MyContainer>
    )
}
// ==================================================================