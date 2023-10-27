import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContextProvider';

// firebase
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

// icons
import { PiWarningCircleDuotone } from 'react-icons/pi';
import { SiMaildotru } from 'react-icons/si';
import { BiSolidLock } from 'react-icons/bi';

import AppLayout from '../layouts/AppLayout';

const Login = () => {
    const [user, setUser] = useState({email: '', password: ''});
    const [error, setError] = useState({flag: false, code: null, message: ''});

    const navigate = useNavigate();
    const { dispatch } = useContext(LoginContext);

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch({type: 'LOGIN', payload: user});
            setUser({email: '', password: ''});
            setError({flag: false, code: null, message: ''});
            navigate('/');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({flag: true, code: errorCode, message: errorMessage});
        });
    }

    return (
        <AppLayout>
            <div className="mx-auto pb-[1.4rem] max-w-[1420px] flex items-center justify-center">
                <div className="my-[1rem] w-[380px] h-auto min-h-[50vh]">
                    <h1 className="text-[#173334] text-[1.8rem]">Login</h1>
                    <p className="mt-[0.2rem] text-[#182828] text-[1.1rem]">Welcome back, You've been missed!</p>
                    {error.flag && <div className="mt-[0.3rem] flex items-center">
                        <PiWarningCircleDuotone className="text-[#b12525] text-[1.3rem]"/>
                        <p className="ml-[0.3rem] text-[#b12525] text-[1.1rem]">{error.message}</p>
                    </div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mt-[1rem] w-full h-[45px] flex items-center border-[1px] border-[#ddd] rounded-md overflow-hidden">
                            <SiMaildotru className="ms-[0.8rem] text-gray-400 text-[1rem]"/>
                            <input type="email" name="email" value={user.email} onChange={handleChange} className="px-[0.65rem] h-full w-full border-none outline-none box-border" placeholder="Enter your email" required/>
                        </div>
                        <div className="mt-[1rem] w-full h-[45px] flex items-center border-[1px] border-[#ddd] rounded-md overflow-hidden">
                            <BiSolidLock className="ms-[0.8rem] text-gray-400 text-[1.25rem]"/>
                            <input type="password" name="password" value={user.password} onChange={handleChange} className="px-[0.4rem] h-full w-full border-none outline-none box-border" placeholder="Enter your password" required/>
                        </div>
                        <Link to="/user/reset-password" className="block pt-[0.4rem] text-[#182828] text-[1.1rem]">Forgot password?</Link>
                        <button type="submit" className="mt-[1.2rem] px-[1rem] py-[0.4rem] text-[#fff] font-[500] bg-[#173334] rounded-lg">Login</button>
                    </form>
                    <div className="mt-[1rem] flex items-center">
                        <p className="me-[0.6rem] text-[#182828] text-[1.1rem]">Don't have an account?</p>
                        <Link to="/user/register" className="text-[#182828] text-[1.1rem] underline">Register now</Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Login;