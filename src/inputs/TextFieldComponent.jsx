import * as React from "react";
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  useFormControl,
  Typography,
  Box,
  TextField,
  MenuItem,
  IconButton,
  FilledInput,
  OutlinedInput,
  FormHelperText,
  filledInputClasses,
  inputBaseClasses,
  Stack,
  Paper,
  InputBase,
  Divider,
} from "@mui/material";

import {
  AccountCircle,
  Visibility,
  VisibilityOff,
  Menu as MenuIcon,
  Search as SearchIcon,
  Directions as DirectionsIcon,
} from "@mui/icons-material";

export const MyFormHelperText = () => {
  function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
      if (focused) {
        return "This field is being focused";
      }

      return "Helper text";
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  }

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        My Form Helper Text
      </Typography>
      <form noValidate autoComplete="off">
        <FormControl sx={{ width: "25ch" }}>
          <OutlinedInput placeholder="Please enter text" />
          <MyFormHelperText />
        </FormControl>
      </form>
    </>
  );
};

export const CustomziedInputBase = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Customized Input Base
      </Typography>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export const ColorTextFields = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Color Text Fields
      </Typography>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Outlined secondary" color="secondary" focused />
        <TextField
          label="Filled success"
          variant="filled"
          color="success"
          focused
        />
        <TextField
          label="Standard warning"
          variant="standard"
          color="warning"
          focused
        />
      </Box>
    </>
  );
};

export const FullWidthTextField = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Full Width Text Field
      </Typography>
      <Box sx={{ width: 500, maxWidth: "100%" }}>
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </Box>
    </>
  );
};

export const TextFieldHiddenLabel = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Text Field Hidden Label
      </Typography>
      <Stack
        component="form"
        sx={{ width: "25ch" }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="Normal"
          variant="filled"
        />
      </Stack>
    </>
  );
};

export const TextFieldSizes = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Text Field Sizes
      </Typography>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
          <TextField
            label="Size"
            id="outlined-size-normal"
            defaultValue="Normal"
          />
        </div>
        <div>
          <TextField
            label="Size"
            id="filled-size-small"
            defaultValue="Small"
            variant="filled"
            size="small"
          />
          <TextField
            label="Size"
            id="filled-size-normal"
            defaultValue="Normal"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            label="Size"
            id="standard-size-small"
            defaultValue="Small"
            size="small"
            variant="standard"
          />
          <TextField
            label="Size"
            id="standard-size-normal"
            defaultValue="Normal"
            variant="standard"
          />
        </div>
      </Box>
    </>
  );
};

export const InputSuffixShrink = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Input Suffix Shrink
      </Typography>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-suffix-shrink"
          label="Outlined"
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    opacity: 0,
                    pointerEvents: "none",
                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                      opacity: 1,
                    },
                  }}
                >
                  lbs
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          id="filled-suffix-shrink"
          label="Filled"
          variant="filled"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    alignSelf: "flex-end",
                    opacity: 0,
                    pointerEvents: "none",
                    [`.${filledInputClasses.root} $`]: {
                      marginBottom: "7.5px",
                    },
                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                      opacity: 1,
                    },
                  }}
                >
                  days
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          id="standard-suffix-shrink"
          label="Standard"
          variant="standard"
          slotProps={{
            htmlInput: {
              sx: { textAlign: "right" },
            },
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    alignSelf: "flex-end",
                    margin: 0,
                    marginBottom: "5px",
                    opacity: 0,
                    pointerEvents: "none",
                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                      opacity: 1,
                    },
                  }}
                >
                  @gmail.com
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    </>
  );
};

export const InputAdornments = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.perventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Input Adornments
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <TextField
            label="With normal TextField"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              },
            }}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Weight
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
        </div>
        <div>
          <TextField
            label="With normal TextField"
            id="filled-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              },
            }}
            variant="filled"
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <FilledInput
              id="filled-adornment-weight"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="filled-weight-helper-text">
              Weight
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div>
          <TextField
            label="With normal TextField"
            id="standard-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              },
            }}
            variant="standard"
          />
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
            <Input
              id="standard-adornment-weight"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="standard-weight-helper-text">
              Weight
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hidden the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </div>
      </Box>
    </>
  );
};

export const InputWithIcon = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Input With Icon
      </Typography>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            With a start adornment
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          id="input-with-icon-textfield"
          label="TextField"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="With sx" variant="standard" />
        </Box>
      </Box>
    </>
  );
};

export const SelectTextFields = () => {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Select Text Fields
      </Typography>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency-native"
            select
            label="Native select"
            defaultValue="EUR"
            slotProps={{
              select: {
                native: true,
              },
            }}
            helperText="Please select your curency"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="filled-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
            variant="filled"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="filled-select-currency-native"
            select
            label="Native select"
            defaultValue="EUR"
            slotProps={{
              select: {
                native: true,
              },
            }}
            helperText="Please select your currency"
            variant="filled"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
            variant="standard"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-select-currency-native"
            select
            label="Native select"
            defaultValue="EUR"
            slotProps={{
              select: {
                native: true,
              },
            }}
            helperText="Please select your currency"
            variant="standard"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
      </Box>
    </>
  );
};

export const MultilineTextFields = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Multiline Text Fields Component
      </Typography>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
          />
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </div>
        <div>
          <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="filled"
          />
          <TextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="standard"
          />
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="standard"
          />
        </div>
      </Box>
    </>
  );
};

export const ValidationTextFields = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Validation Text Fields
      </Typography>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
          />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </div>
        <div>
          <TextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />
        </div>
      </Box>
    </>
  );
};

export const FormPropsTextFields = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Form Props Text Fields
      </Typography>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            disabled
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            od="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
        <div>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            disabled
            id="filled-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            id="filled-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            variant="filled"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextField
            id="filled-number"
            label="Number"
            type="number"
            variant="filled"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
          <TextField
            id="filled-search"
            label="Search field"
            type="Search"
            variant="filled"
          />
          <TextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            variant="standard"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            variant="standard"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
          />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="standard"
          />
        </div>
      </Box>
    </>
  );
};

export const BasicTextFields = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight="fontWeightMedium">
        Basic Text Fields
      </Typography>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </>
  );
};
