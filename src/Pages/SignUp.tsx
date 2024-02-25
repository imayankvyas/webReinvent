import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {Signup} from "../utils/service";
import {signupSuccess} from "../store/slices/signupSlice"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TextInput from "../UI/TextInput";
function SignUp() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };


    const handleSignUp=async ()=>{

        try{
            const response = await Signup(formData?.email,formData?.password);
            console.log("Res",response);
            dispatch(signupSuccess(response));
            navigate('/')
            toast.success("Signup successfully,Please Login");
        }
        catch (err:any){
            toast.error(err.response.data.error)
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign up to get account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                <div className="space-y-6 card">
                    <TextInput name={'name'} id={'name'} type={'text'} label={'Full Name'} onChange={(e)=>handleInputChange(e)}/>

                    <div>
                        <TextInput name={'email'} id={'email'} type={'email'} label={'Email Address'} onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div>
                        <TextInput name={'password'} id={'password'} type={'password'} label={'Create Password'} onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div>
                        <button
                            onClick={handleSignUp}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 mx-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                    </div>
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already a member?
                    <a onClick={()=>navigate('/')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Login
                    </a>
                </p>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default SignUp