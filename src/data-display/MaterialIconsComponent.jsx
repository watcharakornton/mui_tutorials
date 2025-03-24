import * as React from "react";
import MyContainer from "../component/MyContainer";
import iconsSet from "../data/iconsSet";
import { Typography, Box, Grid } from "@mui/material";

const IconsBox = ({ icons }) => {
    return (
        <Box display="flex" justifyContent="center" width="90%">
            <Grid container spacing={4} maxWidth={800}>
                {icons.map(({ component: Icon, label }, index) => (
                    <Grid item xs={4} md={3} lg={2.4} key={index}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                                transition: "transform 0.3s, color 0.3s",
                                "&:hover": {
                                    transform: "scale(1.2)",
                                    color: "primary.main",
                                },
                            }}
                        >
                            <Icon fontSize="large" />
                            <Typography sx={{ fontSize: "10px", mt: 1 }}>{label}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}


export const MaterialIconsOutlined = () => {
    return (
        <MyContainer title="Material Icons Outlined">
            <IconsBox icons={iconsSet.outlined} />
        </MyContainer>
    )
}

export const MaterialIconsFilled = () => {
    return (
        <MyContainer title="Material Icons Filled">
            <IconsBox icons={iconsSet.filled} />
        </MyContainer>
    );
};
