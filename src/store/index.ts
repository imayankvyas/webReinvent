import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import dataReducer from './slices/dataSlice';
import signupReducer from "./slices/signupSlice"
import logger from 'redux-logger'

const store = configureStore({
    reducer: {
        auth: authReducer,
        data: dataReducer,
        signup:signupReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;