import { TextField, Button, Box } from "@mui/material";

export default function AnswerInput({
    handleSubmit,
    userAnswer,
    handleAnswerChange,
}) {
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    value={userAnswer}
                    onChange={handleAnswerChange}
                    label="Answer"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        mt: "2rem",
                        height: "4rem",
                    }}
                    fullWidth
                    color="primary"
                >
                    Submit
                </Button>
            </form>
        </Box>
    );
}
