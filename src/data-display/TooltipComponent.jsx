import * as React from 'react';
import MyContainer from "../component/MyContainer";
import {
    Tooltip,
    IconButton
} from '@mui/material';
import {
    Delete as DeleteIcon,
} from '@mui/icons-material';

export const BasicTooltip = () => {
    return (
        <MyContainer title="Basic Tooltip">
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </MyContainer>
    )
}