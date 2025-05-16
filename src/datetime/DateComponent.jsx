import * as React from 'react'
import MyContainer from '../component/MyContainer';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import {
    Box,
    Alert
} from '@mui/material';

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

export const ResponsiveDatePickers = () => {
    return (
        <MyContainer title="Responsive Date Pickers">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'DatePicker',
                        'MobileDatePicker',
                        'DesktopDatePicker',
                        'StaticDatePicker',
                    ]}
                >
                    <DemoItem label="Desktop variant">
                        <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
                    </DemoItem>
                    <DemoItem label="Mobile variant">
                        <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
                    </DemoItem>
                    <DemoItem label="Responsive variant">
                        <DatePicker defaultValue={dayjs('2022-04-17')} />
                    </DemoItem>
                    <DemoItem label="Static variant">
                        <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const FormPropsDatePickers = () => {
    return (
        <MyContainer title="Form Props Date Picker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                    <DatePicker label="disabled" disabled />
                    <DatePicker label="readOnly" readOnly />
                    <DatePicker label="name" name="startDate" />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DatePickerViews = () => {
    return (
        <MyContainer title="Date Picker Views">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                    <DatePicker 
                        label={'"year", "month" and "day"'}
                        views={['year', 'month', 'day']}
                    />
                    <DatePicker label={'"day"'} views={['day']} />
                    <DatePicker label={'"month" and "year"'} views={['month', 'year']} />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DatePickerOpenTo = () => {
    return (
        <MyContainer title="Date Picker Open To">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DatePicker label={'"year"'} openTo="year" />
                    <DatePicker 
                        label={'"month"'}
                        openTo="month"
                        views={['year', 'month', 'day']}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </MyContainer>
    )
}

export const DatePickerYearsOrder = () => {
    const currentYear = dayjs();

    return (
        <MyContainer title="Date Picker Years Order">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                    label="Years in descending order"
                    maxDate={currentYear}
                    openTo="year"
                    views={['year', 'month']}
                    yearsOrder="desc"
                    sx={{ minWidth: 250 }}
                />
            </LocalizationProvider>
        </MyContainer>
    )
}

export const StaticDatePickerLandscape = () => {
    return (
        <MyContainer title="Static Date Picker Landscape">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker orientation="landscape" />
            </LocalizationProvider>
        </MyContainer>
    )
}

export const HelperText = () => {
    return (
        <MyContainer title="Helper Text">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                    label="Helper text example"
                    slotProps={{
                        textField: {
                            helperText: 'MM/DD/YYYY'
                        },
                    }}
                />
            </LocalizationProvider>
        </MyContainer>
    )
}

export const ClearableProp = () => {
    const [cleared, setCleared] = React.useState(false);

    React.useEffect(() => {
        if (cleared) {
            const timeout = setTimeout(() => {
                setCleared(false);
            }, 1500);

            return () => clearTimeout(timeout);
        }
        return () => {};
    }, [cleared]);

    return (
        <MyContainer title="Clearable Prop">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                >
                    <DemoItem label="DesktopDatePicker">
                        <DesktopDatePicker
                            sx={{ width: 260 }}
                            slotProps={{
                                field: { clearable: true, onClear: () => setCleared(true) },
                            }}
                        />

                        {cleared && (
                            <Alert
                                sx={{ position: 'absolute', bottom: 0, right: 0 }}
                                severity="success"
                            >
                                Field cleared!
                            </Alert>
                        )}
                    </DemoItem>
                </Box>
            </LocalizationProvider>
        </MyContainer>
    )
}