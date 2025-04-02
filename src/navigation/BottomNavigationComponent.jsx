import * as React from 'react'
import MyContainer from '../component/MyContainer'
import {
    Box,
    Button,
    BottomNavigation,
    BottomNavigationAction,
} from '@mui/material';
import {
    Restore as RestoreIcon,
    Favorite as FavoriteIcon,
    LocationOn as LocationOnIcon,
    Folder as FolderIcon,
} from '@mui/icons-material';



export const FixedBottomNavigation = () => {

    return (
        <MyContainer title="Fixed Bottom Navigation">
            <Button variant='outlined' href="/bottom-navigation/fixed-bottom-navigation">View Fixed Bottom Naviation</Button>
        </MyContainer>
    )
}

export const LabelBottomNavigation = () => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MyContainer title="Label Bottom Navigation">
            <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon />}
                />
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
            </BottomNavigation>
        </MyContainer>
    )
}

export const SimpleBottomNavigation = () => {
    const [value, setValue] = React.useState(0);

    return (
        <MyContainer title="Simple Bottom Navigation">
            <Box sx={{ width: 500 }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Box>
        </MyContainer>
    )
}
