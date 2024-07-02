import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function Datefield(props) {
  const { label, width, name, control } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <DatePicker
            label={label}
            value={value || null}
            onChange={onChange}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ width }}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
}
