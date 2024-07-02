import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function SelectField({ label, name, control, width, options }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          select
          label={label}
          fullWidth
          {...field}
          sx={{ my: 2, mx: 3, width }}
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
}

export default SelectField;
