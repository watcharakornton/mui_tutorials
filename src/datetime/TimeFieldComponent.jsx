import * as React from 'react';
import MyContainer from '../component/MyContainer';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';

export const BasicTimeField = () => {
    return (
        <MyContainer title="Basic Time Field">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimeField']}>
                    <TimeField label="Basic time field" />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const TimeFieldValue = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'))

    return (
        <MyContainer title="Time Field Value">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimeField', 'TimeField']}>
                    <TimeField
                        label="Uncontrolled field"
                        defaultValue={dayjs('2022-04-17T15:30')}
                    />
                    <TimeField
                        label="Controlled field"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue)
                            console.log(newValue)
                        }}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const CustomTimeFormat = () => {
    return (
        <MyContainer title="Custom Time Format">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimeField', 'TimeField', 'TimeField']}>
                    <TimeField 
                        label="Format with meridiem"
                        defaultValue={dayjs('2022-04-17T15:30')}
                        format="hh:mm a"
                    />
                    <TimeField 
                        label="Format without meridiem"
                        defaultValue={dayjs('2022-04-17T15:30')}
                        format="HH:mm"
                    />
                    <TimeField 
                        label="Format with seconds"
                        defaultValue={dayjs('2022-04-17T15:30')}
                        format="HH:mm:ss"
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}