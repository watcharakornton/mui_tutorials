import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Typography,
    Breadcrumbs,
    Link,
} from '@mui/material/';

export const BasicBreadcrumbs = () => {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

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