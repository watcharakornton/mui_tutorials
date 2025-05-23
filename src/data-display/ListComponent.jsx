import * as React from "react";
import MyContainer from "../component/MyContainer";
import { styled, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import {
    Box,
    ListSubheader,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItemAvatar,
    Collapse,
    Divider,
    Avatar,
    IconButton,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Grid,
    Typography,
    Switch,
    Paper,
    Tooltip,
} from '@mui/material';

import {
    Inbox as InboxIcon,
    Drafts as DraftsIcon,
    Send as SendIcon,
    ExpandLess,
    ExpandMore,
    StarBorder,
    Image as ImageIcon,
    Work as WorkIcon,
    BeachAccess as BeachAccessIcon,
    Folder as FolderIcon,
    Delete as DeleteIcon,
    Comment as CommentIcon,
    Wifi as WifiIcon,
    Bluetooth as BluetoothIcon,
    Star as StarIcon,
    ArrowRight,
    KeyboardArrowDown,
    Home,
    Settings,
    People,
    PermMedia,
    Dns,
    Public,
} from '@mui/icons-material';
import { FixedSizeList } from 'react-window';
import { minWidth } from "@mui/system";

export const CustomizedList = () => {
    const [open, setOpen] = React.useState(true);

    const data = [
        { icon: <People />, label: 'Authentication' },
        { icon: <Dns />, label: 'Database' },
        { icon: <PermMedia />, label: 'Storage' },
        { icon: <Public />, label: 'Hosting' },
    ];

    const FireNav = styled(List)({
        '& .MuiListItemButton-root': {
            paddingLeft: 24,
            paddingRight: 24,
        },
        '& .MuiListItemIcon-root': {
            minWidth: 0,
            marginRight: 16,
        },
        '& .MuiSvgIcon-root': {
            fontSize: 20,
        },
    });

    return (
        <MyContainer title="Customized List">
            <Box sx={{ display: 'flex' }}>
                <ThemeProvider
                    theme={createTheme({
                        components: {
                            MuiListItemButton: {
                                defaultProps: {
                                    disableTouchRipple: true,
                                },
                            },
                        },
                        palette: {
                            mode: 'dark',
                            primary: { main: 'rgb(102, 157, 246)' },
                            background: { paper: 'rgb(5, 30, 52)' },
                        },
                    })}
                >
                    <Paper elevation={0} sx={{ maxWidth: 256 }}>
                        <FireNav component="nav" disablePadding>
                            <ListItemButton component="a" href="#customized-list">
                                <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                                <ListItemText
                                    sx={{ my: 0 }}
                                    primary="Firebash"
                                    primaryTypographyProps={{
                                        fontSize: 20,
                                        fontWeight: 'medium',
                                        letterSpacing: 0,
                                    }}
                                />
                            </ListItemButton>
                            <Divider />
                            <ListItem component="div" disablePadding>
                                <ListItemButton sx={{ height: 56 }}>
                                    <ListItemIcon>
                                        <Home color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Project Overview"
                                        primaryTypographyProps={{
                                            color: 'primary',
                                            fontWeight: 'medium',
                                            variant: 'body2',
                                        }}
                                    />
                                </ListItemButton>
                                <Tooltip title="Project Settings">
                                    <IconButton
                                        size="large"
                                        sx={{
                                            '& svg': {
                                                color: 'rgba(255,255,255,0.8)',
                                                transition: '0.2s',
                                                transform: 'translateX(0) rotate(0)',
                                            },
                                            '&:hover, &:focus': {
                                                bgcolor: 'unset',
                                                '& svg:first-of-type': {
                                                    transform: 'translateX(-4px) rotate(-20deg)',
                                                },
                                                '& svg:last-of-type': {
                                                    right: 0,
                                                    opacity: 1,
                                                },
                                            },
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                height: '80%',
                                                display: 'block',
                                                left: 0,
                                                width: '1px',
                                                bgcolor: 'divider',
                                            },
                                        }}
                                    >
                                        <Settings />
                                        <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                                    </IconButton>
                                </Tooltip>
                            </ListItem>
                            <Divider />
                            <Box
                                sx={[
                                    open ? { bgcolor: 'rgba(71, 98, 130, 0.2)', } : { bgcolor: null, },
                                    open ? { pb: 2, } : { pb: 0 },
                                ]}
                            >
                                <ListItemButton
                                    alignItems="flex-start"
                                    onClick={() => setOpen(!open)}
                                    sx={[
                                        { px: 3, pt: 2.5, },
                                        open ? { pb: 0, } : { pb: 2.5 },
                                        open ? {
                                            '&:hover, &:focus': {
                                                '& svg': {
                                                    opacity: 1,
                                                },
                                            },
                                        }
                                            : {
                                                '&:hover, &:focus': {
                                                    '& svg': {
                                                        opacity: 0,
                                                    },
                                                },
                                            },
                                    ]}
                                >
                                    <ListItemText
                                        primary="Build"
                                        primaryTypographyProps={{
                                            fontSize: 15,
                                            fontWeight: 'medium',
                                            lineHeight: '20px',
                                            mb: '2px',
                                        }}
                                        secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                                        secondaryTypographyProps={{
                                            noWrap: true,
                                            fontSize: 12,
                                            lineHeight: '16px',
                                            color: open ? 'rgba(0,0,0,0)' : 'rgba(255, 255, 255, 0.5)',
                                        }}
                                        sx={{ my: 0 }}
                                    />
                                    <KeyboardArrowDown
                                        sx={[
                                            {
                                                mr: -1,
                                                opacity: 0,
                                                transition: '0.2s',
                                            },
                                            open
                                                ? {
                                                    transform: 'rotate(-180deg)',
                                                }
                                                : {
                                                    transform: 'rotate(0)',
                                                }
                                        ]}
                                    />
                                </ListItemButton>
                                {open &&
                                    data.map((item) => (
                                        <ListItemButton
                                            key={item.label}
                                            sx={{ py: 0, minHeight: 32, color: 'rgba(255, 255, 255,.8)' }}
                                        >
                                            <ListItemIcon sx={{ color: 'inherit' }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.label}
                                                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                            />
                                        </ListItemButton>
                                    ))}
                            </Box>
                        </FireNav>
                    </Paper>
                </ThemeProvider>
            </Box>
        </MyContainer>
    )
}

export const VirtualizedList = () => {
    function renderRow(props) {
        const { index, style } = props;

        return (
            <ListItem style={style} key={index} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText primary={`Item ${index + 1}`} />
                </ListItemButton>
            </ListItem>
        );
    }

    return (
        <MyContainer title="Virtualized List">
            <Box
                sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
            >
                <FixedSizeList
                    height={400}
                    width={336}
                    itemSize={46}
                    itemCount={200}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
        </MyContainer>
    )
}

export const InsetList = () => {
    return (
        <MyContainer title="Inset List">
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                aria-label="contacts"
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chelsea Otakan" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Eric Hoffman" />
                    </ListItemButton>
                </ListItem>
            </List>
        </MyContainer>
    )
}

export const PinnedSubheaderList = () => {
    return (
        <MyContainer title="Pinned Subheader List">
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
            >
                {[0, 1, 2, 3, 4].map((sectionId) => (
                    <li key={`section-${sectionId}`}>
                        <ul>
                            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                            {[0, 1, 2].map((item) => (
                                <ListItem key={`item-${sectionId}-${item}`}>
                                    <ListItemText primary={`Item ${item}`} />
                                </ListItem>
                            ))}
                        </ul>
                    </li>
                ))}
            </List>
        </MyContainer>
    )
}

export const SwitchListSecondary = () => {
    const [checked, setChecked] = React.useState(['wifi']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <MyContainer title="Switch List Secondary">
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader>Settings</ListSubheader>}
            >
                <ListItem>
                    <ListItemIcon>
                        <WifiIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
                    <Switch
                        edge="end"
                        onChange={handleToggle('wifi')}
                        checked={checked.includes('wifi')}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-wifi',
                        }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <BluetoothIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
                    <Switch
                        edge="end"
                        onChange={handleToggle('bluetooth')}
                        checked={checked.includes('bluetooth')}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-bluetooth',
                        }}
                    />
                </ListItem>
            </List>
        </MyContainer>
    )
}

export const CheckboxListSecondary = () => {
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <MyContainer title="Checkbox List Secondary">
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem
                            key={value}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(value)}
                                    checked={checked.includes(value)}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${value + 1}`}
                                        src={`src/assets/images/avatar/${value + 1}.jpg`}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </MyContainer>
    )
}

export const CheckboxList = () => {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <MyContainer title="Checkbox List">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem
                            key={value}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                    <CommentIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.includes(value)}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </MyContainer>
    );
}

export const AlignItemsList = () => {
    return (
        <MyContainer title="Align Items List">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="src/assets/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    Ali Connors
                                </Typography>
                                {" - I'll be in your neighborhood doing errands this..."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="src/assets/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" - Wish I could, but I'm out of town this..."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="src/assets/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    Sandra Adams
                                </Typography>
                                {' - Do you have Paris recommendations? Have you ever...'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </MyContainer>
    )
}

export const SelectedListItem = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(!index);
    };

    return (
        <MyContainer title="Selected List Item">
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItemButton>
                </List>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folder">
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemText primary="Trash" />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemText primary="Spam" />
                    </ListItemButton>
                </List>
            </Box>
        </MyContainer>
    );
}

export const InteractiveList = () => {
    const theme = useTheme();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    function generate(element) {
        return [0, 1, 2].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    const Demo = styled('div')({
        backgroundColor: theme.palette.background.paper,
    });

    return (
        <MyContainer title="Interactive List">
            <Box sx={{ flexGrow: 1, maxWidth: '90%' }}>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={dense}
                                onChange={(event) => setDense(event.target.checked)}
                            />
                        }
                        label="Enable dense"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={secondary}
                                onChange={(event) => setSecondary(event.target.checked)}
                            />
                        }
                        label="Enable secondary text"
                    />
                </FormGroup>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Text only
                        </Typography>
                        <Demo>
                            <List dense={dense}>
                                {generate(
                                    <ListItem>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </Demo>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Icon with text
                        </Typography>
                        <Demo>
                            <List dense={dense}>
                                {generate(
                                    <ListItem>
                                        <ListItemIcon>
                                            <FolderIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </Demo>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Avatar with text
                        </Typography>
                        <Demo>
                            <List dense={dense}>
                                {generate(
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </Demo>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Avatar with text and icon
                        </Typography>
                        <Demo>
                            <List dense={dense}>
                                {generate(
                                    <ListItem
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                    >
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </Demo>
                    </Grid>
                </Grid>
            </Box>
        </MyContainer>
    );
}

export const FolderList = () => {
    return (
        <MyContainer title="Folder List">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
            </List>
        </MyContainer>
    );
}

export const NestedList = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <MyContainer title="Nested List">
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </MyContainer>
    )
}

export const BasicList = () => {
    return (
        <MyContainer title="Basic List">
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Trash" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Spam" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </MyContainer>
    )
}
