import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ display: 'flex', flexDirection: 'column', gap: '5rem', padding: '20px', mt: '2rem' }}>
        <Typography variant='h2' sx={{ fontWeight: 'bold' }} color='primary'> Welcome To your app</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem', justifyContent: 'center' }}>
          <Button variant='contained' onClick={() => navigate('/submitsuggestion')}>SubmitSuggestion</Button >
          <Button variant='contained' onClick={() => navigate('/evaluationsuggestion')}>New Evaluatsubmitsuggestionion</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;