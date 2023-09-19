import React, { useState, useEffect, Component, forwardRef } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Header from './Header';
import TodoForm from './todos/TodoForm';
import TodoList from './todos/TodoList';


export default function Home() {

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");


    return (
        <Box >
            <Header />
            <Container maxWidth="sm">
                <Typography variant="h6" component="div" gutterBottom>
                    Create Todo
                </Typography>
                <TodoForm
                    todos={todos}
                    setTodos={setTodos}
                    text={text}
                    setText={setText}
                    description={description}
                    setDescription={setDescription}
                />
            </Container>
            <Container maxWidth="lg">
                <Typography variant="h6" component="div" gutterBottom>
                    Todo List
                </Typography>
                <TodoList todos={todos} />
            </Container>
        </Box>

    );

}