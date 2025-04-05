import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Typography,
    Breadcrumbs,
    Link,
    Stack,
} from '@mui/material/';

import {
    NavigateNext as NavigateNextIcon,
} from '@mui/icons-material';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export const CustomSeparator = () => {
    const breadcrumbs = [
        <Link underline='hover' key="1" color="inherit" href="/" onClick={handleClick}>
            MUI
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Core
        </Link>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            Breadcrumb
        </Typography>,
    ];

    return (
        <MyContainer title="Custom Separator">
            <Stack spacing={2}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
                <Breadcrumbs separator="-" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

        </MyContainer>
    )
}

export const ActiveLastBreadcrumb = () => {
    return (
        <MyContainer title="Active Last Breadcrumb">
            <div rolw="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline='hover' color='inherit' href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Link
                        underline='hover'
                        color="text.primary"
                        href="/material-ui/react-breadcrumbs/"
                        aria-current="page"
                    >
                        Breadcrumbs
                    </Link>
                </Breadcrumbs>
            </div>
        </MyContainer>
    )
}

export const BasicBreadcrumbs = () => {
    return (
        <MyContainer title="Basic Breadcrumbs">
            <div rolw="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline='hover' color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline='hover'
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
                </Breadcrumbs>
            </div>
        </MyContainer>
    )
}