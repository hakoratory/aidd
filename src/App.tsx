import React, { useState, useMemo } from 'react';
import { TextField, Button, Box, Typography, LinearProgress } from '@mui/material';
import "./App.css"
import reactLogo from './assets/react.svg'
import useApi from './hooks/useApi';

function App() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const { post } = useApi();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handleClick = () => {
    post(name, mail);
  };

  const getProgressColor = (value, max) => {
    return value > max ? 'error' : 'primary';
  };

  const renderProgress = (value, max) => {
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

  const isFormValid = useMemo(() => {
    return name.length <= 50 && mail.length <= 255;
  }, [name, mail]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, maxWidth: 300, margin: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
        <img src={reactLogo} alt="React Logo" style={{ width: 50, height: 50 }} />
        <Typography variant="h5" component="h1">Sample System</Typography>
      </Box>

      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={handleNameChange}
      />
      {renderProgress(name.length, 50)}

      <TextField
        label="Mail Address"
        variant="outlined"
        type="email"
        fullWidth
        value={mail}
        onChange={handleMailChange}
      />
      {renderProgress(mail.length, 255)}

      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        disabled={!isFormValid}
      >
        送信
      </Button>
    </Box>
  );
}

export default App;
