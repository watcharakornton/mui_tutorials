import * as React from 'react'
import MyContainer from '../component/MyContainer'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

export const BasicTimePicker = () => {
    return (
        <MyContainer title="Basic Time Picker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                    <TimePicker label="Basic time picker" />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const TimePickerValue = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

    return (
        <MyContainer title="Time Picker Value">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                        label="Uncontrolled picker"
                        defaultValue={dayjs('2022-04-17T15:30')}
                    />
                    <TimePicker
                        label="Controlled picker"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const ResponsiveTimePickers = () => {
    return (
        <MyContainer title="Responsive Time Pickers">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'TimePicker',
                        'MobileTimePicker',
                        'DesktopTimePicker',
                        'StaticTimePicker',
                    ]}
                >
                    <DemoItem label="Desktop variant">
                        <DesktopTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                    <DemoItem label="Mobile variant">
                        <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                    <DemoItem label="Responsive variant">
                        <TimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                    <DemoItem label="Static variant">
                        <StaticTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const FormPropsTimePickers = () => {
    return (
        <MyContainer title="Form Props Time Pickers">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker', 'TimePicker', 'TimePicker']}>
                    <TimePicker label="disabled" disabled />
                    <TimePicker label="readOnly" readOnly />
                    <TimePicker label="name" name="startTime" />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const TimePickerViews = () => {
    return (
        <MyContainer title="Time Picker Views">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker', 'TimePicker', 'TimePicker']}>
                    <DemoItem label={'"hours", "minutes" and "seconds"'}>
                        <TimePicker views={['hours', 'minutes', 'seconds']} />
                    </DemoItem>
                    <DemoItem label={'"hours"'}>
                        <TimePicker views={['hours']} />
                    </DemoItem>
                    <DemoItem label={'"minutes" and "seconds"'}>
                        <TimePicker views={['minutes', 'seconds']} format="mm:ss" />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const TimePickerOpenTo = () => {
    return (
        <MyContainer title="Time Picker Open To">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['MobileTimePicker', 'MobileTimePicker']}>
                    <MobileTimePicker label={'"minutes"'} openTo="minutes" />
                    <MobileTimePicker
                        label={'"seconds"'}
                        openTo="seconds"
                        views={['minutes', 'seconds']}
                        format="mm:ss"
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const StaticTimePickerLandscape = () => {
    return (
        <MyContainer title="Static Time Picker Landscape">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticTimePicker orientation='landscape' />
            </LocalizationProvider>
        </MyContainer>
    )
}

export const TimePickerViewRenderers = () => {
    return (
        <MyContainer title="Time Picker View Renderers">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                    <TimePicker
                        label="With Time Clock"
                        viewRenderers={{
                            hours: renderTimeViewClock,
                            minutes: renderTimeViewClock,
                            seconds: renderTimeViewClock,
                        }}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}