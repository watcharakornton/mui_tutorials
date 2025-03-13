import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];

export const GroupOrientaion = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup orientation='vertical' aria-label="Vertical button group">
                {buttons}
            </ButtonGroup>
            <ButtonGroup
                orientation='vertical'
                aria-label='Vertical button group'
                variant='contained'
            >
                {buttons}
            </ButtonGroup>
        </Box>
    )
}
export const GroupSizesColors = () => {
    return (
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
    )
}

export const BasicButtonGroup = () => {
    return (
        <>
            <Box paddingY={3}>
                <ButtonGroup variant='contained' aria-label="Basic button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
            <Box paddingY={3}>
                <ButtonGroup variant='outlined' aria-label="Basic button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
            <Box padingY={3}>
                <ButtonGroup variant='text' aria-label="Basic button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
        </>
    );
}
