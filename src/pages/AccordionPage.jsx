import * as React from "react";
import { Container, Grid, Typography, Button, Divider, Collapse } from "@mui/material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";

import {
    AccordionUsage,
    AccordionExpandIcon,
    AccordionExpandDefault,
    AccordionTransition,
    DisabledAccordion,
    ControlledAccordions,
    CustomizedAccordions,
} from "../surfaces/AccordionComponent";

const AccordionPage = () => {
    const sections = [
        <AccordionUsage />,
        <AccordionExpandIcon />,
        <AccordionExpandDefault />,
        <AccordionTransition />,
        <DisabledAccordion />,
        <ControlledAccordions />,
        <CustomizedAccordions />,
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
                        Accordion Page
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

export default AccordionPage;
