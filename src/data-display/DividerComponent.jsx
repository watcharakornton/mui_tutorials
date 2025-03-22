import * as React from "react";
import MyContainer from "../component/MyContainer";
import {
    Typography,
    Card,
    Box,
    Chip,
    Stack,
    Divider,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

export const DividerVariants = () => {
    const style = {
        py: 0,
        width: '100%',
        maxWidth: 360,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
    };

    return (
        <MyContainer title="Divider Variants">
            <List sx={style}>
                <ListItem>
                    <ListItemText primary="Full width variants below" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText primary="Inset variant below" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemText primary="Middle variant below" />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                    <ListItemText primary="List item" />
                </ListItem>
            </List>
        </MyContainer>
    )
}

export const IntroDivider = () => {
    return (
        <MyContainer title="Intro Divider">
            <Card variant="outlined" sx={{ maxWidth: 360 }}>
                <Box sx={{ p: 2 }}>
                    <Stack
                        direction="row"
                        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                    >
                        <Typography gutterBottom variant="h5" component="div">
                            Toothbrush
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            $4.50
                        </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                        just down the hall.
                    </Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 2 }}>
                    <Typography gutterBottom variant="body2">
                        Select type
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip color="primary" label="Soft" size="small" />
                        <Chip label="Medium" size="small" />
                        <Chip label="Hard" size="small" />
                    </Stack>
                </Box>
            </Card>
        </MyContainer>
    )
}
