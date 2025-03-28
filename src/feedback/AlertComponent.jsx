import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Box,
    Alert,
    AlertTitle,
    IconButton,
    Collapse,
    Stack,
    Button,
} from '@mui/material';
import {
    Check as CheckIcon,
    CheckCircleOutline as CheckCircleOutlineIcon,
    Close as CloseIcon,
} from '@mui/icons-material';

export const TransitionAlerts = () => {
    const [open, setOpen] = React.useState(true);

    return (
        <MyContainer title="Transition Alerts">
            <Box sx={{ width: '95%' }}>
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Click the close icon to see the Collapse transition in action!
                    </Alert>
                </Collapse>
                <Button
                    disabled={open}
                    variant='outlined'
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Re-open
                </Button>
            </Box>
        </MyContainer>
    );
}

export const DescriptionAlerts = () => {
    return (
        <MyContainer title="Description Alerts">
            <Stack sx={{ width: '95%' }} spacing={2}>
                <Alert severity='success'>
                    <AlertTitle>Success</AlertTitle>
                    This is a success Alert with an encouraging title.
                </Alert>
                <Alert severity='info'>
                    <AlertTitle>Info</AlertTitle>
                    This is a success Alert with an informative title.
                </Alert>
                <Alert severity='warning'>
                    <AlertTitle>Warning</AlertTitle>
                    This is a success Alert with an cautious title.
                </Alert>
                <Alert severity='error'>
                    <AlertTitle>Error</AlertTitle>
                    This is a success Alert with an scary title.
                </Alert>
            </Stack>
        </MyContainer>
    )
}

export const IconAlerts = () => {
    return (
        <MyContainer title="Icon Alerts">
            <Stack sx={{ width: '95%' }} spacing={2}>
                <Alert icon={<CheckIcon fontSize='inherit' />} severity='success'>
                    This success Alert has a custom icon.
                </Alert>
                <Alert icon={false} severity='success'>
                    This success Alert has no icon.
                </Alert>
                <Alert
                    iconMapping={{
                        success: <CheckCircleOutlineIcon fontSize='inherit' />,
                    }}
                >
                    This success Alert uses `icomMapping` to override the default icon.
                </Alert>
            </Stack>
        </MyContainer>
    )
}

export const ActionAlerts = () => {
    return (
        <MyContainer title="Action Alerts">
            <Stack sx={{ width: '95%' }} spacing={2}>
                <Alert severity='warning' onClose={() => {}}>
                    This Alert displays the default close icon.
                </Alert>
                <Alert
                    severity='success'
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This Alert uses a Button component for its action.
                </Alert>
            </Stack>
        </MyContainer>
    )
}

export const ColorAlerts = () => {
    return (
        <MyContainer title="Color Alerts">
            <Alert severity='success' color="warning">
                This is a success Alert with warning colors.
            </Alert>
        </MyContainer>
    )
}

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