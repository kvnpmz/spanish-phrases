import {
    Typography,
    Box,
} from "@mui/material";

export default function PhraseDisplay({ currentPhrase }) {
    return (
        <Box
            sx={{
                width: "100%",
                height: "10rem",
                overflow: "auto",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "3rem",
                    overflow: "auto",
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        color: "#fff",
                        fontSize: "1rem",
                    }}
                >
                    {currentPhrase.translation}
                </Typography>
            </Box>
            <Box
                sx={{
                    mt: "1rem",
                    width: "100%",
                    height: "6rem",
                    overflow: "auto",
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontSize: "1.7rem",
                        "@media (max-width:600px)": {
                            fontSize: "1.4rem",
                        },
                    }}
                >
                    {currentPhrase.text}
                </Typography>
            </Box>
        </Box>
    );
}
