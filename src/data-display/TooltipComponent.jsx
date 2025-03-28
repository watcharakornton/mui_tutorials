import * as React from 'react';
import MyContainer from "../component/MyContainer";
import { styled, useTheme } from '@mui/material/styles';
import {
    Box,
    Grid,
    Button,
    Tooltip,
    tooltipClasses,
    IconButton,
    Typography,
    ClickAwayListener,
} from '@mui/material';
import {
    Delete as DeleteIcon,
} from '@mui/icons-material';

export const TriggersTooltips = () => {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <MyContainer title="Triggers Tooltip">
            <div>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid>
                        <Tooltip disableFocusListener title="Add">
                            <Button>Hover or touch</Button>
                        </Tooltip>
                    </Grid>
                    <Grid>
                        <Tooltip disableHoverListener title="Add">
                            <Button>Focus or touch</Button>
                        </Tooltip>
                    </Grid>
                    <Grid>
                        <Tooltip disableFocusListener disableTouchListener title="Add">
                            <Button>Hover</Button>
                        </Tooltip>
                    </Grid>
                    <Grid>
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                            <div>
                                <Tooltip
                                    onClose={handleTooltipClose}
                                    open={open}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title="Add"
                                    slotProps={{
                                        props: {
                                            disablePortal: true,
                                        },
                                    }}
                                >
                                   <Button onClick={handleTooltipOpen}>Click</Button> 
                                </Tooltip>
                            </div>
                        </ClickAwayListener>
                    </Grid>
                </Grid>
            </div>
        </MyContainer>
    )
}

export const TooltipOffset = () => {
    return (
        <MyContainer title="Tooltip Offset">
            <Tooltip
                title="Add"
                slotProps={{
                    popper: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, -14],
                                },
                            },
                        ],
                    },
                }}
            >
                <Button>Offset</Button>
            </Tooltip>
        </MyContainer>
    )
}

export const ArrowTooltips = () => {
    return (
        <MyContainer title="Arrow Tooltips">
            <Tooltip title="Add" arrow>
                <Button>Arrow</Button>
            </Tooltip>
        </MyContainer>
    )
}

export const CustomizedTooltips = () => {
    const theme = useTheme();
    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`$ .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 11,
        },
    });

    const BootstrapTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.black,
        },
    });

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    });

    return (
        <MyContainer title="Customized Tooltips">
            <div>
                <LightTooltip title="Add">
                    <Button>Light</Button>
                </LightTooltip>
                <BootstrapTooltip title="Add">
                    <Button>Bootstrap</Button>
                </BootstrapTooltip>
                <HtmlTooltip
                    title={
                        <React.Fragment>
                            <Typography color="inherit">Tooltip with HTML</Typography>
                            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                            {"It's very engaging. Right?"}
                        </React.Fragment>
                    }
                >
                    <Button>HTML</Button>
                </HtmlTooltip>
            </div>
        </MyContainer>
    )
}

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