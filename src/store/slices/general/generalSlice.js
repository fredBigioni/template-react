import { createSlice } from '@reduxjs/toolkit';

export const generalSlice = createSlice({
    name: 'general',
    initialState: {
        isLoading: false,
        isDarkThemeSelected: false,
        stateSideNav: true
    },
    reducers: {
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        changeTheme: (state, { payload }) => {
            state.isDarkThemeSelected = payload;
        },
        changeStateSideNav: (state, { payload }) => {
            state.stateSideNav = !state.stateSideNav;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setIsLoading, changeTheme, changeStateSideNav } = generalSlice.actions;