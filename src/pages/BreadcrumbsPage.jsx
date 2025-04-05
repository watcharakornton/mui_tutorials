import * as React from "react";
import { Container, Grid, Typography, Button, Divider, Collapse } from "@mui/material";
import MyBackButton from "../component/MyBackButton";

import {
    BasicBreadcrumbs,
    ActiveLastBreadcrumb,
    CustomSeparator,
} from "../navigation/BreadcrumbsComponent";

const BreadcrumbsPage = () => {
    const sections = [
        <BasicBreadcrumbs />,
        <ActiveLastBreadcrumb />,
        <CustomSeparator />,
    ];

    return (
        <Container maxWidth="sm">
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Grid item xs={12}>
                    <Typography variant="h3" align="center" sx={{ mt: 5 }}>
                        Breadcrumbs Page
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
                    <MyBackButton />
                </Grid>
            </Grid>
        </Container>
    );
};

export default BreadcrumbsPage;
