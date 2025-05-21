import * as React from 'react';
import MyContainer from '../component/MyContainer'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers';

export const BasicDateTimePicker = () => {
  return (
    <MyContainer title="Basic Date Time Picker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker label="Basic date time picker" />
            </DemoContainer>
        </LocalizationProvider>
    </MyContainer>
  )
}

export const DateTimePickerValue = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'))

    return (
        <MyContainer title="Date Time Picker Value">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                    <DateTimePicker 
                        label="Uncontrolled picker"
                        defaultValue={dayjs('2022-04-17T15:30')}
                    />
                    <DateTimePicker 
                        label="Controlled picker"
                        defaultValue={dayjs('2022-04-17T15:30')}
                        onAccept={(newValue) => {
                            setValue(newValue)
                            console.log(newValue?.format?.('YYYY-MM-DD HH:mm a') ?? newValue)
                        }}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const ResponsiveDateTimePickers = () => {
    return (
        <MyContainer title="Responsive Date Time Pickers">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'DateTimePicker',
                        'MobileDateTimePicker',
                        'DesktopDateTimePicker',
                        'StaticDateTimePicker',
                    ]}
                >
                    <DemoItem label="Desktop variant">
                        <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                    <DemoItem label="Mobile variant">
                        <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                    <DemoItem label="Responsive variant">
                        <DateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                    <DemoItem label="Static variant">
                        <StaticDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const FormPropsDateTimePickers = () => {
    return (
        <MyContainer title="Form Prop Date Time Pickers">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer 
                    components={['DateTimePicker', 'DateTimePicker', 'DateTimePicker']}
                >
                    <DateTimePicker label="disabled" disabled />
                    <DateTimePicker label="readOnly" readOnly />
                    <DateTimePicker label="name" name="startDateTime" />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DateTimePickerViews = () => {
    return (
        <MyContainer title="Date Time Picker Views">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={['DateTimePicker', 'DateTimePicker', 'DateTimePicker']}
                >
                    <DemoItem
                        label={'"year", "month", "day", "hours", "minutes" and "seconds"'}
                    >
                        <DateTimePicker 
                            views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
                        />
                    </DemoItem>
                    <DemoItem label={'"day", "hours"'}>
                        <DateTimePicker views={['day', 'hours']} />
                    </DemoItem>
                    <DemoItem label={'"year", "day", "hours", "minutes", "seconds"'}>
                        <DateTimePicker views={['year', 'day', 'hours', 'minutes', 'seconds']} />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DateTimePickerOpenTo = () => {
    return (
        <MyContainer title="Date Time Picker Open To">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker', 'MobileTimePicker']}>
                    <DateTimePicker label={'"year"'} openTo="year" />
                    <MobileTimePicker label={'"hours"'} openTo="hours" />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const StaticDateTimePickerLandscape = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

    return (
        <MyContainer title="Static Date Time Picker Landscape">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDateTimePicker 
                    orientatioe='landscape' 
                    onAccept={(newValue) => {
                        setValue(newValue)
                        console.log(newValue?.format?.('YYYY-MM-DD HH:mm a'))
                    }}
                />
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DateTimePickerViewRenderers = () => {
    return (
        <MyContainer title="Date Time Picker View Renderers">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                    <DateTimePicker 
                        label="With Time Clock"
                        viewRenderers={{
                            hours: renderTimeViewClock,
                            minutes: renderTimeViewClock,
                            seconds: renderTimeViewClock,
                        }}
                    />
                    <DateTimePicker 
                        label="Without view renderers"
                        viewRenderers={{
                            hours: null,
                            minutes: null,
                            seconds: null,
                        }}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}