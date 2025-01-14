// App.tsx

import React, { useState, useMemo } from 'react';
import { Button, Box, Typography } from '@mui/material';
import "./App.css"
import reactLogo from './assets/react.svg'
import useApi from './hooks/useApi';
import LimitedTextField from './components/LimitedTextField';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const { post } = useApi();

  const handleClick = () => {
    post(name, mail);
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

      <LimitedTextField
        label="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        maxLength={50}
      />

      <LimitedTextField
        label="Mail Address"
        value={mail}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMail(e.target.value)}
        maxLength={255}
      />

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
