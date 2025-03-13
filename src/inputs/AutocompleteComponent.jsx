import * as React from 'react';
import { TextField, Autocomplete, useAutocomplete, Stack, Box } from '@mui/material'

import { useTheme } from '@mui/material/styles';
import { styled, lighten, darken } from '@mui/system';

import top100Films from '../data/top100Films';
import countries from '../data/countries';

export const DisabledOptions = () => {
    const timeSlots = Array.from(new Array(24 * 2)).map(
        (_, index) =>
            `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'
            }`,
    );

    return (
        <>
            <Autocomplete
                options={timeSlots}
                getOptionDisabled={(option) =>
                    option === timeSlots[0] || option === timeSlots[2]
                }
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Disabled options" />}
            />
        </>
    )
}

export const RenderGroup = () => {
    const theme = useTheme();

    const GroupHeader = styled('div')({
        position: 'sticky',
        top: '-8px',
        padding: '4px 10px',
        color: theme.palette.primary.main,
        backgroundColor: lighten(theme.palette.primary.light, 0.85),
        ...theme.applyStyles('dark', {
            backgroundColor: darken(theme.palette.primary.main, 0.8),
        }),
    });

    const GroupItems = styled('ul')({
        padding: 0,
    });

    const options = top100Films.map((option) => {
        const firstLetter = option.label[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        }
    })

    return (
        <>
            <Autocomplete
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.label}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="With categories" />}
                renderGroup={(params) => (
                    <li key={params.key}>
                        <GroupHeader>{params.group}</GroupHeader>
                        <GroupItems>{params.children}</GroupItems>
                    </li>
                )}
            />
        </>
    );
}

export const Grouped = () => {
    const options = top100Films.map((option) => {
        const firstLetter = option.label[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    return (
        <Autocomplete
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.label}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="With categories" />
            }
        />
    );
}

export const CountrySelect = () => {
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <Box
                        key={key}
                        component="li"
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                    >
                        <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                        />
                        {option.label} ({option.code}) + {option.phone}
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    slotProps={{
                        htmlInput: {
                            ...params.inputProps,
                            autoComplete: 'new-password',
                        },
                    }}
                />
            )}
        />
    );
}

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
        <>
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </>
    );
}
