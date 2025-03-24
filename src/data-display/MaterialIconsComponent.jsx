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
    AccountBalance as AccountBalanceIcon,
    AccountBalanceWallet as AccountBalanceWalletIcon,

    AbcOutlined as AbcIconOutlined,
    AcUnitOutlined as AcUnitIconOutlined,
    AccessAlarmOutlined as AccessAlarmIconOutlined,
    AccessAlarmsOutlined as AccessAlarmsIconOutlined,
    AccessTimeOutlined as AccessTimeIconOutlined,
    AccessTimeFilledOutlined as AccessTimeFilledIconOutlined,
    AccessibilityOutlined as AccessibilityIconOutlined,
    AccessibilityNewOutlined as AccessibilityNewIconOutlined,
    AccessibleOutlined as AccessibleIconOutlined,
    AccessibleForwardOutlined as AccessibleForwardIconOutlined,
    AccountBalanceOutlined as AccountBalanceIconOutlined,

} from "@mui/icons-material";
import { Typography, Box, Grid } from "@mui/material";

const iconsFilled = [
    { component: AbcIcon, label: "Abc" },
    { component: AcUnitIcon, label: "AcUnit" },
    { component: AccessAlarmIcon, label: "AccessAlarm" },
    { component: AccessAlarmsIcon, label: "AccessAlarms" },
    { component: AccessTimeIcon, label: "AccessTime" },
    { component: AccessTimeFilledIcon, label: "AccessTimeFilled" },
    { component: AccessibilityIcon, label: "Accessibility" },
    { component: AccessibilityNewIcon, label: "Accessibility New" },
    { component: AccessibleIcon, label: "Accessible" },
    { component: AccessibleForwardIcon, label: "Accessible Forward" },
    { component: AccountBalanceIcon, label: "Account Balance" },
    { component: AccountBalanceWalletIcon, label: "AccountBalanceWallet" },
];

const iconsOutlined = [
    { component: AbcIconOutlined, label: "AbcOutlined" },
    { component: AcUnitIconOutlined, label: "AcUnitOutlined" },
    { component: AccessAlarmIconOutlined, label: "AccessAlarmOutlined" },
    { component: AccessAlarmsIconOutlined, label: "AccessAlarmsOutlined" },
    { component: AccessTimeIconOutlined, label: "AccessTimeOutlined" },
    { component: AccessTimeFilledIconOutlined, label: "AccessTimeFilledOutlined" },
    { component: AccessibilityIconOutlined, label: "AccessibilityOutlined" },
    { component: AccessibilityNewIconOutlined, label: "AccessibilityNewOutlined" },
    { component: AccessibleIconOutlined, label: "AccessibleOutlined" },
    { component: AccessibleForwardIconOutlined, label: "AccessibleForwardOutlined" },
    { component: AccountBalanceIconOutlined, label: "AccountBalanceOutlined" },
];

const IconsBox = ({ icons }) => {
    return (
        <Box display="flex" justifyContent="center" width="90%">
            <Grid container spacing={4} maxWidth={800}>
                {icons.map(({ component: Icon, label }, index) => (
                    <Grid item xs={4} md={3} lg={2.4} key={index}>
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
    )
}


export const MaterialIconsOutlined = () => {
    return (
        <MyContainer title="Material Icons Outlined">
            <IconsBox icons={iconsOutlined} />
        </MyContainer>
    )
}

export const MaterialIconsFilled = () => {
    return (
        <MyContainer title="Material Icons Filled">
            <IconsBox icons={iconsFilled} />
        </MyContainer>
    );
};
