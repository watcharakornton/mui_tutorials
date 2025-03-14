import * as React from 'react';
import {
    Button,
    ButtonGroup,
    Box,
    Typography,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList,
} from '@mui/material'

import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material'

const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>
];

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

export const SplitButton = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.into(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }

    return (
        <>
            <Typography variant='body1'>Split Button</Typography>
            <React.Fragment>
                <ButtonGroup
                    variant="contained"
                    ref={anchorRef}
                    aria-label="Button group with a nested menu"
                >
                    <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                    <Button
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Popper
                    sx={{ zIndex: 1 }}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu" autoFocusItem>
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                disabled={index === 2}
                                                selected={index === selectedIndex}
                                                onClick={(evevnt) => handleMenuItemClick(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </React.Fragment>
        </>
    )
}

export const GroupOrientation = () => {
    return (
        <>
            <Typography variant='body1'>Group Orientation</Typography>
            <Box
                sx={{
                    display: 'flex',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup orientation="vertical" aria-label="Vertical button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="Vertical buttong group"
                    variant="contained"
                >
                    {buttons}
                </ButtonGroup>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="Vertical button group"
                    variant="text"
                >
                    {buttons}
                </ButtonGroup>
            </Box>
        </>
    )
}

export const GroupSizesColors = () => {

    return (
        <>
            <Typography variant='body1'>Group Sizes Colors</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup size="small" aria-label="Small button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup color="secondary" aria-label="Medium-sized button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup size="large" aria-label="Large button group">
                    {buttons}
                </ButtonGroup>
            </Box>
        </>
    )
}

export const VariantButtonGroup = () => {
    return (
        <>
            <Typography variant='body1'>Varaint Button Group</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="text" aria-label="Basic button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
        </>
    )
}

export const BasicButtonGroup = () => {
    return (
        <>
            <Typography variant='body1'>Basic Button Group</Typography>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </>
    );
}
