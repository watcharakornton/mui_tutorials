import * as React from 'react'
import MyContainer from '../component/MyContainer'
import {
    Button,
    Menu,
    MenuItem,
    Divider,
    Paper,
    MenuList,
    ListItemText,
    ListItemIcon,
    Typography,
} from '@mui/material';
import {
    ContentCut,
    ContentCopy,
    ContentPaste,
    Cloud,
    Check,
} from '@mui/icons-material';

export const DenseMenu = () => {
    return (
        <MyContainer title="Dense Menu">
            <Paper sx={{ width: 320 }}>
                <MenuList dense>
                    <MenuItem>
                        <ListItemText inset>Single</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText inset>1.15</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText inset>Double</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Check />
                        </ListItemIcon>
                        Custom: 1.2
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemText>Add space before paragraph</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText>Add space after paragraph</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemText>Custom spacing...</ListItemText>
                    </MenuItem>
                </MenuList>
            </Paper>
        </MyContainer>
    )
}

export const IconMenu = () => {
    return (
        <MyContainer title="IconMenu">
            <Paper sx={{ width: 320, maxWidth: '100%' }}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCut fontSize='small' />
                        </ListItemIcon>
                        <ListItemText>Cut</ListItemText>
                        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                            ⌘X
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCopy fontSize='small' />
                        </ListItemIcon>
                        <ListItemText>Copy</ListItemText>
                        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                            ⌘C
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentPaste fontSize='small' />
                        </ListItemIcon>
                        <ListItemText>Paste</ListItemText>
                        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                            ⌘V
                        </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Cloud fontSize='small' />
                        </ListItemIcon>
                        <ListItemText>Web Clipboard</ListItemText>
                    </MenuItem>
                </MenuList>
            </Paper>
        </MyContainer>
    )
}

export const BasicMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MyContainer title="Basic Menu">
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Dashboard
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My Account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        </MyContainer>
    )
}