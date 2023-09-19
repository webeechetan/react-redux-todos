import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Create an async thunk for user registration
export const registerAsync = createAsyncThunk(
    "auth/register",
    async ({ username, email, password }) => {
        const response = await AuthService.register(username, email, password);
        return response.data;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        name: null,
        email: null,
        password: null,
        loading: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registerAsync.fulfilled, (state, action) => {
            state.loading = false;
            // ... your fulfilled action logic ...
        });
        builder.addCase(registerAsync.rejected, (state) => {
            state.loading = false;
            // ... your rejected action logic ...
        });
    },
});

export const { setUser, login, logout } = authSlice.actions;
export default authSlice.reducer;
