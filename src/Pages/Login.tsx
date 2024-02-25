import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {loginSuccess} from "../store/slices/authSlice";
import {Login} from "../utils/service";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TextInput from "../UI/TextInput";

const LoginForm: React.FC = () => {

  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await Login(email, password);

      dispatch(loginSuccess(response?.token));
      navigate("/dashboard")
      toast.success("Login Successfully");
    } catch (err:any) {
      setError(err.response.data.error);

      toast.error(err.response.data.error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <TextInput name={'email'} id={'email'} type={'email'} label={'Email Address'} onChange={(e)=>setEmail(e?.target?.value)}/>

          <div>
            <div className="mt-2">
              <TextInput name={'password'} id={'password'} type={'password'} label={'Password'} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </div>

          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 mt-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pointer" onClick={() => navigate('/signup')}>
              Sign Up Here
            </a>
          </p>
        </div>
        <ToastContainer />

      </div>
    </>
  )
}
export default LoginForm