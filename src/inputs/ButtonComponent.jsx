import * as React from 'react';
import { Stack, Box, Button, IconButton, Tooltip } from '@mui/material';
import {
    Delete as DeleteIcon,
    Send as SendIcon,
    Alarm as AlarmIcon,
    AddShoppingCart as AddShoppingCartIcon,
    ShoppingCart as ShoppingCartIcon,
    Fingerprint
} from '@mui/icons-material';

export const IconButtonWithBadge = () => {
    return (
        <div>IconButtonWithBadge</div>
    )
}

export const LoadingIconButton = () => {
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    });
    return (
        <Tooltip title="Cleck to see loading">
            <IconButton onClick={() => setLoading(true)} loading={loading}>
                <ShoppingCartIcon />
            </IconButton>
        </Tooltip>
    );
}

export const IconButtonColors = () => {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
            </IconButton>
        </Stack>
    )
}

export const IconButtonSizes = () => {
    return (
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </Stack>
    )
}

export const IconButtons = () => {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add on alarm">
                <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
        </Stack>
    )
}

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