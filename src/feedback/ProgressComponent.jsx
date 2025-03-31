import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { green } from '@mui/material/colors';
import PropTypes from 'prop-types';
import {
    Box,
    Stack,
    CircularProgress,
    LinearProgress,
    Button,
    Fab,
    Typography,
} from '@mui/material';
import {
    Check as CheckIcon,
    Save as SaveIcon,
} from '@mui/icons-material';

export const LinearWithValueLabel = () => {
    function LinearProgressWithLabel(props) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        );
    }

    LinearProgressWithLabel.propTypes = {
        value: PropTypes.number.isRequired,
    }

    const [progress, setProgress] = React.useState(10);
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <MyContainer title="Linear With Value Label">
            <Box sx={{ width: '95%' }}>
                <LinearProgressWithLabel value={progress} />
            </Box>
        </MyContainer>
    )
}

export const LinearBuffer = () => {
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => { });
    React.useEffect(() => {
        progressRef.current = () => {
            if (progress === 100) {
                setProgress(0);
                setBuffer(10);
            } else {
                setProgress(progress + 1);
                if (buffer < 100 && progress % 5 === 0) {
                    const newBuffer = buffer + 1 + Math.random() * 10;
                    setBuffer(newBuffer > 100 ? 100 : newBuffer);
                }
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <MyContainer title="Linear Buffer">
            <Box sx={{ width: '95%' }}>
                <LinearProgress variant='buffer' value={progress} valueBuffer={buffer} />
            </Box>
        </MyContainer>
    )
}

export const LinearDeterminate = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() + 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <MyContainer title="Linear Determinate">
            <Box sx={{ width: '95%' }}>
                <LinearProgress variant='determinate' value={progress} />
            </Box>
        </MyContainer>
    )
}

export const LinearColor = () => {
    return (
        <MyContainer title="Linear Color">
            <Stack sx={{ width: '95%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
            </Stack>
        </MyContainer>
    )
}

export const LinearIndeterminate = () => {
    return (
        <MyContainer title="Linear Indeterminate">
            <Box sx={{ width: '95%' }}>
                <LinearProgress />
            </Box>
        </MyContainer>
    )
}

export const CircularWithValueLabel = () => {
    function CircularProgressWithLabel(props) {
        return (
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant='determinate' {...props} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        );
    }

    CircularProgressWithLabel.propTypes = {
        value: PropTypes.number.isRequired,
    };

    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10))
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <MyContainer title="Circular With Value Label">
            <CircularProgressWithLabel value={progress} />
        </MyContainer>
    );
}

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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Fab
                        aria-label="save"
                        color="primary"
                        sx={buttonSx}
                        onClick={handleButtonClick}
                    >
                        {success ? <CheckIcon /> : <SaveIcon />}
                    </Fab>
                    {loading && (
                        <CircularProgress
                            size={68}
                            sx={{
                                color: green[500],
                                position: 'absolute',
                                top: -6,
                                left: -6,
                                zIndex: 1,
                            }}
                        />
                    )}
                </Box>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Button
                        variant='contained'
                        sx={buttonSx}
                        disabled={loading}
                        onClick={handleButtonClick}
                    >
                        Accept terms
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                color: green[500],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Box>
            </Box>
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