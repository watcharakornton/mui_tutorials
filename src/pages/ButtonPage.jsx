import React from 'react'
import { Container, Stack, Divider, Button } from '@mui/material';
import {
    BasicButtons,
    TextButtons,
    ColorButtons,
    ButtonSizes,
    IconLabelButtons,
    IconButtons,
    IconButtonSizes,
    IconButtonColors,
    LoadingIconButton,
    IconButtonWithBadge,
    InputFileUpload,
    LoadingButtonsTransition,
    CustomizedButtons,
} from '../inputs/ButtonComponent';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ButtonPage = () => {
    return (
        <Container maxWidth="sm">
            <Stack
                spacing={3}
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Divider sx={{ width: "100%" }} />
                <BasicButtons />
                <Divider sx={{ width: "100%" }} />
                <TextButtons />
                <Divider sx={{ width: "100%" }} />
                <ColorButtons />
                <Divider sx={{ width: "100%" }} />
                <ButtonSizes />
                <Divider sx={{ width: "100%" }} />
                <IconLabelButtons />
                <Divider sx={{ width: "100%" }} />
                <IconButtons />
                <Divider sx={{ width: "100%" }} />
                <IconButtonSizes />
                <Divider sx={{ width: "100%" }} />
                <IconButtonColors />
                <Divider sx={{ width: "100%" }} />
                <LoadingIconButton />
                <Divider sx={{ width: "100%" }} />
                <IconButtonWithBadge />
                <Divider sx={{ width: "100%" }} />
                <InputFileUpload />
                <Divider sx={{ width: "100%" }} />
                <LoadingButtonsTransition />
                <Divider sx={{ width: "100%" }} />
                <CustomizedButtons />
                <Divider sx={{ width: "100%" }} />
                <Button variant="contained" startIcon={<ChevronLeftIcon />} href="/">Back</Button>
            </Stack>
        </Container>
    )
}

export default ButtonPage