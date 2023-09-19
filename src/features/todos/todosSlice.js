import { createSlice } from "@reduxjs/toolkit";
export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });
        },
    },
});

export const { addTodo, removeTodo, toggleComplete } = todosSlice.actions;
export const selectTodos = (state) => state.todos.todos;
export default todosSlice.reducer;