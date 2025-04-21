import * as React from 'react'
import MyContainer from '../component/MyContainer'
import PropTypes from 'prop-types';
import {
    Tabs,
    Tab,
    Box,
} from '@mui/material';
import {
    Phone as PhoneIcon,
    Favorite as FavoriteIcon,
    PersonPin as PersonPinIcon,
    PhoneMissed as PhoneMissedIcon,
} from '@mui/icons-material';

export const IconPositionTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MyContainer title="Icon Position Tabs">
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon position tabs example"
            >
                <Tab icon={<PhoneIcon />} label="top" />
                <Tab icon={<PhoneMissedIcon />} iconPosition='start' label="start" />
                <Tab icon={<FavoriteIcon />} iconPosition='end' label="end" />
                <Tab icon={<PersonPinIcon />} iconPosition='bottom' label="bottom" />
            </Tabs>
        </MyContainer>
    )
}

export const IconLabelTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MyContainer title="Icon Label Tabs">
            <Tabs value={value} onChange={handleChange} aria-label='icon label tabs example'>
                <Tab icon={<PhoneIcon />} label="RECENTS" />
                <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                <Tab icon={<PersonPinIcon />} label="NEARBY" />
            </Tabs>
        </MyContainer>
    )
}

export const IconTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MyContainer title="Icon Tabs">
            <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
                <Tab icon={<PhoneIcon />} aria-label="phone" />
                <Tab icon={<FavoriteIcon />} aria-label="favorite" />
                <Tab icon={<PersonPinIcon />} aria-label="person" />
            </Tabs>
        </MyContainer>
    )
}

export const ScrollableTabsButtonPrevent = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MyContainer title="Scrollable Tabs Button Prevent">
            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons={false}
                    aria-label='scrollable force tabs example'
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                    <Tab label="Item Four" />
                    <Tab label="Item Five" />
                    <Tab label="Item Six" />
                    <Tab label="Item Seven" />
                </Tabs>
            </Box>
        </MyContainer>
    )
}

export const ScrollableTabsButtonForce = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MyContainer title="Scrollable Tabs Button Force">
            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label='scrollable force tabs example'
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                    <Tab label="Item Four" />
                    <Tab label="Item Five" />
                    <Tab label="Item Six" />
                    <Tab label="Item Seven" />
                </Tabs>
            </Box>
        </MyContainer>
    )
}

export const ScrollableTabsButtonAuto = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MyContainer title="Scrollabe Tabs Button Auto">
            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                    <Tab label="Item Four" />
                    <Tab label="Item Five" />
                    <Tab label="Item Six" />
                    <Tab label="Item Seven" />
                </Tabs>
            </Box>
        </MyContainer>
    )
}

export const CenteredTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MyContainer title="Centered Tabs">
            <Box sx={{ width: '90%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Box>
        </MyContainer>
    )
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const BasicTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MyContainer title="Basic Tabs">
            <Box sx={{ width: '95%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    Item One
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
            </Box>
        </MyContainer>
    )
}
