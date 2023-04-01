import { useState } from "react";
import { CssBaseline, Box, Grid, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import phrases from "./phrases";
import theme from "./theme";
import shuffleArray from "./shuffleArray";
import Header from "./header";
import PhraseDisplay from "./phraseDisplay";
import AnswerInput from "./answerInput";
import FeedbackDisplay from "./feedbackDisplay";

const shuffledPhrases = shuffleArray(phrases);

export default function App() {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [previousPhrase, setPreviousPhrase] = useState(null);
    const [currentPhrase, setCurrentPhrase] = useState(
        shuffledPhrases[currentPhraseIndex]
    );
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState(null);
    const [isFlashing, setIsFlashing] = useState(false);

    const handleAnswerChange = (event) => {
        const userInputWithoutAccents = removeAccents(event.target.value);
        setUserAnswer(userInputWithoutAccents.toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const correctAnswer = currentPhrase.answer.toLowerCase();
        const userInputWithoutAccents = removeAccents(userAnswer.toLowerCase());

        if (
            correctAnswer.localeCompare(userInputWithoutAccents, "es", {
                sensitivity: "base",
            }) === 0
        ) {
            setFeedback(true);
        } else {
            setFeedback(false);
            setPreviousPhrase(currentPhrase);
        }

        setUserAnswer("");
        setCurrentPhraseIndex(
            (currentPhraseIndex + 1) % shuffledPhrases.length
        );
        setCurrentPhrase(
            shuffledPhrases[(currentPhraseIndex + 1) % shuffledPhrases.length]
        );

        setIsFlashing(true);
        setTimeout(() => {
            setIsFlashing(false);
        }, 300);
    };

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <Box
                        mt={4}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                p: "2rem",
                                width: "100%",
                                minHeight: "30rem",
                                borderRadius: "2rem",
                            }}
                        >
                            <PhraseDisplay currentPhrase={currentPhrase} />
                            <AnswerInput
                                userAnswer={userAnswer}
                                handleSubmit={(event) => handleSubmit(event)}
                                handleAnswerChange={(event) =>
                                    handleAnswerChange(event)
                                }
                            />
                            <FeedbackDisplay
                                feedback={feedback}
                                previousPhrase={previousPhrase}
                                isFlashing={isFlashing}
                            />
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

