import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from '../data/top100Films';
import Stack from '@mui/material/Stack';

export const Playground = () => {
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.label,
    };

    const flatProps = {
        options: top100Films.map((option) => option.label),
    };
    const [value, setValue] = React.useState(null);

    return (
        <Stack spacing={1} sx={{ width: 300 }}>
            <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                    <TextField {...params} label="disableCloseOnSelect" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                clearOnEscape
                id="disable-on-escape"
                renderInput={(params) => (
                    <TextField {...params} label="clearOnEscape" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-clearable"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="disableClearable" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="include-input-in-list"
                includeInputInList
                renderInput={(params) => (
                    <TextField {...params} label="disableClearable" variant="standard" />
                )}
            />
            <Autocomplete
                {...flatProps}
                id="flat-demo"
                renderInput={(params) => (
                    <TextField {...params} label="flat" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="controlled-demo"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => (
                    <TextField {...params} label="controlled" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="auto-complete"
                autoComplete
                includeInputInList
                renderInput={(params) => (
                    <TextField {...params} label="autoComplete" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-list-wrap"
                disableListWrap
                renderInput={(params) => (
                    <TextField {...params} label="disableListWrap" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="open-on-focus"
                openOnFocus
                renderInput={(params) => (
                    <TextField {...params} label="openOnFocus" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="auto-highlight"
                autoHighlight
                renderInput={(params) => (
                    <TextField {...params} label="autoHighlight" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disabled"
                disabled
                renderInput={(params) => (
                    <TextField {...params} label="disabled" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-portal"
                disablePortal
                renderInput={(params) => (
                    <TextField {...params} label="disablePortal" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="blur-on-select"
                blurOnSelect
                renderInput={(params) => (
                    <TextField {...params} label="blurOnSelect" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="clear-on-blur"
                clearOnBlur
                renderInput={(params) => (
                    <TextField {...params} label="clearOnBlur" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="select-on-focus"
                selectOnFocus
                renderInput={(params) => (
                    <TextField {...params} label="selectOnFocus" variant="standard" />
                )}
            />
            <Autocomplete
                {...flatProps}
                id="readOnly"
                readOnly
                defaultValue={flatProps.options[13]}
                renderInput={(params) => (
                    <TextField {...params} label="readOnly" variant="standard" />
                )}
            />
        </Stack>
    )
}

export const ComboBox = () => {
    return (
        <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
        />
    );
}
