import * as React from "react";
import MyContainer from "../component/MyContainer";
import MyTitle from "../component/MyTitle";
import {
    Typography,
    Chip,
    Stack,
} from "@mui/material";

export const ClickableAndDeletableChips = () => {
    const handleClick = () => {
        console.info('YOu clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <>
            <MyTitle title="Clickable and Deletable Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip 
                        label="Clickable Deletable"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                    <Chip 
                        label="Clickable Deletable"
                        variant="outlined"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                </Stack>
            </MyContainer>
        </>
    )
}

export const DeletableChips = () => {
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <>
            <MyTitle title="Deletable Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip label="Deletable" onDelete={handleDelete} />
                    <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
                </Stack>
            </MyContainer>
        </>
    )
}

export const ClickableChips = () => {
    const handleClick = () => {
        console.info('You clicked the clip');
    };

    return (
        <>
            <MyTitle title="Clickable Chips" />
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
            <MyTitle title="Basic Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip label="Chip Filled" />
                    <Chip label="Chip Outlined" variant="outlined" />
                </Stack>
            </MyContainer>
        </>
    )
}
