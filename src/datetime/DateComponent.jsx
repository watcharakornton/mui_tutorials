import * as React from 'react'
import MyContainer from '../component/MyContainer';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const BasicDatePicker = () => {
    return (
        <MyContainer title="Basic Date Picker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Basic date picker" />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DatePickerValue = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    return (
        <MyContainer title="Date Picker Value">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DatePicker label="Uncontrolled price" defaultValue={dayjs('2022-04-17')} />
                    <DatePicker 
                        label="Controlled picker"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}