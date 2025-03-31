import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { green } from '@mui/material/colors';
import {
    Box,
    Stack,
    CircularProgress,
    Button,
    Fab,
} from '@mui/material';
import {
    Check as CheckIcon,
    Save as SaveIcon,
} from '@mui/icons-material';

export const CircularIntegration = () => {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef(undefined);

    const buttonSx = {
        ...(success && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };

    return (
        <MyContainer title="Circular Integration">

        </MyContainer>
    )
}

export const CircularDeterminate = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <MyContainer title="Circular Determinate">
            <Stack spacing={2} direction="row">
                <CircularProgress variant="determinate" value={25} />
                <CircularProgress variant="determinate" value={50} />
                <CircularProgress variant="determinate" value={75} />
                <CircularProgress variant="determinate" value={100} />
                <CircularProgress variant="determinate" value={progress} />
            </Stack>
        </MyContainer>
    );
}

export const CircularSize = () => {
    return (
        <MyContainer title="Circular Size">
            <Stack spacing={2} direction="row" alignItems="center">
                <CircularProgress size="30px" />
                <CircularProgress size={40} />
                <CircularProgress size="3rem" />
            </Stack>
        </MyContainer>
    )
}

export const CircularColor = () => {
    return (
        <MyContainer title="Circular Color">
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Stack>
        </MyContainer>
    )
}

export const CircularIndeterminate = () => {
    return (
        <MyContainer title="Circular Indeterminate">
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </MyContainer>
    )
}