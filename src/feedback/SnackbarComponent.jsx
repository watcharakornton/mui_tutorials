import * as React from 'react'
import MyContainer from '../component/MyContainer'
import {
    Grid,
    Box,
    Stack,
    Button,
    Snackbar,
    SnackbarContent,
    IconButton,
    Fade,
    Slide,
    Grow,
    Alert,
} from '@mui/material';
import {
    useNotifications,
    NotificationsProvider,
} from '@toolpad/core/useNotifications';
import {
    SnackbarProvider,
    useSnackbar,
} from 'notistack';
import {
    Close as CloseIcon
} from '@mui/icons-material';

export const ToolpadNotificationNoSnap = () => {
    function NotifyButton() {
        const notifications = useNotifications();
        const [online, setOnline] = React.useState(true);
        const prevOnline = React.useRef(online);
        React.useEffect(() => {
            if (prevOnline.current === online) {
                return () => { };
            }
            prevOnline.current = online;

            const key = online
                ? notifications.show('You are now online', {
                    severity: 'success',
                    autoHideDuration: 3000,
                })
                : notifications.show('You are now offline', {
                    severity: 'error',
                });

            return () => {
                notifications.close(key);
            };
        }, [notifications, online]);

        return <Button onClick={() => setOnline((prev) => !prev)}>Notify</Button>;
    }

    return (
        <MyContainer title="Toolpad Notification No Snap">
            <NotificationsProvider>
                <NotifyButton />
            </NotificationsProvider>
        </MyContainer>
    )
}

export const IntegrationNotistack = () => {
    function MyApp() {
        const { enqueueSnackbar } = useSnackbar();

        const handleClick = () => {
            enqueueSnackbar('I love snacks.');
        };

        const handleClickVariant = (variant) => () => {
            enqueueSnackbar('This is a success message!', { variant });
        };

        return (
            <React.Fragment>
                <Button onClick={handleClick}>Show snackbar</Button>
                <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
            </React.Fragment>
        );
    }

    return (
        <MyContainer title="Integration Notistack">
            <SnackbarProvider maxSnack={3}>
                <MyApp />
            </SnackbarProvider>
        </MyContainer>
    )
}

export const ConsecutiveSnackbars = () => {
    const [snackPack, setSnackPack] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState(undefined);

    React.useEffect(() => {
        if (snackPack.length && !messageInfo) {
            setMessageInfo({ ...snackPack[0] });
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            setOpen(false);
        }
    }, [snackPack, messageInfo, open]);

    const handleClick = (message) => () => {
        setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleExited = () => {
        setMessageInfo(undefined);
    };

    return (
        <MyContainer title="Consecutive Snackbars">
            <div>
                <Button onClick={handleClick('Message A')}>Show message A</Button>
                <Button onClick={handleClick('Message B')}>Show message B</Button>
                <Snackbar
                    key={messageInfo ? messageInfo.key : undefined}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    slotProps={{ transition: { onExited: handleExited } }}
                    message={messageInfo ? messageInfo.message : undefined}
                    action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={handleClose}>
                                UNDO
                            </Button>
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                sx={{ p: 0.5 }}
                                onClick={handleClose}
                            >
                                <CloseIcon />
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </div>
        </MyContainer>
    )
}

export const CustomizedSnackbars = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <MyContainer title="Customized Snackbars">
            <div>
                <Button onClick={handleClick}>Open Snackbars</Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity='success'
                        variant='filled'
                        sx={{ width: '100%' }}
                    >
                        This is a success Alert inside a Snackbar!
                    </Alert>
                </Snackbar>
            </div>
        </MyContainer>
    );
}

export const TransitionsSnackbar = () => {
    function SlideTransition(props) {
        return <Slide {...props} direction="up" />;
    }

    function GrowTransition(props) {
        return <Grow {...props} />;
    }

    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
    });

    const handleClick = (Transition) => () => {
        setState({
            open: true,
            Transition,
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    return (
        <MyContainer title="Transitions Snackbar">
            <div>
                <Button onClick={handleClick(GrowTransition)}>Grow Transitions</Button>
                <Button onClick={handleClick(Fade)}>Fade Transition</Button>
                <Button onClick={handleClick(SlideTransition)}>Slide Transitions</Button>
                <Snackbar
                    open={state.open}
                    onClose={handleClose}
                    slots={{ transition: state.Transition }}
                    message="I love snacks"
                    key={state.Transition.name}
                    autoHideDuration={1200}
                />
            </div>
        </MyContainer>
    );
}

export const AutohideSnackbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <MyContainer title="Autohide Snackbar">
            <div>
                <Button onClick={handleClick}>Open Snackbar</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={5000}
                    onClose={handleClose}
                    message="This Snackbar will be dismissed in 5 seconds."
                />
            </div>
        </MyContainer>
    )
}

export const LongTextSnackbar = () => {
    const action = (
        <Button color="secondary" size="small">
            lorem ipsum dolorem
        </Button>
    );

    return (
        <MyContainer title="Long Text Snackbar">
            <Stack spacing={2} sx={{ maxWidth: 600, width: '95%' }}>
                <SnackbarContent message="I love snacks." action={action} />
                <SnackbarContent
                    message={
                        'I love candy. I love cookies. I love cupcakes. \
                    I love cheesecake. I love chocolate.'
                    }
                />
                <SnackbarContent
                    message="I love candy. I love cookies. I love cupcakes."
                    action={action}
                />
                <SnackbarContent
                    message={
                        'I love candy. I love cookies. I love cupcakes. \
                    I love cheesecake. I love chocolate.'
                    }
                    action={action}
                />
            </Stack>
        </MyContainer>
    )
}

export const PositionedSnackbar = () => {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
                    Top-Center
                </Button>
            </Box>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={6}>
                    <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
                        Top-Left
                    </Button>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                    <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
                        Top-Right
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
                        Bottom-Left
                    </Button>
                </Grid>
                <Grid sx={{ textAlign: 'right' }} item xs={6}>
                    <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
                        Bottom-Right
                    </Button>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
                    Bottom-Center
                </Button>
            </Box>
        </React.Fragment>
    );

    return (
        <MyContainer title="Positioned Snackbar">
            <Box sx={{ width: 500 }}>
                {buttons}
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    message="I love snacks"
                    key={vertical + horizontal}
                />
            </Box>
        </MyContainer>
    )
}

export const SimpleSnackbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <MyContainer title="Simple Snackbar">
            <div>
                <Button onClick={handleClick}>Open Snackbar</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note archived"
                    action={action}
                />
            </div>
        </MyContainer>
    );
}
