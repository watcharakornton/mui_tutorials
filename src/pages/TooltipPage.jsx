import * as React from "react";
import { Container, Grid, Typography, Button, Divider } from "@mui/material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";

import {
    BasicTooltip,
    PositionedTooltips,
    CustomizedTooltips,
    ArrowTooltips,
    TooltipOffset,
    TriggersTooltips,
    ControlledTooltips,
    VariableWidth,
    NonInteractiveTooltips,
    DisabledTooltips,
    TransitionsTooltips,
    FollowCursorTooltips,
    AnchorElTooltips,
    DelayTooltips,
    AccessibilityTooltips,
} from "../data-display/TooltipComponent";

const TooltipPage = () => {
    const sections = [
        <BasicTooltip />,
        <PositionedTooltips />,
        <CustomizedTooltips />,
        <ArrowTooltips />,
        <TooltipOffset />,
        <TriggersTooltips />,
        <ControlledTooltips />,
        <VariableWidth />,
        <NonInteractiveTooltips />,
        <DisabledTooltips />,
        <TransitionsTooltips />,
        <FollowCursorTooltips />,
        <AnchorElTooltips />,
        <DelayTooltips />,
        <AccessibilityTooltips />,
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
                        Tooltip Page
                    </Typography>
                </Grid>
                {sections.map((Component, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={12} sx={{ mt: 5 }}>
                            {Component}
                            {/* <Divider sx={{ mt: 3, width: "100%" }} /> */}
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

export default TooltipPage;
