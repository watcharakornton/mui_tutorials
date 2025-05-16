import * as React from 'react'
import MyContainer from '../component/MyContainer'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

export const BasicDateField = () => {
    return (
        <MyContainer title="Basic Date Field">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                    <DateField label="Basic date field" />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DateFieldValue = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    return (
        <MyContainer title="Date Field Value">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField', 'DateField']}>
                    <DateField label="Uncontrolled field" defaultValue={dayjs('2022-04-17')} />
                    <DateField
                        label="Controlled field"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const CustomDateFormat = () => {
    return (
        <MyContainer title="Custom Date Format">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField', 'DateField']}>
                    <DateField
                        label="Dash separator"
                        defaultValue={dayjs('2022-04-17')}
                        format="MM-DD-YYYY"
                    />
                    <DateField
                        label="Full letter month"
                        defaultValue={dayjs('2022-04-17')}
                        format="LL"
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}
