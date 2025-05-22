import * as React from 'react'
import MyContainer from '../component/MyContainer';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export const BasicDateRangePicker = () => {
    return (
        <MyContainer title="Basic Date Range Picker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangePicker']}>
                    <DateRangePicker />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}
