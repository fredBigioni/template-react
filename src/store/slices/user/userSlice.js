import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    userData: null,
    isLoading: false,
    isDisabled: false,
    isModalOpening: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadUsersData: (state, { payload }) => {
            debugger;
            state.userData = payload.map((d) => {
                return d;
            });
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    loadUsersData,
} = userSlice.actions;