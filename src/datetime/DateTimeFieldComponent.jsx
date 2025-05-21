import * as React from 'react'
import MyContainer from '../component/MyContainer'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';

export const BasicDateTimeField = () => {
    return (
        <MyContainer title="Basic Date Time Field">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimeField']}>
                    <DateTimeField label="Basic date time field" />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DateTimeFieldValue = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
    const [tempValue, setTempValue] = React.useState(value);

    return (
        <MyContainer title="Date Time Field Value">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimeField', 'DateTimeField']}>
                    <DateTimeField
                        label="Uncontrolled field"
                        defaultValue={dayjs('2022-04-17T15:30')}
                    />
                    <DateTimeField
                        label="Controlled field"
                        value={tempValue}
                        onChange={(newValue) => setTempValue(newValue)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setValue(tempValue)
                                console.log(tempValue?.format?.('MM/DD/YYYY hh:mm a') ?? tempValue)
                            }
                        }}  
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const CustomDateTimeFormat = () => {
    return (
        <MyContainer title="Custom Date Time Format">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={['DateTimeField', 'DateTimeField', 'DateTimeField']}
                >
                    <DateTimeField 
                        label="Format with merdidiem"
                        defaultValue={dayjs('2022-04-17T15:30')}
                        format="L hh:mm a"
                    />
                    <DateTimeField 
                        label="Format without merdidiem"
                        defaultValue={dayjs('2022-04-17T15:30')}
                        format="L HH:mm"
                    />
                    <DateTimeField 
                        label="Localized format with full letter month"
                        defaultValue={dayjs('2022-04-17T15:30')}
                        format="LLL"
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}