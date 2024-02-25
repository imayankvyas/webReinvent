import { createSlice } from '@reduxjs/toolkit';

interface DataState {
    user: any; // Replace with appropriate user type
}

const initialState: DataState = {
    user: null,
};

const dataSlice = createSlice({
    name: 'getUserData',
    initialState,
    reducers: {
        getData(state, action) {
            state.user = action.payload;

        },
    },
});

export const { getData } = dataSlice.actions;
export default dataSlice.reducer;
