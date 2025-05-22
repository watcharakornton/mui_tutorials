import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../dataset/weather';

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
const chartSetting = {
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
                    {dataKey: 'london', label: 'London', valueFormatter },
                    {dataKey: 'paris', label: 'Paris', valueFormatter },
                    {dataKey: 'newYork', label: 'New York', valueFormatter },
                    {dataKey: 'seoul', label: 'Seoul', valueFormatter },
                ]}
                {...chartSetting}
            />
        </MyContainer>
    )
}
