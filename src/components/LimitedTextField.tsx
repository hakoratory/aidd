// src/components/LimitedTextField.tsx

import React from 'react';
import { TextField, Box, Typography, LinearProgress } from '@mui/material';

interface LimitedTextFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
}

const LimitedTextField: React.FC<LimitedTextFieldProps> = ({ label, value, onChange, maxLength }) => {
  const getProgressColor = (value: number, max: number): 'error' | 'primary' => {
    return value > max ? 'error' : 'primary';
  };

  const renderProgress = (value: number, max: number) => {
    const progress = (value / max) * 100;
    return (
      <Box sx={{ width: '100%', mt: 1 }}>
        <LinearProgress
          variant="determinate"
          value={Math.min(progress, 100)}
          color={getProgressColor(value, max)}
        />
        <Typography variant="caption" color={getProgressColor(value, max)}>
          {value}/{max}
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
      />
      {renderProgress(value.length, maxLength)}
    </>
  );
};

export default LimitedTextField;
