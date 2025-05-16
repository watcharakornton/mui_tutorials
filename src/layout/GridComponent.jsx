import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
    Box,
    Paper,
    Grid,
    FormLabel,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
} from '@mui/material';
import MyContainer from '../component/MyContainer';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export const RowAndColumnSpacing = () => {
    return (
        <MyContainer title="Row And Column Spacing">
            <Box sx={{ width: '95%%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid size={6}>
                        <Item>1</Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>2</Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>3</Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>4</Item>
                    </Grid>
                </Grid>
            </Box>
        </MyContainer>
    )
}

export const FullWidthGrid = () => {
    return (
        <MyContainer title="Full Width Grid">
            <Box sx={{ flexGrow: 1 }} maxWidth="95%">
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </MyContainer>
    )
}

export const BasicGrid = () => {
    return (
        <MyContainer title="Basic Grid">
            <Box sx={{ flexGrow: 1 }} maxWidth="95%">
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </MyContainer>
    )
}