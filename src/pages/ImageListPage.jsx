import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import MyBackButton from "../component/MyBackButton";

import {
    StandardImageList,
    QuiltedImageList,
    WovenImageList,
    MasonryImageList,
    TitlebarImageList,
    TitlebarBelowImageList,
    TitlebarBelowMasonaryImageList,
    CustomImageList,
} from "../layout/ImageListComponent";

const ImageListPage = () => {
    const sections = [
        <StandardImageList />,
        <QuiltedImageList />,
        <WovenImageList />,
        <MasonryImageList />,
        <TitlebarImageList />,
        <TitlebarBelowImageList />,
        <TitlebarBelowMasonaryImageList />,
        <CustomImageList />,
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
                        Image List page
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

export default ImageListPage;
