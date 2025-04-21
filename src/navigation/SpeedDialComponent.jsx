import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Box,
    Backdrop,
    SpeedDial,
    SpeedDialIcon,
    SpeedDialAction,
} from '@mui/material';
import {
    FileCopyOutlined as FileCopyIcon,
    Save as SaveIcon,
    Print as PrintIcon,
    Share as ShareIcon,
    Edit as EditIcon,
} from '@mui/icons-material';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

export const SpeedDialTooltipOpen = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <MyContainer title="Speed Dial Tooltip Open">
            <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <Backdrop open={open} />
                <SpeedDial
                    ariaLabel='SpeedDial tooltip example'
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={handleClose}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </MyContainer>
    );
}

export const OpenIconSpeedDial = () => {
    return (
        <MyContainer title="Open Icon Speed Dial">
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel='SpeedDial openIcon example'
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </MyContainer>
    )
}

export const BasicSpeedDial = () => {
    return (
        <MyContainer title="Basic Speed Dial">
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel='SpeedDial basic example'
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </MyContainer>
    )
}