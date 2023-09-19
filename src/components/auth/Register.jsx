import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync } from '../../features/auth/authSlice';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    // Access the loading state using useSelector
    const isLoading = useSelector(state => state.auth.loading);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerAsync({
            username: username,
            email: email,
            password: password,
        }));
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <Box>
            <Container component="main" maxWidth="lg">
                <Typography variant="h6" component="div" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2} direction="row">
                        <TextField
                            label="username"
                            variant="outlined"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <TextField
                            label="email"
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <TextField
                            label="password"
                            variant="outlined"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <Button 
                        variant="contained" 
                        type="submit"
                        disabled={isLoading}
                        >
                            {isLoading ? (
                                <CircularProgress 
                                size={24} 
                                color="secondary"

                                />
                            ) : (
                                "Register"
                            )}
                        </Button>
                    </Stack>
                </form>
            </Container>
        </Box>
    );
}
