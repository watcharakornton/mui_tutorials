import * as React from "react";
import { styled, useTheme } from '@mui/material/styles';
import MyContainer from "../component/MyContainer";
import MyTitle from "../component/MyTitle";
import {
    Chip,
    Box,
    Stack,
    Avatar,
    Paper,
} from "@mui/material";
import {
    Done as DoneIcon,
    Delete as DeleteIcon,
    Face as FaceIcon,
    TagFaces as TagFacesIcon,
} from '@mui/icons-material';

export const ChipsArray = () => {
    const theme = useTheme();

    const ListItem = styled('li')({
        margin: theme.spacing(0.5),
    });

    const [chipdata, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <MyContainer title="Chips Array">
            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0,
                }}
                component="ul"
            >
                {chipdata.map((data) => {
                    let icon;

                    if (data.label === 'React') {
                        icon = <TagFacesIcon />;
                    }
                    
                    return (
                        <ListItem>
                            <Chip 
                                icon={icon}
                                label={data.label}
                                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                            />
                        </ListItem>
                    );
                })}
            </Paper>
        </MyContainer>
    );
}

export const MultilineChips = () => {
    return (
        <MyContainer title="Multiline Chips">
            <Box sx={{ width: 100 }}>
                <Chip 
                    sx={{
                        height: 'auto',
                        '& .MuiChip-label': {
                            display: 'block',
                            whiteSpace: 'normal',
                        },
                    }}
                    label="This is a chip that has multiple lines."
                />
            </Box>
        </MyContainer>
    )
}

export const SizesChips = () => {
    return (
        <MyContainer title="Sizes Chip">
            <Stack direction="row" spacing={1}>
                <Chip label="Small" size="small" />
                <Chip label="Small" size="small" variant="outlined" />
            </Stack>
        </MyContainer>
    );
}

export const ColorChips = () => {
    return (
        <>
            <MyTitle title="Color Chips" />
            <MyContainer>
                <Stack spacing={1} sx={{ alignItems: 'center' }}>
                    <Stack direction="row" spacing={1}>
                        <Chip label="primary" color="primary" />
                        <Chip label="success" color="success" />
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Chip label="primary" color="primary" variant="outlined" />
                        <Chip label="success" color="success" variant="outlined" />
                    </Stack>
                </Stack>
            </MyContainer>
        </>
    )
}

export const IconChips = () => {
    return (
        <>
            <MyTitle title="Icon Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip icon={<FaceIcon />} label="With Icon" />
                    <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
                </Stack>
            </MyContainer>
        </>
    )
}

export const AvatarChips = () => {
    return (
        <>
            <MyTitle title="Avatar Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
                    <Chip
                        avatar={<Avatar alt="Natacha" src="src/assets/images/avatar/1.jpg" />}
                        label="Avatar"
                        variant="outlined"
                    />
                </Stack>
            </MyContainer>
        </>
    )
}

export const CustomDeleteIconChips = () => {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <>
            <MyTitle title="Custom Delete Icon Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip
                        label="Custom delete icon"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<DoneIcon />}
                    />
                    <Chip
                        label="Custom delete icon"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<DeleteIcon />}
                        variant="outlined"
                    />
                </Stack>
            </MyContainer>
        </>
    )
}

export const ClickableAndDeletableChips = () => {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <>
            <MyTitle title="Clickable and Deletable Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip
                        label="Clickable Deletable"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                    <Chip
                        label="Clickable Deletable"
                        variant="outlined"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                </Stack>
            </MyContainer>
        </>
    )
}

export const DeletableChips = () => {
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <>
            <MyTitle title="Deletable Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip label="Deletable" onDelete={handleDelete} />
                    <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
                </Stack>
            </MyContainer>
        </>
    )
}

export const ClickableChips = () => {
    const handleClick = () => {
        console.info('You clicked the clip');
    };

    return (
        <>
            <MyTitle title="Clickable Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip label="Clickable" onClick={handleClick} />
                    <Chip label="Clickable" variant="outlined" onClick={handleClick} />
                </Stack>
            </MyContainer>
        </>
    )
}

export const BasicChip = () => {
    return (
        <>
            <MyTitle title="Basic Chips" />
            <MyContainer>
                <Stack direction="row" spacing={1}>
                    <Chip label="Chip Filled" />
                    <Chip label="Chip Outlined" variant="outlined" />
                </Stack>
            </MyContainer>
        </>
    )
}
