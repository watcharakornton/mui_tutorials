import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import {
    Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';


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
const data4 = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
];

const size = {
    width: 200,
    height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();

    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    )
}

export const PieChartWithCenterLabel = () => {
    return (
        <MyContainer title="Pie chart with center label">
            <PieChart series={[{ data: data4, innerRadius: 80 }]} {...size}>
                <PieCenterLabel>Center label</PieCenterLabel>
            </PieChart>
        </MyContainer>
    )
}
// ==================================================================


// Pie chart with custom legend and tooltip
// ==================================================================
function HTMLDiamond({ className, color }) {
    return (
        <div
            className={className}
            style={{ transform: 'scale(0.6, 0.75) rotate(45deg)', background: color }}
        />
    );
}

function SVGStar({ className, color }) {
    return (
        <svg viewBox="-7.423 -7.423 14.846 14.846">
            <path
                className={className}
                d="M0,-7.528L1.69,-2.326L7.16,-2.326L2.735,0.889L4.425,6.09L0,2.875L-4.425,6.09L-2.735,0.889L-7.16,-2.326L-1.69,-2.326Z"
                fill={color}
            />
        </svg>
    )
}

export const PieChartWithCustomLegendAndTooltip = () => {
    return (
        <MyContainer title="Pie chart wit custom legend and tooltip">
            <PieChart 
                series={[
                    {
                        data: [
                            { value: 10, label: 'Circle', labelMarkType: 'circle' },
                            {
                                value: 15,
                                label: 'Diamond',
                                labelMarkType: HTMLDiamond,
                            },
                            { value: 20, label: 'Star', labelMarkType: SVGStar },
                        ],
                    },
                ]}
                width={200}
                height={200}
            />
        </MyContainer>
    )
}
// ==================================================================