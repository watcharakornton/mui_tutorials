import * as React from "react";
import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/material/styles";
import {
    Typography,
    Box,
    Stack,
    Slider,
    IconButton,
    SliderThumb,
    Tooltip,
    Input as MuiInput,
    Grid,
} from "@mui/material";
import {
    VolumeDown,
    VolumeUp,
    PauseRounded,
    PlayArrowRounded,
    FastForwardRounded,
    FastRewindRounded,
    VolumeUpRounded,
    VolumeDownRounded,
} from "@mui/icons-material";
import { height } from "@mui/system";

const marks = [
    {
        value: 0,
        label: "0°C",
    },
    {
        value: 20,
        label: "20°C",
    },
    {
        value: 37,
        label: "37°C",
    },
    {
        value: 100,
        label: "100°C",
    },
];

function valueText(value) {
    return `${value}°C`;
}

export const NonLinearSlider = () => {
    const [value, setValue] = React.useState(10);

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    function valueLabelFormat(value) {
        const units = ['KB', 'MB', 'GB', 'TB'];

        let unitIndex = 0;
        let scaledValue = value;

        while (scaledValue >= 1024 && unitIndex < units.length - 1) {
            unitIndex += 1;
            scaledValue /= 1024;
        }

        return `${scaledValue} ${units[unitIndex]}`;
    }

    function calculateValue(value) {
        return 2 ** value;
    }

    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>Non Linear Slider</Typography>
            <Box sx={{ width: 250, mx: 'auto' }}>
                <Typography id="non-linear-slider" gutterBottom>
                    Storage: {valueLabelFormat(calculateValue(value))}
                </Typography>
                <Slider 
                    value={value}
                    min={5}
                    step={1}
                    max={30}
                    scale={calculateValue}
                    getAriaValueText={valueLabelFormat}
                    valueLabelFormat={valueLabelFormat}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="non-linear-slider"
                />
            </Box>
        </>
    )
}

export const VerticalSlider = () => {
    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>Vertical Slider</Typography>
            <Stack sx={{ height: 300, width: 100, mx: 'auto' }} spacing={1} direction="row">
                <Slider
                    aria-label="Temperature"
                    orientation="vertical"
                    getAriaValueText={valueText}
                    valueLabelDisplay="auto"
                    defaultValue={30}
                />
                <Slider
                    aria-label="Temperature"
                    orientation="vertical"
                    defaultValue={30}
                    valueLabelDisplay="auto"
                    disabled
                />
                <Slider
                    getAriaLabel={() => 'Temperature'}
                    orientation="vertical"
                    getAriaValueText={valueText}
                    defaultValue={[20, 37]}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </Stack>
        </>
    )
}

export const MusicPlayerSlider = () => {
    const theme = useTheme();
    const WallPaper = styled("div")({
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        overflow: "hidden",
        background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
        transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
        "&::before": {
            content: '""',
            width: '140%',
            height: '140%',
            position: 'absolute',
            top: "-40%",
            right: "-50%",
            background:
                "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgb(62, 79, 249, 0) 64%)",
        },
        "&::after": {
            content: '""',
            width: "140%",
            height: "140%",
            position: "absolute",
            bottom: "-50%",
            left: "-30%",
            background:
                "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",
            transform: "rotate(30deg)",
        },
    });

    const Widget = styled("div")({
        padding: 16,
        borderRadius: 16,
        width: 343,
        maxWidth: "100%",
        margin: "auto",
        position: "relative",
        zIndex: 1,
        backgroundColor: "rgba(255,255,255,0.4)",
        backdropFilter: "blur(40px)",
        ...theme.applyStyles("dark", {
            backgroundColor: "rgba(0,0,0,0.6)",
        }),
    });

    const CoverImage = styled("div")({
        width: 100,
        height: 100,
        objectFit: "cover",
        overflow: "hidden",
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: "rgba(0,0,0,0.08)",
        "& > img": {
            width: "100%",
        },
    });

    const TinyText = styled(Typography)({
        fontSize: "0.75rem",
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
    });

    const duration = 200;
    const [position, setPosition] = React.useState(32);
    const [paused, setPaused] = React.useState(false);

    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = (value - minute * 60);
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }

    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Music Player Slider
            </Typography>
            <Box
                sx={{ width: "100%", overflow: "hidden", position: "relative", p: 3 }}
            >
                <Widget>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CoverImage>
                            <img
                                alt="can't win - Chilling Sunday"
                                src="src/assets/images/sliders/chilling-sunday.jpg"
                            />
                        </CoverImage>
                        <Box sx={{ ml: 1.5, minWidth: 0 }}>
                            <Typography
                                variant="caption"
                                sx={{ color: "text.secondary", fontWeight: 500 }}
                            >
                                Jun Palse
                            </Typography>
                            <Typography noWrap>
                                <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
                            </Typography>
                            <Typography noWrap sx={{ letterSpacing: -0.25 }}>
                                Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
                            </Typography>
                        </Box>
                    </Box>
                    <Slider
                        aria-label="time-indicator"
                        size="small"
                        value={position}
                        min={0}
                        step={1}
                        max={duration}
                        onChange={(_, value) => setPosition(value)}
                        sx={(t) => ({
                            color: 'rgba(0,0,0,0.87)',
                            height: 4,
                            '& .MuiSlider-thumb': {
                                width: 8,
                                height: 8,
                                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                '&::before': {
                                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                },
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: `0px 0px 0px 8px ${'rgb(0 0 0 / 16%)'}`,
                                    ...t.applyStyles('dark', {
                                        boxShadow: `0px 0px 0px 8px ${'rgb(255 255 255 / 16%)'}`,
                                    }),
                                },
                                '&.Mui-active': {
                                    width: 20,
                                    height: 20,
                                },
                            },
                            '& .MuiSlider-rail': {
                                opacity: 0.28,
                            },
                            ...t.applyStyles('dark', {
                                color: '#fff',
                            }),
                        })}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mt: -2,
                        }}
                    >
                        <TinyText>{formatDuration(position)}</TinyText>
                        <TinyText>{formatDuration(duration - position)}</TinyText>
                    </Box>
                    <Box
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mt: -1,
                            '& svg': {
                                color: '#000',
                                ...theme.applyStyles('dark', {
                                    color: '#fff',
                                }),
                            },
                        })}
                    >
                        <IconButton aria-label="previous song">
                            <FastRewindRounded fontSize="large" />
                        </IconButton>
                        <IconButton
                            aria-label={paused ? "play" : "pause"}
                            onClick={() => setPaused(!paused)}
                        >
                            {paused ? (
                                <PlayArrowRounded sx={{ fontSize: "3rem" }} />
                            ) : (
                                <PauseRounded sx={{ fontSize: "3rem" }} />
                            )}
                        </IconButton>
                        <IconButton aria-label="next song">
                            <FastForwardRounded fontSize="large" />
                        </IconButton>
                    </Box>
                    <Stack
                        spacing={2}
                        direction="row"
                        sx={(theme) => ({
                            mb: 1,
                            px: 1,
                            "& > svg": {
                                color: "rgba(0,0,0,0.4)",
                                ...theme.applyStyles("dark", {
                                    color: "rgba(255,255,255,0.4)",
                                }),
                            },
                        })}
                        alignItems="center"
                    >
                        <VolumeDownRounded />
                        <Slider
                            aria-label="Volume"
                            defaultValue={30}
                            sx={(t) => ({
                                color: "rgba(0,0,0,0.87)",
                                "& .MuiSlider-track": {
                                    border: "none",
                                },
                                "& .MuiSlider-thumb": {
                                    width: 24,
                                    height: 24,
                                    backgroundColor: "#fff",
                                    "&::before": {
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                                    },
                                    "&:hover, &.Mui-focusVisible, &.Mui-active": {
                                        boxShadow: "none",
                                    },
                                },
                                ...t.applyStyles("dark", {
                                    color: "#fff",
                                }),
                            })}
                        />
                        <VolumeUpRounded />
                    </Stack>
                </Widget>
                <WallPaper />
            </Box>
        </>
    );
};

export const CustomizedSlider = () => {
    const theme = useTheme();

    function ValueLabelComponent(props) {
        const { children, value } = props;

        return (
            <Tooltip enterTouchDelay={0} placement="top" title={value}>
                {children}
            </Tooltip>
        );
    }

    ValueLabelComponent.propTypes = {
        children: PropTypes.element.isRequired,
        value: PropTypes.node,
    };

    const iOSBoxShadow =
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13), 0 0 0 1px rgba(0,0,0,0.02)";

    const IOSSlider = styled(Slider)({
        color: "#007bff",
        height: 5,
        padding: "15px 0",
        "& .MuiSlider-thumb": {
            height: 20,
            width: 20,
            backgroundColor: "#fff",
            boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.1)",
            "&:focus, &:hover, &.Mui-active": {
                boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
                "@media (hover: none)": {
                    boxShadow: iOSBoxShadow,
                },
            },
            "&:before": {
                boxShadow:
                    "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)",
            },
        },
        "& .MuiSlider-valueLabel": {
            fontSize: 12,
            fontWeight: "normal",
            top: -6,
            backgroundColor: "unset",
            color: theme.palette.text.primary,
            "&::before": {
                display: "none",
            },
            "& *": {
                background: "transparent",
                color: "#000",
                ...theme.applyStyles("dark", {
                    color: "#fff",
                }),
            },
        },
        "& .MuiSlider-track": {
            border: "none",
            height: 5,
        },
        "& .MuiSlider-rail": {
            opacity: 0.5,
            boxShadow: "inset 0px 0px 4px -2px #000",
            backgroundColor: "#d0d0d0",
        },
        ...theme.applyStyles("dark", {
            color: "#0a84ff",
        }),
    });

    const PrettoSlider = styled(Slider)({
        color: "#52af77",
        height: 8,
        "& .MuiSlider-track": {
            border: "none",
        },
        "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                boxShadow: "inherit",
            },
            "&::before": {
                display: "none",
            },
        },
        "& .MuiSlider-valueLabel": {
            lineHeight: 1.2,
            fontSize: 12,
            background: "unset",
            padding: 0,
            width: 32,
            borderRadius: "50% 50% 50% 0",
            backgroundColor: "#52af77",
            transformOrigin: "bottom left",
            transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
            "&::before": { display: "none" },
            "&.MuiSlider-valueLabelOpen": {
                transform: "translate(50%, -100%), rotate(-45deg) scale(1)",
            },
            "& > *": {
                transform: "rotate(45deg)",
            },
        },
    });

    const AirbnbSlider = styled(Slider)({
        color: "#318589",
        height: 3,
        padding: "13px 0",
        "& .MuiSlider-thumb": {
            height: 27,
            width: 27,
            backgroundColor: "#fff",
            border: "1px solid currentColor",
            "&:hover": {
                boxShadow: "0 0 0 8px rgba(50, 133, 137, 0.16)",
            },
            "& .airbnb-bar": {
                height: 9,
                width: 1,
                backgroundColor: "currentColor",
                marginLeft: 1,
            },
        },
        "& MuiSlider-track": {
            height: 3,
        },
        "& .MuiSlider-rail": {
            color: "#d8d8d8",
            opacity: 1,
            height: 3,
            ...theme.applyStyles("dark", {
                color: "#bfbfbf",
                opacity: undefined,
            }),
        },
    });

    function AirbnbThumbComponent(props) {
        const { children, ...other } = props;
        return (
            <SliderThumb {...other}>
                {children}
                <span className="airbnb-bar" />
                <span className="airbnb-bar" />
                <span className="airbnb-bar" />
            </SliderThumb>
        );
    }

    AirbnbThumbComponent.propTypes = {
        children: PropTypes.node,
    };

    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Customized Slider
            </Typography>
            <Box sx={{ width: 320, mx: "auto" }}>
                <Typography gutterBottom>iOS</Typography>
                <IOSSlider
                    aria-label="ios slider"
                    defaultValue={60}
                    valueLabelDisplay="on"
                />
                <Box sx={{ m: 3 }} />
                <Typography gutterBottom>pretto.fr</Typography>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={20}
                />
                <Box sx={{ m: 3 }} />
                <Typography gutterBottom>Tooltip value label</Typography>
                <Slider
                    valueLabelDisplay="auto"
                    slots={{
                        valueLabel: ValueLabelComponent,
                    }}
                    aria-label="custom thumb label"
                    defaultValue={20}
                />
                <Box sx={{ m: 3 }} />
                <Typography gutterBottom>Airbnb</Typography>
                <AirbnbSlider
                    slots={{ thumb: AirbnbThumbComponent }}
                    getAriaLabel={(index) =>
                        index === 0 ? "Mininum price" : "Maxinum price"
                    }
                    defaultValue={[20, 40]}
                />
            </Box>
        </>
    );
};

export const ColorSlider = () => {
    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Color Slider
            </Typography>
            <Box sx={{ width: 300, mx: "auto" }}>
                <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valueText}
                    color="secondary"
                />
            </Box>
        </>
    );
};

export const InputSlider = () => {
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === "" ? 0 : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    const Input = styled(MuiInput)`
    width: 42px;
  `;

    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Input Slider
            </Typography>
            <Box sx={{ width: 250, mx: "auto" }}>
                <Typography id="input-slider" gutterBottom>
                    Volume
                </Typography>
                <Grid container spacing={2} sx={{ alignIems: "center" }}>
                    <Grid item>
                        <VolumeUp />
                    </Grid>
                    <Grid item xs>
                        <Slider
                            value={typeof value === "number" ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            value={value}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: "number",
                                "aria-labelledby": "input-slider",
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export const MinimumDistanceSlider = () => {
    const minDistance = 10;
    const [value1, setValue1] = React.useState([20, 37]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    const [value2, setValue2] = React.useState([20, 37]);

    const handleChange2 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue);
        }
    };

    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Minimum Distance Slider
            </Typography>
            <Box sx={{ width: 300, mx: "auto" }}>
                <Slider
                    getAriaLabel={() => "Minimum distance"}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valueText}
                    disableSwap
                />
                <Slider
                    getAriaLabel={() => "Minimum distance shift"}
                    value={value2}
                    onChange={handleChange2}
                    valueLabelDisplay="auto"
                    getAriaValueText={valueText}
                    disableSwap
                />
            </Box>
        </>
    );
};

export const RangeSlider = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Range Slider
            </Typography>
            <Box sx={{ width: 300, mx: "auto" }}>
                <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valueText}
                />
            </Box>
        </>
    );
};

export const DiscreteSliderLabel = () => {
    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Discrete Slider Label
            </Typography>
            <Box sx={{ width: 300, mx: "auto" }}>
                <Slider
                    aria-label="Always visible"
                    defaultValue={80}
                    getAriaValueText={valueText}
                    step={10}
                    marks={marks}
                    valueLabelDisplay="on"
                />
            </Box>
        </>
    );
};

export const DiscreteSliderValues = () => {
    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Discrete Slider Values
            </Typography>
            <Box sx={{ width: 300, mx: "auto" }}>
                <Slider
                    aria-label="Restricted values"
                    defaultValue={20}
                    getAriaValueText={valueText}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </Box>
        </>
    );
};

export const DiscreteSliderMarks = () => {
    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Discrete Slider Marks
            </Typography>
            <Box sx={{ width: 300, mx: "auto" }}>
                <Slider
                    aria-label="Custom marks"
                    defaultValue={20}
                    getAriaValueText={valueText}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </Box>
        </>
    );
};

export const DiscreteSliderSteps = () => {
    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Discrete Slider Steps
            </Typography>
            <Box sx={{ width: 300, mx: "auto" }}>
                <Slider
                    aria-label="Small steps"
                    defaultValue={0.00000005}
                    getAriaValueText={valueText}
                    step={0.00000001}
                    marks
                    min={-0.00000005}
                    max={0.0000001}
                    valueLabelDisplay="auto"
                />
            </Box>
        </>
    );
};

export const DiscreteSlider = () => {
    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Discrete Slider
            </Typography>
            <Box sx={{ width: 300, mx: "auto" }}>
                <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valueText}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={10}
                    marks
                    min={10}
                    max={110}
                />
                <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
            </Box>
        </>
    );
};

export const SliderSizes = () => {
    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Slider Sizes
            </Typography>
            <Box sx={{ width: 300, mx: "auto" }}>
                <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                />
                <Slider
                    defaultValue={50}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                />
            </Box>
        </>
    );
};

export const ContinuousSlider = () => {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Continuous Slider
            </Typography>
            <Box sx={{ width: 200, mx: "auto" }}>
                <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
                    <VolumeDown />
                    <Slider aria-label="Volume" value={value} onChange={handleChange} />
                    <VolumeUp />
                </Stack>
                <Slider disabled defaultValue={30} aria-label="Disabled slider" />
            </Box>
        </>
    );
};
