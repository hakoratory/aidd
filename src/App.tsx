import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import "./App.css"
import reactLogo from './assets/react.svg'
import useApi from './hooks/useApi';

function App() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const { post } = useApi();

  const handleClick = () => {
    post(name, mail);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, maxWidth: 300, margin: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
        <img src={reactLogo} alt="React Logo" style={{ width: 50, height: 50 }} />
        <Typography variant="h5" component="h1">Sample System</Typography>
      </Box>

      <Typography variant="h6" component="h2" align="left" sx={{ alignSelf: 'flex-start' }}>Name</Typography>
      <TextField
        label="田中 たろう"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Typography variant="h6" component="h2" align="left" sx={{ alignSelf: 'flex-start', marginTop: 2 }}>Mail Address</Typography>
      <TextField
        label="sample@test.com"
        variant="outlined"
        type="email"
        fullWidth
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
        onClick={handleClick}
      >
        送信
      </Button>
    </Box>
  );
}

export default App;
