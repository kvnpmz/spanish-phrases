import { Typography, Box } from "@mui/material";
import Check from "@mui/icons-material/Check";

export default function FeedbackDisplay({ previousPhrase, feedback, isFlashing }) {
    return (
        <>
            {feedback !== null && (
                <Box
                    sx={{
                        mt: 2,
                        padding: "2rem",
                        borderRadius: "4px",
                        height: "4rem",
                        display: "flex",
                        flexShrink: 0,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: isFlashing ? "#5CAEE6" : "#87CEFA",
                    }}
                >
                    {feedback === true && (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: "#000000",
                                }}
                            >
                                {"Correct!"}
                            </Typography>
                            <Check
                                sx={{
                                    ml: 1,

                                    fontSize: "2rem",
                                    color: "#000000",
                                }}
                            />
                        </Box>
                    )}
                    {feedback === false && (
                        <>
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
                        </>
                    )}
                </Box>
            )}
        </>
    );
}

