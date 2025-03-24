import * as React from "react";
import MyContainer from "../component/MyContainer";
import {
    Abc as AbcIcon,
    AcUnit as AcUnitIcon,
    AccessAlarm as AccessAlarmIcon,
    AccessAlarms as AccessAlarmsIcon,
    AccessTime as AccessTimeIcon,
    AccessTimeFilled as AccessTimeFilledIcon,
    Accessibility as AccessibilityIcon,
    AccessibilityNew as AccessibilityNewIcon,
    Accessible as AccessibleIcon,
    AccessibleForward as AccessibleForwardIcon,
} from "@mui/icons-material";
import { Typography, Box, Grid } from "@mui/material";

const icons = [
    { component: AbcIcon, label: "Abc" },
    { component: AcUnitIcon, label: "AcUnit" },
    { component: AccessAlarmIcon, label: "AccessAlarm" },
    { component: AccessAlarmsIcon, label: "AccessAlarms" },
    { component: AccessTimeIcon, label: "AccessTime" },
    { component: AccessTimeFilledIcon, label: "AccessTimeFilled" },
    { component: AccessibilityIcon, label: "Accessibility" },
    { component: AccessibilityNewIcon, label: "AccessibilityNew" },
    { component: AccessibleIcon, label: "Accessible" },
    { component: AccessibleForwardIcon, label: "AccessibleForward" },
];

export const MaterialIconsFilled = () => {
    return (
        <MyContainer title="Material Icons">
            <Box display="flex" justifyContent="center" width="90%">
                <Grid container spacing={4}  maxWidth={800}>
                    {icons.map(({ component: Icon, label }, index) => (
                        <Grid item xs={2.4} key={index}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon fontSize="large" />
                                <Typography sx={{ fontSize: "10px", mt: 1 }}>{label}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </MyContainer>
    );
};
