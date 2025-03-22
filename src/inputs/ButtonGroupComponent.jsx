import * as React from 'react';
import MyContainer from '../component/MyContainer';
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
        <MyContainer title="Split Button">
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
        </MyContainer>
    )
}

export const GroupOrientation = () => {
    return (
        <MyContainer title="Group Orientation">
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
        </MyContainer>
    )
}

export const GroupSizesColors = () => {
    return (
        <MyContainer title="Group Sizes Color">
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
        </MyContainer>
    )
}

export const VariantButtonGroup = () => {
    return (
        <MyContainer title="Variant Button Group">
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
        </MyContainer>
    )
}

export const BasicButtonGroup = () => {
    return (
        <MyContainer title="Basic Button Group">
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </MyContainer>
    );
}
