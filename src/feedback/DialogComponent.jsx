import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import {
    Stack,
    Unstable_TrapFocus as TrapFocus,
    CssBaseline,
    Container,
    Paper,
    Fade,
    Box,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    ListItemText,
    ListItemButton,
    List,
    Divider,
    AppBar,
    Toolbar,
    Slide,
    IconButton,
    Typography,
    RadioGroup,
    Radio,
} from '@mui/material';
import {
    Close as CloseIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';

export const CookiesBanner = () => {
    const [bannerOpen, setBannerOpen] = React.useState(true);

    const closeBanner = () => {
        setBannerOpen(false);
    };

    return (
        <MyContainer title="Cookies Banner">
            <React.Fragment>
                <CssBaseline />
                <AppBar position="fixed" component="nav">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Container component="main" sx={{ pt: 3 }}>
                    <Toolbar />
                    <Typography sx={{ marginBottom: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet.
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet.
                    </Typography>
                </Container>
                <TrapFocus open disableAutoFocus disableEnforceFocus>
                    <Fade appear={false} in={bannerOpen}>
                        <Paper
                            role="dialog"
                            aria-modal="false"
                            aria-label="Cookie banner"
                            square
                            variant='outlined'
                            tabIndex={-1}
                            sx={{
                                position: 'fixed',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                m: 0,
                                p: 2,
                                borderWidth: 0,
                                borderTopWidth: 1,
                            }}
                        >
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                sx={{ justifyContent: 'space-between', gap: 2 }}
                            >
                                <Box
                                    sx={{ flexShrink: 1, alignSelf: { xs: 'flex-start', sm: 'center' } }}
                                >
                                    <Typography sx={{ fontWeight: 'bold' }}>
                                        This website uses cookies
                                    </Typography>
                                    <Typography variant='body2'>
                                        example.com relies on cookies to improve your experience.
                                    </Typography>
                                </Box>
                                <Stack
                                    direction={{
                                        xs: 'row-reverse',
                                        sm: 'row',
                                    }}
                                    sx={{
                                        gap: 2,
                                        flexShrink: 0,
                                        alignSelf: { xs: 'flex-end', sm: 'center' },
                                    }}
                                >
                                    <Button size="small" onClick={closeBanner} variant='contained'>
                                        Allow all
                                    </Button>
                                    <Button size="small" onClick={closeBanner}>
                                        Reject all
                                    </Button>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Fade>
                </TrapFocus>
            </React.Fragment>
        </MyContainer>
    )
}

export const ConfirmationDialog = () => {
    const options = [
        'None',
        'Atria',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel',
    ];

    function ConfirmationDialogRaw(props) {
        const { onClose, value: valueProp, open, ...other } = props;
        const [value, setValue] = React.useState(valueProp);
        const radioGroupRef = React.useRef(null);

        React.useEffect(() => {
            if (!open) {
                setValue(valueProp);
            }
        }, [valueProp, open]);

        const handleEntering = () => {
            if (radioGroupRef.current != null) {
                radioGroupRef.current.focus();
            }
        };

        const handleCancel = () => {
            onClose();
        };

        const handleOk = () => {
            onClose(value);
        };

        const handleChange = (event) => {
            setValue(event.target.value);
        };

        return (
            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
                maxWidth="xs"
                TransitionProps={{ onEntering: handleEntering }}
                open={open}
                {...other}
            >
                <DialogTitle>Phone Ringtone</DialogTitle>
                <DialogContent dividers>
                    <RadioGroup
                        ref={radioGroupRef}
                        aria-label="ringtone"
                        name="ringtone"
                        value={value}
                        onChange={handleChange}
                    >
                        {options.map((option) => (
                            <FormControlLabel
                                value={option}
                                key={option}
                                control={<Radio />}
                                label={option}
                            />
                        ))}
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleOk}>Ok</Button>
                </DialogActions>
            </Dialog>
        );
    }

    ConfirmationDialogRaw.propTypes = {
        onClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        value: PropTypes.string.isRequired,
    };

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Dione');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };

    return (
        <MyContainer title="Confirmation Dialog">
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="div" role="group">
                    <ListItemButton divider disabled>
                        <ListItemText primary="Interruptions" />
                    </ListItemButton>
                    <ListItemButton
                        divider
                        aria-haspopup="true"
                        aria-controls="ringtone-menu"
                        aria-label="phone ringtone"
                        onClick={handleClickListItem}
                    >
                        <ListItemText primary="Phone ringtone" secondary={value} />
                    </ListItemButton>
                    <ListItemButton divider disabled>
                        <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                    </ListItemButton>
                    <ConfirmationDialogRaw
                        id="ringtone-menu"
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        value={value}
                    />
                </List>
            </Box>
        </MyContainer>
    )
}

export const ResponsiveDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <MyContainer title="Responsive Dialog">
            <React.Fragment>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Open responsive dialog
                </Button>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='responsive-dialog-title'
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Disagree
                        </Button>
                        <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </MyContainer>
    )
}

export const MaxWidthDialog = () => {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <MyContainer title="Max Width Dialog">
            <React.Fragment>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Open max-width dialog
                </Button>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>Optional sizes</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            You can set my maximum width and whether to adapt or not.
                        </DialogContentText>
                        <Box
                            noValidate
                            component="form"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                m: 'auto',
                                width: 'fit-content',
                            }}
                        >
                            <FormControl sx={{ mt: 2, minWidth: 120 }}>
                                <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                                <Select
                                    autoFocus
                                    value={maxWidth}
                                    onChange={handleMaxWidthChange}
                                    label="maxWidth"
                                    inputProps={{
                                        name: 'max-width',
                                        id: 'max-width',
                                    }}
                                >
                                    <MenuItem value={false}>false</MenuItem>
                                    <MenuItem value="xs">xs</MenuItem>
                                    <MenuItem value="sm">sm</MenuItem>
                                    <MenuItem value="md">md</MenuItem>
                                    <MenuItem value="lg">lg</MenuItem>
                                    <MenuItem value="xl">xl</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                sx={{ mt: 1 }}
                                control={
                                    <Switch checked={fullWidth} onChange={handleFullWidthChange} />
                                }
                                label="Full width"
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </MyContainer>
    )
}

export const FullScreenDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />
    });

    return (
        <MyContainer title="Full Screen Dialog">
            <React.Fragment>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Open full-screen dialog
                </Button>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component="div">
                                Sound
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItemButton>
                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <ListItemText
                                primary="Deafult notification ringtone"
                                secondary="Tethys"
                            />
                        </ListItemButton>
                    </List>
                </Dialog>
            </React.Fragment>
        </MyContainer>
    )
}

export const CustomizedDialogs = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const BootstrapDialog = styled(Dialog)({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    });

    return (
        <MyContainer title="Customized Dialogs">
            <React.Fragment>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Open dialog
                </Button>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby='customized-dialog-title'
                    open={open}
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        Modal title
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500],
                        })}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Cras mattis consectetur purus sit amet fermemtum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </Typography>
                        <Typography gutterBottom>
                            Preasent commodo cursus magna, vel scelerisque nisl consectetur et.
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </Typography>
                        <Typography gutterBottom>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Save changes
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </React.Fragment>
        </MyContainer>
    )
}

export const FormDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <MyContainer title="Form Dialog">
            <React.Fragment>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        paper: {
                            component: 'form',
                            onSubmit: (event) => {
                                event.preventDefault();
                                const formData = new FormData(event.currentTarget);
                                const formJson = Object.fromEntries(formData.entries());
                                const email = formJson.email;
                                console.log(email);
                                handleClose();
                            },
                        },
                    }}
                >
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant='standard'
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </MyContainer>
    )
}

export const AlertDialogSlide = () => {
    const [open, setOpen] = React.useState(false);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <MyContainer title="Alert Dialog Slide">
            <React.Fragment>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Slide in alert dialog
                </Button>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby='alert-dialog-slide-description'
                >
                    <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose}>Agree</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </MyContainer>
    )
}

export const AlertDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <MyContainer title="Alert Dialog">
            <React.Fragment>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Open alert dialog
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='alert-dialopg-title'
                    aria-describedby='alert-dialog-description'
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </MyContainer>
    )
}