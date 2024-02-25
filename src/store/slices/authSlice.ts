import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isLoggedIn: boolean;
    token: any; // Replace with appropriate user type
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.isLoggedIn = true;
            state.token = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.token = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
