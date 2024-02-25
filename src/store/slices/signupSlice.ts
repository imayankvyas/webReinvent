import { createSlice } from '@reduxjs/toolkit';

interface SignUpState {
    id: any;
    token: any;
}

const initialState: SignUpState = {
    id: null,
    token: null,
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        signupSuccess(state, action) {
            state.id = action.payload;
            state.token = action.payload;
        },
    },
});

export const { signupSuccess } = signupSlice.actions;
export default signupSlice.reducer;
