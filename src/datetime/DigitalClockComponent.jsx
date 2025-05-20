import * as React from 'react'
import MyContainer from '../component/MyContainer'
import dayjs from 'dayjs';
import { Typography } from '@mui/material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';

export const DigitalClockBasic = () => {
    return (
        <MyContainer title="Digital Clock Basic">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DigitalClock', 'MultiSectionDigitalClock']}>
                    <DemoItem label="Digital clock">
                        <DigitalClock />
                    </DemoItem>
                    <DemoItem label="Multi section digital clock">
                        <MultiSectionDigitalClock />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DigitalClockValue = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

    return (
        <MyContainer title="Digital Clock Value">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'DigitalClock',
                        'DigitalClock',
                        'MultiSectionDigitalClock',
                        'MultiSectionDigitalClock',
                    ]}
                >
                    <DemoContainer components={['DigitalClock', 'DigitalClock']}>
                        <DemoItem label="Uncontrolled digital clock">
                            <DigitalClock defaultValue={dayjs('2022-04-17T15:30')} />
                        </DemoItem>
                        <DemoItem label="Controlled digital clock">
                            <DigitalClock
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue)
                                    console.log(newValue?.format?.('hh:mm a') ?? newValue)
                                }}
                            />
                        </DemoItem>
                    </DemoContainer>
                    <DemoContainer
                        components={['MultiSectionDigitalClock', 'MultiSectionDigitalClock']}
                    >
                        <DemoItem label="Uncontrolled multi section digital clock">
                            <MultiSectionDigitalClock defaultValue={dayjs('2022-04-17T15:30')} />
                        </DemoItem>
                        <DemoItem label="Controlled multi section digital clock">
                            <MultiSectionDigitalClock
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue)
                                    console.log(newValue?.format?.('hh:mm a') ?? newValue)
                                }}
                            />
                        </DemoItem>
                    </DemoContainer>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DigitalClockFormProps = () => {
    return (
        <MyContainer title="Digital Clock Form Props">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'DigitalClock',
                        'DigitalClock',
                        'MultiSectionDigitalClock',
                        'MultiSectionDigitalClock',
                    ]}
                >
                    <DemoContainer components={['DigitalClock', 'DigitalClock']}>
                        <DemoItem label="Digital clock disabled">
                            <DigitalClock defaultValue={dayjs('2022-04-17T15:30')} disabled />
                        </DemoItem>
                        <DemoItem label="Digital clock readOnly">
                            <DigitalClock defaultValue={dayjs('2022-04-17T15:30')} readOnly />
                        </DemoItem>
                    </DemoContainer>
                    <DemoContainer
                        components={['MultiSectionDigitalClock', 'MultiSectionDigitalClock']}
                    >
                        <DemoItem label="Multi section digital clock disabled">
                            <MultiSectionDigitalClock 
                                defaultValue={dayjs('2022-04-17T15:30')}
                                disabled
                            />
                        </DemoItem>
                        <DemoItem label="Multi section digital clock readOnly">
                            <MultiSectionDigitalClock 
                                defaultValue={dayjs('2022-04-17T15:30')}
                                readOnly
                            />
                        </DemoItem>
                    </DemoContainer>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DigitalClockViews = () => {
    return (
        <MyContainer title="Digital Clock Views">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'MultiSectionDigitalClock',
                        'MultiSectionDigitalClock',
                        'MultiSectionDigitalClock',
                    ]}
                >
                    <DemoItem label={'"hours", "minutes" and "seconds"'}>
                        <MultiSectionDigitalClock views={['hours', 'minutes', 'seconds']} />
                    </DemoItem>
                    <DemoItem label={'"hours"'}>
                        <MultiSectionDigitalClock views={['hours']} />
                    </DemoItem>
                    <DemoItem label={'"minutes" and "seconds"'}>
                        <MultiSectionDigitalClock views={['minutes', 'seconds']} />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DigitalClockAmPm = () => {
    return (
        <MyContainer title="Digital Clock AM PM">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'DigitalClock',
                        'DigitalClock',
                        'DigitalClock',
                        'MultiSectionDigitalClock',
                        'MultiSectionDigitalClock',
                        'MultiSectionDigitalClock',
                    ]}
                >
                    <DemoItem>
                        <Typography variant='body2'>
                            Locale default behavior (enabled for enUS)
                        </Typography>
                        <DemoContainer components={['DigitalClock', 'MultiSectionDigitalClock']}>
                            <DemoItem>
                                <DigitalClock defaultValue={dayjs('2022-04-17T15:30')} />
                            </DemoItem>
                            <DemoItem>
                                <MultiSectionDigitalClock defaultValue={dayjs('2022-04-17T15:30')} />
                            </DemoItem>
                        </DemoContainer>
                    </DemoItem>
                    <DemoItem>
                        <Typography variant='body2'>AM PM enabled</Typography>
                        <DemoContainer components={['DigitalClock', 'MultiSectionDigitalClock']}>
                            <DemoItem>
                                <DigitalClock defaultValue={dayjs('2022-04-17T15:30')} ampm />
                            </DemoItem>
                            <DemoItem>
                                <MultiSectionDigitalClock 
                                    defaultValue={dayjs('2022-04-17T15:30')}
                                    ampm
                                />
                            </DemoItem>
                        </DemoContainer>
                    </DemoItem>
                    <DemoItem>
                        <Typography variant='body2'>AM PM disabled</Typography>
                        <DemoContainer components={['DigitalClock', 'MultiSectionDigitalClock']}>
                            <DemoItem>
                                <DigitalClock defaultValue={dayjs('2022-04-17T15:30')} ampm={false} />
                            </DemoItem>
                            <DemoItem>
                                <MultiSectionDigitalClock 
                                    defaultValue={dayjs('2022-04-17T15:30')}
                                    ampm={false}
                                />
                            </DemoItem>
                        </DemoContainer>
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DigitalClockTimeStep = () => {
    return (
        <MyContainer title="Digital Clock Time Step">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DigitalClock', 'MultiSectionDigitalClock']}>
                    <DemoItem label="Digital clock">
                        <DigitalClock timeStep={30} />
                    </DemoItem>
                    <DemoItem label="Multi section digital clock">
                        <MultiSectionDigitalClock 
                            timeSteps={{ hours: 2, minutes: 15, seconds: 10 }}
                            views={['hours', 'minutes', 'seconds']}
                        />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

const shouldDisableTime = (date, view) => {
    const hour = date.hour();
    if (view === 'hours') {
        return hour < 9 || hour > 13;
    }
    if (view === 'minutes') {
        const minute = date.minute();
        return minute > 20 && hour === 13;
    }
    return false;
}

export const DigitalClockSkipDisabled = () => {
    return (
        <MyContainer title="Digital Clock Skip Disabled">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DigitalClock', 'MultiSectionDigitalClock']}>
                    <DemoItem label="Digital clock">
                        <DigitalClock 
                            skipDisabled
                            minTime={dayjs('2022-04-17T15:30')}
                            timeStep={60}
                        />
                    </DemoItem>
                    <DemoItem label="Multi section digital clock">
                        <MultiSectionDigitalClock 
                            skipDisabled
                            shouldDisableTime={shouldDisableTime}
                            ampm={false}
                        />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}