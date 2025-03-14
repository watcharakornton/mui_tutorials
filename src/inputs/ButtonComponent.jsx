import * as React from 'react';
import { Stack, Box, Button } from '@mui/material';
import { Delete as DeleteIcon, Send as SendIcon } from '@mui/icons-material';

export const IconLabelButtons = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" startIcon={<SendIcon />}>
                Send
            </Button>
        </Stack>
    )
}

export const ButtonSizes = () => {
    return (
        <Box sx={{ '& button': { m: 1 } }}>
            <div>
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
            </div>
            <div>
                <Button variant="outlined" size="small">
                    Small
                </Button>
                <Button variant="outlined" size="medium">
                    Medium
                </Button>
                <Button variant="outlined" size="large">
                    Large
                </Button>
            </div>
            <div>
                <Button variant="contained" size="small">
                    Small
                </Button>
                <Button variant="contained" size="medium">
                    Medium
                </Button>
                <Button variant="contained" size="large">
                    Large
                </Button>
            </div>
        </Box>
    )
}

export const BasicButtons = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
    )
}

export const TextButtons = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
        </Stack>
    )
}

export const ColorButtons = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="outlined" color="error">Error</Button>
        </Stack>
    )
}