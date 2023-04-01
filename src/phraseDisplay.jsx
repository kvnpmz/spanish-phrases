import {
    Typography,
    Box,
} from "@mui/material";

export default function PhraseDisplay({ currentPhrase }) {
    return (
        <Box
            sx={{
                height: "10rem"
            }}
        >
            <Box
                sx={{
                    height: "2.5rem"
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "1rem",
                        "@media (max-width:600px)": {
                            fontSize: "0.9rem",
                        }
                    }}
                >
                    {currentPhrase.translation}
                </Typography>
            </Box>
            <Box
                sx={{
                    mt: "1rem",
                    height: "6rem",
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontSize: "1.7rem",
                        "@media (max-width:600px)": {
                            fontSize: "1.4rem",
                        }
                    }}
                >
                    {currentPhrase.text}
                </Typography>
            </Box>
        </Box>
    );
}
