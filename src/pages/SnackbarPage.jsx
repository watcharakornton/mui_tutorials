import * as React from "react";
import { Container, Grid, Typography, Button, Divider, Collapse } from "@mui/material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";

import {
    SimpleSnackbar,
    PositionedSnackbar,
    LongTextSnackbar,
    AutohideSnackbar,
    TransitionsSnackbar,
    CustomizedSnackbars,
    ConsecutiveSnackbars,
    IntegrationNotistack,
    ToolpadNotificationNoSnap,
} from "../feedback/SnackbarComponent";

const SnackbarPage = () => {
    const sections = [
        <SimpleSnackbar />,
        <PositionedSnackbar />,
        <LongTextSnackbar />,
        <AutohideSnackbar />,
        <TransitionsSnackbar />,
        <CustomizedSnackbars />,
        <ConsecutiveSnackbars />,
        <IntegrationNotistack />,
        <ToolpadNotificationNoSnap />,
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
                    <Typography variant="h3" align="center" sx={{ mt: 5 }}>
                        Snackbar page
                    </Typography>
                </Grid>
                {sections.map((Component, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={12} sx={{ mt: 5 }}>
                            {Component}
                        </Grid>
                    </React.Fragment>
                ))}
                <Grid item xs={12} sx={{ my: 5 }}>
                    <Button size="large" startIcon={<ChevronLeftIcon />} href="/">
                        Back
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SnackbarPage;
