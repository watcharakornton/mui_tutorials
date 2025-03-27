import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Alert,
} from '@mui/material';
import {
    Check as CheckIcon,
} from '@mui/icons-material';

export const SimpleAlert = () => {
    return (
        <MyContainer title="Simple Alert">
            <Alert icon={<CheckIcon fontSize="inherit" />} severity='success'>
                Here is a gentle confirmation that your action was successful.
            </Alert>
        </MyContainer>
    )
}