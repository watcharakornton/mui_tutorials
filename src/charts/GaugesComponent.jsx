import * as React from 'react'
import MyContainer from '../component/MyContainer'
import {
    Stack,
} from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';

export const BasicGauges = () => {
  return (
    <MyContainer title="Basic gauges">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
            <Gauge width={100} height={100} value={60} />
            <Gauge width={100} height={100} value={60} startAngle={-90} endAngle={90} />
        </Stack>
    </MyContainer>
  )
}

export const GaugeValueRange = () => {
    return (
        <MyContainer title="Gauge value range">
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
                <Gauge width={100} height={100} value={50} />
                <Gauge width={100} height={100} value={50} valueMin={10} valueMax={60} />
            </Stack>
        </MyContainer>
    )
}