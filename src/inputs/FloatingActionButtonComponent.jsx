import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import {
    AppBar,
    Tabs,
    Tab,
    Typography,
    Zoom,
    Fab,
    Box,
} from '@mui/material';
import {
    Add as AddIcon,
    Edit as EditIcon,
    Favorite as FavoriteIcon,
    Navigation as NavigationIcon,
    KeyboardArrowUp as UpIcon,
} from '@mui/icons-material';
import { green } from '@mui/material/colors'

export const FloatingActionButtonZoom = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0)

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`action-tabpanel-${index}`}
                aria-labelledby={`action-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </Typography>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `action-tab-${index}`,
            'aria-controls': `action-tabpanel-${index}`,
        };
    }

    const fabStyle = {
        position: 'absolute',
        bottom: 16,
        right: 16,
    };

    const fabGreenStyle = {
        color: 'common.white',
        bgcolor: green[500],
        '&:hover': {
            bgcolor: green[600],
        },
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            color: 'primary',
            sx: fabStyle,
            icon: <AddIcon />,
            label: 'Add',
        },
        {
            color: 'secondary',
            sx: fabStyle,
            icon: <EditIcon />,
            label: 'Edit',
        },
        {
            color: 'inherit',
            sx: { ...fabStyle, ...fabGreenStyle },
            icon: <UpIcon />,
            label: 'Expand',
        },
    ];

    return (
        <>
            <Typography variant='body1' sx={{ mb: 2 }}>Floating Action Button Zoom</Typography>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    width: 500,
                    position: 'relative',
                    minHeight: 200,
                }}
            >
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                    >
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
                {fabs.map((fab, index) => (
                    <Zoom
                        key={fab.color}
                        in={value === index}
                        timeout={transitionDuration}
                        style={{
                            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                        }}
                        unmountOnExit
                    >
                        <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                            {fab.icon}
                        </Fab>
                    </Zoom>
                ))}
            </Box>
        </>
    );
}

export const FloatingActionButtonExtendedSize = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 2 }}>Floating Action Button Extended Size</Typography>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab variant="extended" size="small" color="primary">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
                <Fab variant="extended" size="medium" color="primary">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
                <Fab variant="extended" color="primary">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
            </Box>
        </>
    )
}

export const FloatingActionButtonSize = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 2 }}>Floating Action Button Size</Typography>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab size="small" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab size="medium" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Box>
        </>
    );
}

export const FloatingActionButtons = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 2 }}>Floating Action Buttons</Typography>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
                <Fab variant='extended'>
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
                <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab>
            </Box>
        </>
    );
}
