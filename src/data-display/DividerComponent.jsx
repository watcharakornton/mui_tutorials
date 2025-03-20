import * as React from "react";
import MyContainer from "../component/MyContainer";
import {
    Typography,
} from "@mui/material";

export const IntroDivider = () => {
    return (
        <>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Intro Divider
            </Typography>
            <MyContainer>
            </MyContainer>
        </>
    )
}
