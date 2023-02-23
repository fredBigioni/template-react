import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user:
    {
        id: null,
        login: null,
        firstName: null,
        lastName: null,
        email: null,
        status: null,
        lastUpdate: null,
        createDate: null,
        description: null,
        password: null,
        token: null,
        teamId: null,
        teamName: null,
        rolDescription: null,
        rolId: null,
    },
    isAuthenticated: false,
    isLoading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setStateLoding: (state, { payload }) => {
            state.isLoading = payload;
        },
        login: (state, { payload }) => {
            localStorage.setItem('x-token',payload.data.token);
            state.user = payload.data;
            state.isAuthenticated = true;
        },
        logout: (state, action) => {
            state.isAuthenticated = initialState.isAuthenticated;
            state.user = initialState.user;
        },
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, setStateLoding } = authSlice.actions;