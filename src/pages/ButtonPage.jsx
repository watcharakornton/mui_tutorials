import * as React from "react";
import { Container, Grid, Typography, Button, Divider } from "@mui/material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";

import {
    BasicButtons,
    TextButtons,
    ColorButtons,
    ButtonSizes,
    IconLabelButtons,
    IconButtonSizes,
    IconButtonColors,
    LoadingIconButton,
    IconButtonWithBadge,
    InputFileUpload,
    LoadingButtonsTransition,
    CustomizedButtons,
} from '../inputs/ButtonComponent';

import MyBackButton from "../component/MyBackButton";

const ButtonPage = () => {
    const sections = [
        <BasicButtons />,
        <TextButtons />,
        <ColorButtons />,
        <ButtonSizes />,
        <IconLabelButtons />,
        <IconButtonSizes />,
        <IconButtonColors />,
        <LoadingIconButton />,
        <IconButtonWithBadge />,
        <InputFileUpload />,
        <LoadingButtonsTransition />,
        <CustomizedButtons />,
    ]
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
                        Button Page
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

export default ButtonPage