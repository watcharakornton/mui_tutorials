import * as React from "react";
import MyContainer from "../component/MyContainer";
import {
    Typography,
    Chip,
    Stack,
} from "@mui/material";

export const ClickableChips = () => {
    const handleClick = () => {
        console.info('You clicked the clip');
    };

    return (
        <>
            <Typography variant="h5" sx={{ mb: 3 }}>
                ClickableChips
            </Typography>
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip label="Clickable" onClick={handleClick} />
                    <Chip label="Clickable" variant="outlined" onClick={handleClick} />
                </Stack>
            </MyContainer>
        </>
    )
}

export const BasicChip = () => {
    return (
        <>
            <Typography variant="h5" sx={{ mb: 3 }}>
                BasicChip
            </Typography>
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip label="Chip Filled" />
                    <Chip label="Chip Outlined" variant="outlined" />
                </Stack>
            </MyContainer>
        </>
    )
}
