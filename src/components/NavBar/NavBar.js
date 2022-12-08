import React from 'react';
import { AppBar, Container, MenuItem, MenuList, Toolbar, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuList sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
            <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
            <MenuItem onClick={() => navigate('/submitsuggestion')}>SubmitSuggestion</MenuItem>
            <MenuItem onClick={() => navigate('/evaluationsuggestion')}> Evaluation</MenuItem>
            <MenuItem onClick={() => navigate('/reportpage')}>ReportPage</MenuItem>
          </MenuList>
          <Typography sx={{ "&:hover": { cursor: 'pointer' } }} onClick={() => navigate('/login')}> Login</Typography>
        </Toolbar>
      </Container>
    </AppBar >

  );
};

export default NavBar;