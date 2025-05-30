import * as React from 'react'
import { Container, Grid, Divider, Button, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MyBackButton from '../component/MyBackButton';
import {
    FloatingActionButtons,
    FloatingActionButtonSize,
    FloatingActionButtonExtendedSize,
    FloatingActionButtonZoom,
} from "../inputs/FloatingActionButtonComponent";

const CheckboxPage = () => {
    const sections = [
        <FloatingActionButtons />,
        <FloatingActionButtonSize />,
        <FloatingActionButtonExtendedSize />,
        <FloatingActionButtonZoom />,
    ];

    return (
        <Container maxWidth="md">
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Grid item xs={12}>
                    <Typography variant='h3' align='center' sx={{ mt: 5 }}>
                        FAB Page
                    </Typography>
                </Grid>
                {sections.map((Component, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={12} sx={{ mt: 5 }}>
                            {Component}
                            <Divider sx={{ mt: 3, width: "100%" }} />
                        </Grid>
                    </React.Fragment>
                ))}
                <Grid item xs={12} sx={{ my: 5 }}>
                    <MyBackButton />
                </Grid>
            </Grid>
        </Container>
    )
}

export default CheckboxPage