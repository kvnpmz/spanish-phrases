import React, { useState } from 'react';
import { AppBar, Toolbar, CssBaseline, TextField, Button, Typography, Box, Container, Paper, createTheme } from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import phrases from './phrases';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4caf50',
    },
  },
});

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Shuffle phrases array
const shuffledPhrases = shuffleArray(phrases);

const App = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(shuffledPhrases[currentPhraseIndex]);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctAnswer = currentPhrase.answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect');
    }

    setUserAnswer('');
    setCurrentPhraseIndex((currentPhraseIndex + 1) % shuffledPhrases.length);
    setCurrentPhrase(shuffledPhrases[(currentPhraseIndex + 1) % shuffledPhrases.length]);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
  <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Spanish Medical Phrases App
        </Typography>
      </Toolbar>
    </AppBar>
      <Container maxWidth="sm">
        <Box mt={4} display="flex" flexDirection="column" alignItems="center">
          <Paper elevation={3} 
        sx={{
            p: '2rem',
            minWidth: '40rem',
            maxWidth: '40rem',
            minHeight: '25rem',
            maxHeight: '40rem' 
        }}
        >
<Box sx={{ width: '100%', height: '5rem', overflow: 'auto' }}>
  <Typography variant="h5" gutterBottom>{currentPhrase.text}</Typography>
</Box>

            <form onSubmit={handleSubmit}>
              <TextField
                value={userAnswer}
                onChange={handleAnswerChange}
                label="Answer"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <Box mt={2}>
                <Button
            variant="contained" type="submit"
  size="large"
 fullWidth color="primary">
              Submit
            </Button>
          </Box>
        </form>
{feedback !== '' && (
  <Box sx={{ 
    mt: 5,
    backgroundColor: '#87CEFA',
    padding: 2,
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <Typography variant="h4" sx={{ 
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#000000',
    }}>
      {feedback}
    </Typography>
  </Box>
)}
      </Paper>
    </Box>
  </Container>
</ThemeProvider>
);
};

export default App;
