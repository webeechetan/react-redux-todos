import React, { useState, useEffect, Component, forwardRef } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../features/todos/todosSlice';



export default function TodoForm(props) {

    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            id: uuidv4(),
            text: text,
            description: description,
        }));
        setText("");
        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row" >
                <TextField
                    label="text"
                    variant="outlined"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <TextField
                    label="description"
                    variant="outlined"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <Button variant="contained" type="submit">
                    Add Todo
                </Button>
            </Stack>
        </form>
    );
}