import { Login, Signup } from './service';
import axios from 'axios';

jest.mock('axios');

describe('authService', () => {
    describe('Login', () => {
        it('should Login in user with provided credentials', async () => {
            const credentials = { email: 'test@example.com', password: 'password123' };
            const userData = { id: 1, email: 'test@example.com', name: 'Test User' };
            const response = { data: userData };
            (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue(response);

            const user = await Login("test@example.com","password123");

            expect(user).toEqual(userData);
            expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/login', credentials);
        });

        it('should throw an error if sign in fails', async () => {
            const credentials = { email: 'test@example.com', password: 'password123' };
            const errorMessage = 'Invalid credentials';
            (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValue(new Error(errorMessage));

            await expect(Login("test@example.com","password123")).rejects.toThrow(errorMessage);
        });
    });

    describe('Signup', () => {
        it('should sign up user with provided data', async () => {
            const userData = { email: 'test@example.com', password: 'password123' };
            const response = { data: userData };
            (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue(response);

            const user = await Signup("test@example.com","password123");

            expect(user).toEqual(userData);
            expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/register', userData);
        });

        it('should throw an error if sign up fails', async () => {
            const errorMessage = 'Sign up failed';
            (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValue(new Error(errorMessage));

            await expect(Signup('test@example.com','password123')).rejects.toThrow(errorMessage);
        });
    });
});