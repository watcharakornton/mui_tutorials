import * as React from "react";
import MyContainer from "../component/MyContainer";
import MyTitle from "../component/MyTitle";
import {
    Chip,
    Stack,
    Avatar,
} from "@mui/material";
import {
    Done as DoneIcon,
    Delete as DeleteIcon,
    Face as FaceIcon,
} from '@mui/icons-material';

export const IconChips = () => {
    return (
        <>
            <MyTitle title="Icon Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip icon={<FaceIcon />} label="With Icon" />
                    <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
                </Stack>
            </MyContainer>
        </>
    )
}

export const AvatarChips = () => {
    return (
        <>
            <MyTitle title="Avatar Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
                    <Chip
                        avatar={<Avatar alt="Natacha" src="src/assets/images/avatar/1.jpg" />}
                        label="Avatar"
                        variant="outlined"
                     />
                </Stack>
            </MyContainer>
        </>
    )
}

export const CustomDeleteIconChips = () => {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <>
            <MyTitle title="Custom Delete Icon Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip
                        label="Custom delete icon"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<DoneIcon />}
                    />
                    <Chip
                        label="Custom delete icon"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<DeleteIcon />}
                        variant="outlined"
                    />
                </Stack>
            </MyContainer>
        </>
    )
}

export const ClickableAndDeletableChips = () => {
    const handleClick = () => {
        console.info('You clicked the Chip.');
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
