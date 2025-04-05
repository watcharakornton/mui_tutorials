import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Typography,
    Breadcrumbs,
    Link,
} from '@mui/material/';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
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