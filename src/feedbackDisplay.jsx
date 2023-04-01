import { Typography, Box } from "@mui/material";
import Check from "@mui/icons-material/Check";

export default function FeedbackDisplay({
    previousPhrase,
    feedback,
    isFlashing,
}) {
    return (
        <>
            {feedback !== null && (
                <Box
                    sx={{
                        mt: 2,
                        p: "2rem",
                        borderRadius: "0.25rem",
                        height: "4rem",
                        display: "flex",
                        flexShrink: 0,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: isFlashing ? "#5CAEE6" : "#87CEFA",
                    }}
                >
                    {feedback ? (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: "black",
                                }}
                            >
                                {"Correct!"}
                            </Typography>
                            <Check
                                sx={{
                                    ml: 1,
                                    fontSize: "2rem",
                                    color: "black",
                                }}
                            />
                        </Box>
                    ) : (
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: "1rem",
                                textAlign: "center",
                                color: "red",
                            }}
                        >
                            {`Incorrect. The correct answer is '${previousPhrase.answer}.'`}
                        </Typography>
                    )}
                </Box>
            )}
        </>
    );
}
