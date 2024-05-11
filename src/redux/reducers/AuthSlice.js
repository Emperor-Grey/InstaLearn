import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logoutSuccess: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const {loginSuccess, logoutSuccess} = authSlice.actions;
export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
