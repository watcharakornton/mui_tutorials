import * as React from 'react';
import MyContainer from '../component/MyContainer';
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
