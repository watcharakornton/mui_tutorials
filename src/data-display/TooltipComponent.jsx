import * as React from 'react';
import MyContainer from "../component/MyContainer";
import {
    Box,
    Grid,
    Button,
    Tooltip,
    IconButton
} from '@mui/material';
import {
    Delete as DeleteIcon,
} from '@mui/icons-material';


export const PositionedTooltips = () => {
    return (
        <MyContainer title="Positioned Tooltips">
            <Box sx={{ width: 500 }}>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid>
                        <Tooltip title="Add" placement="top-start">
                            <Button>top-start</Button>
                        </Tooltip>
                        <Tooltip title="Add" placement="top">
                            <Button>top</Button>
                        </Tooltip>
                        <Tooltip title="Add" placement="top-end">
                            <Button>top-end</Button>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid item xs={6}>
                        <Tooltip title="Add" placement="left-start">
                            <Button>left-start</Button>
                        </Tooltip>
                        <br />
                        <Tooltip title="Add" placement="left">
                            <Button>left</Button>
                        </Tooltip>
                        <br />
                        <Tooltip title="Add" placement="left-end">
                            <Button>left-end</Button>
                        </Tooltip>
                    </Grid>
                    <Grid container direction="column" sx={{ alignItems: 'flex-end' }} xs={6}>
                        <Grid>
                            <Tooltip title="Add" placement="right-start">
                                <Button>right-start</Button>
                            </Tooltip>
                        </Grid>
                        <Grid>
                            <Tooltip title="Add" placement="right">
                                <Button>right</Button>
                            </Tooltip>
                        </Grid>
                        <Grid>
                            <Tooltip title="Add" placement="right-end">
                                <Button>right-end</Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid>
                        <Tooltip title="Add" placement="bottom-start">
                            <Button>bottom-start</Button>
                        </Tooltip>
                        <Tooltip title="Add" placement="bottom">
                            <Button>bottom</Button>
                        </Tooltip>
                        <Tooltip title="Add" placement="bottom-end">
                            <Button>bottom-end</Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Box>
        </MyContainer>
    )
}

export const BasicTooltip = () => {
    return (
        <MyContainer title="Basic Tooltip">
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </MyContainer>
    )
}