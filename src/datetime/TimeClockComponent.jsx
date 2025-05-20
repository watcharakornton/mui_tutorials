import * as React from 'react'
import MyContainer from '../component/MyContainer'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';

export const BasicTimeClock = () => {
    return (
        <MyContainer title="Basic Time Clock">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimeClock />
            </LocalizationProvider>
        </MyContainer>
    )
}

export const TimeClockValue = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

    return (
        <MyContainer title="Time CLock Value">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimeClock', 'TimeClock']}>
                    <DemoItem label="Uncontrolled clock">
                        <TimeClock defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                    <DemoItem label="Controlled clock">
                        <TimeClock 
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue)
                                console.log(newValue)
                            }}
                        />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const TimeClockFormProps = () => {
    return (
        <MyContainer title="Time Clock Form Props">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimeClock', 'TimeClock']}>
                    <DemoItem label="disabled">
                        <TimeClock defaultValue={dayjs('2022-04-17T15:30')} disabled />
                    </DemoItem>
                    <DemoItem label="readOnly">
                        <TimeClock defaultValue={dayjs('2022-04-17T15:30')} readOnly />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const TimeClockViews = () => {
    return (
        <MyContainer title="Time Clock Views">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimeClock', 'TimeClock', 'TimeClock']}>
                    <DemoItem label={'"hours", "minutes" and "seconds"'}>
                        <TimeClock views={['hours', 'minutes', 'seconds']} />
                    </DemoItem>
                    <DemoItem label={'"hours"'}>
                        <TimeClock views={['hours']} />
                    </DemoItem>
                    <DemoItem label={'"minutes" and "seconds"'}>
                        <TimeClock views={['minutes', 'seconds']} />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const TimeClockAmPm = () => {
    return (
        <MyContainer title="Time Clock AM PM">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimeClock', 'TimeClock', 'TimeClock']}>
                    <DemoItem label="Locale default behavior (enabled for enUS)">
                        <TimeClock defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                    <DemoItem label="AM PM enabled">
                        <TimeClock defaultValue={dayjs('2022-04-17T15:30')} ampm />
                    </DemoItem>
                    <DemoItem label="AM PM disabled">
                        <TimeClock defaultValue={dayjs('2022-04-17T15:30')} ampm={false} />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}


