import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import {
    Stack,
} from '@mui/material';


// Two level pie chart
// ==================================================================
const data1 = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
    { label: 'Group D', value: 200 },
];

const data2 = [
    { label: 'A1', value: 100 },
    { label: 'A2', value: 300 },
    { label: 'B1', value: 100 },
    { label: 'B2', value: 80 },
    { label: 'B3', value: 40 },
    { label: 'B4', value: 30 },
    { label: 'B5', value: 50 },
    { label: 'C1', value: 100 },
    { label: 'C2', value: 200 },
    { label: 'D1', value: 150 },
    { label: 'D2', value: 50 },
];

export const TwoLevelPieChart = () => {
    return (
        <MyContainer title="Two level pie chart">
            <PieChart 
                series={[
                    {
                        innerRadius: 0,
                        outerRadius: 80,
                        data: data1,
                    },
                    {
                        innerRadius: 100,
                        outerRadius: 120,
                        data: data2,
                    },
                ]}
                height={300}
                hideLegend
            />
        </MyContainer>
    )
}
// ==================================================================

// Straight angle pie chart
// ==================================================================

const data = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
    { label: 'Group D', value: 200 },
    { label: 'Group E', value: 278 },
    { label: 'Group F', value: 189 },
];

export const StraightAnglePieChart = () => {
    return (
        <MyContainer title="Straight angle pie chart">
            <PieChart 
                series={[
                    {
                        startAngle: -90,
                        endAngle: 90,
                        data,
                    }
                ]}
                height={200}
                width={200}
            />
        </MyContainer>
    )
}

// ==================================================================


// Pie chart with customized label
// ==================================================================

const data3 = [
    { label: 'Group A', value: 400, color: '#0088FE' },
    { label: 'Group B', value: 300, color: '#00C49F' },
    { label: 'Group C', value: 300, color: '#FFBB28' },
    { label: 'Group D', value: 200, color: '#FF8042' },
];

const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
};
const TOTAL = data3.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
};

export const PieChartWithCustomizedLabel = () => {
    return (
        <MyContainer title="Pie chart with customized label">
            <PieChart 
                series={[
                    {
                        outerRadius: 80,
                        data: data3,
                        arcLabel: getArcLabel,
                    },
                ]}
                sx={{
                    [`$ .${pieArcLabelClasses.root}`]: {
                        fill: 'white',
                        fontSize: 14,
                    },
                }}
                {...sizing}
            />
        </MyContainer>
    )
}

// ==================================================================

// Pie chart with padding angle
export const PieChartWithPaddingAngle = () => {
    return (
        <MyContainer title="PieChartWithPaddingAngle">
            <Stack width="95%" direction="row" flexWrap="wrap">
                <PieChart 
                    series={[
                        {
                            paddingAngle: 5,
                            innerRadius: 60,
                            outerRadius: 80,
                            data: data1,
                        },
                    ]}
                    width={200}
                    height={200}
                    hideLegend
                />
                <PieChart 
                    series={[
                        {
                            startAngle: -90,
                            endAngle: 90,
                            paddingAngle: 5,
                            innerRadius: 60,
                            outerRadius: 80,
                            cy: '75%',
                            data: data1,
                        },
                    ]}
                    width={200}
                    height={150}
                    hideLegend
                />
            </Stack>
        </MyContainer>
    )
}

// ==================================================================


// Pie chart with center label
// ==================================================================
export const PieChartWithCenterLabel = () => {
    return (
        <MyContainer title="Pie chart with center label"></MyContainer>
    )
}
// ==================================================================