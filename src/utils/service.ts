import axios from 'axios';

const api = axios.create({
    baseURL: 'https://reqres.in/api/',
});

export const Login = async (email: string, password: string) => {
    const response = await api.post('login', { email, password });
    return response.data;
};

export const Data = async () => {
    const response = await api.get('users');
    return response.data;
};

export const Signup = async (email: string, password: string)=>{
    const response = await api.post('register',{email, password});
    return response.data;
}

