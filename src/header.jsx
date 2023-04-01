import {
    AppBar,
    Toolbar,
    Typography
} from '@mui/material';

export default function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography
                    variant='h6'
                    component='div'
                    sx={{ flexGrow: 1 }}
                >
                Spanish Medical Phrases App
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
