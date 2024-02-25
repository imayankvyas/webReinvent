import {  loginSuccess } from '../store/slices/authSlice';
import {  signupSuccess } from '../store/slices/signupSlice';

describe('authSlice', () => {


    describe('loginSuccess', () => {
        it('should create an action to set user data and authentication status after sign in', () => {
            const user = { id: 1, email: 'test@example.com', name: 'Test User' };
            const expectedAction = {
                type: loginSuccess.type,
                payload: user,
            };
            expect(loginSuccess(user)).toEqual(expectedAction);
        });
    });

    describe('signupSuccess', () => {
        it('should create an action to set user data and authentication status after sign up', () => {
            const user = { id: 1, email: 'test@example.com', name: 'Test User' };
            const expectedAction = {
                type: signupSuccess.type,
                payload: user,
            };
            expect(signupSuccess(user)).toEqual(expectedAction);
        });
    });
});