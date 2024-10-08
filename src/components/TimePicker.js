// src/components/TimePicker.js
import React, { useState } from 'react';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const TimePicker = ({ label, selectedTime, setSelectedTime }) => {
  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileTimePicker
        label={label}
        value={selectedTime}
        onChange={handleTimeChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            className="text-input"
            sx={{
              '& .MuiInputBase-root': {
                height: '40px',
                fontSize: '1rem', // Customize size with Tailwind if needed
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ccc',
                },
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;