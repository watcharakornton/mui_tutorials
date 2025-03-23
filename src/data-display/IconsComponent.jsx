import * as React from "react";
import MyContainer from "../component/MyContainer";
import { styled, useTheme } from "@mui/material/styles";
import { pink } from '@mui/material/colors';
import { createSvgIcon } from '@mui/material/utils';
import {
    Delete as DeleteIcon,
    DeleteOutlined as DeleteOutlinedIcon,
    DeleteRounded as DeleteRoundedIcon,
    DeleteTwoTone as DeleteTwoToneIcon,
    DeleteSharp as DeleteSharpIcon,
    DeleteForever as DeleteForeverIcon,
    DeleteForeverOutlined as DeleteForeverOutlinedIcon,
    DeleteForeverRounded as DeleteForeverRoundedIcon,
    DeleteForeverTwoTone as DeleteForeverTwoToneIcon,
    DeleteForeverSharp as DeleteForeverSharpIcon,
    ThreeDRotation as ThreeDRotationIcon,
    FourK as FourKIcon,
    ThreeSixty as ThreeSixtyIcon,
} from "@mui/icons-material";
import {
    Grid,
    Typography,
    Box,
    SvgIcon,
    Stack,
} from "@mui/material";

// Use this function in SvgIconsColor, SvgIconsSize
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    )
};

export const CreateSvgIcon = () => {
    const HomeIcon = createSvgIcon(

    );
    const PlusIcon = createSvgIcon(

    );

    return (
        <MyContainer title="Create Svg Icon"></MyContainer>
    )
}

export const SvgIconsSize = () => {
    return (
        <MyContainer title="Svg Icons Sizes">
            <Stack direction="row" spacing={3} sx={{ alignItems: 'flex-end'}}>
                <HomeIcon fontSize="small" />
                <HomeIcon />
                <HomeIcon fontSize="large" />
                <HomeIcon sx={{ fontSize: 40 }} />
            </Stack>
        </MyContainer>
    )
}

export const SvgIconsColor = () => {

    return (
        <MyContainer title="Svg Icons Color">
            <Stack direction="row" spacing={3}>
                <HomeIcon />
                <HomeIcon color="primary" />
                <HomeIcon color="secondary" />
                <HomeIcon color="success" />
                <HomeIcon color="action" />
                <HomeIcon color="disabled" />
                <HomeIcon sx={{ color: pink[500] }} />
            </Stack>
        </MyContainer>
    );
}

export const SvgIconChildren = () => {
    return (
        <MyContainer title="Svg Icon Children">
            <SvgIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                    />
                </svg>
            </SvgIcon>
        </MyContainer>
    )
}

export const SvgMaterialIcons = () => {
    return (
        <MyContainer title="Svg Material Icons">
            <Box sx={{ width: '90%', mx: 'auto' }}>
                <Grid container sx={{ color: 'text.primary' }}>
                    <Grid item xs={4}>
                        <Typography>Filled</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <DeleteIcon />
                        <DeleteForeverIcon />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>Outlined</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <DeleteOutlinedIcon />
                        <DeleteForeverOutlinedIcon />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>Rounded</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <DeleteRoundedIcon />
                        <DeleteForeverRoundedIcon />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>Two Tone</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <DeleteTwoToneIcon />
                        <DeleteForeverTwoToneIcon />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>Sharp</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <DeleteSharpIcon />
                        <DeleteForeverSharpIcon />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>Edge-cases</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <ThreeDRotationIcon />
                        <FourKIcon />
                        <ThreeSixtyIcon />
                    </Grid>
                </Grid>
            </Box>
        </MyContainer>
    )
} 
