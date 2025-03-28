import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Alert,
    Stack,
} from '@mui/material';
import {
    Check as CheckIcon,
} from '@mui/icons-material';

export const OutlinedAlerts = () => {
    return (
        <MyContainer title="Outlined Alerts">
            <Stack sx={{ width: '95%' }} spacing={2}>
                <Alert variant='outlined' severity='success'>
                    This is a filled success Alert.
                </Alert>
                <Alert variant='outlined' severity='info'>
                    This is a filled info Alert.
                </Alert>
                <Alert variant='outlined' severity='warning'>
                    This is a filled warning Alert.
                </Alert>
                <Alert variant='outlined' severity='error'>
                    This is a filled error Alert.
                </Alert>
            </Stack>

        </MyContainer>
    )
}

export const FilledAlerts = () => {
    return (
        <MyContainer title="Filled Alerts">
            <Stack sx={{ width: '95%' }} spacing={2}>
                <Alert variant='filled' severity='success'>
                    This is a filled success Alert.
                </Alert>
                <Alert variant='filled' severity='info'>
                    This is a filled info Alert.
                </Alert>
                <Alert variant='filled' severity='warning'>
                    This is a filled warning Alert.
                </Alert>
                <Alert variant='filled' severity='error'>
                    This is a filled error Alert.
                </Alert>
            </Stack>
        </MyContainer>
    )
}

export const BasicAlerts = () => {
    return (
        <MyContainer title="Basic Alerts">
            <Stack sx={{ width: '95%' }} spacing={2}>
                <Alert severity='success'>This is a success Alert.</Alert>
                <Alert severity='info'>This is a info Alert.</Alert>
                <Alert severity='warning'>This is a warning Alert.</Alert>
                <Alert severity='error'>This is a error Alert.</Alert>
            </Stack>

        </MyContainer>
    )
}

export const SimpleAlert = () => {
    return (
        <MyContainer title="Simple Alert">
            <Alert icon={<CheckIcon fontSize="inherit" />} severity='success'>
                Here is a gentle confirmation that your action was successful.
            </Alert>
        </MyContainer>
    )
}