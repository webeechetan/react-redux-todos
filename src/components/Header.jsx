import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    React Todo
                </Typography>
                <Button color="inherit">
                    <Link href="/register" underline="none" color="inherit">
                        Register
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
}