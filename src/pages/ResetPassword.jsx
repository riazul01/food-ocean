import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// layouts
import AppLayout from '../layouts/AppLayout';

// firebase
import { auth } from '../firebase';
import { sendPasswordResetEmail } from "firebase/auth";

// custom hook
import useUsersList from '../hooks/useUsersList';

// icons
import { AiFillWarning } from 'react-icons/ai';

const ResetPassword = () => {
    const usersList = useUsersList();
    const [email, setEmail] = useState('');
    const [errorFlag, setErrorFlag] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [mailStatus, setMailStatus] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            setEmail(location.state.email);
        }
    }, [location]);

    const handleChange = (e) => {
        setEmail(e.target.value);
        setErrorFlag(false);
        setErrorMsg('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValidUser = false;

        for (let i = 0; i < usersList.length; i ++) {
            if (email === usersList[i].email && usersList[i].role === 'user') {
                isValidUser = true;
                break;
            }
        }

        if (isValidUser) {
            sendPasswordResetEmail(auth, email)
            .then(() => {
                setMailStatus('A message was sent to your email. Please check it out to reset your password!');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorFlag(true);
                setErrorMsg(`Error ${errorCode}!! ${errorMessage}`);
            });
        } else {
            setErrorFlag(true);
            setErrorMsg('No user found with this email!');
        }
    }

    const handleRedirect = () => {
        setMailStatus('');
        navigate('/user/login');
    }

    return (
        <AppLayout>
            <div className="mx-auto px-[0.4rem] max-w-[1420px] h-auto min-h-[50vh]">
                {mailStatus !== '' && <div className="">
                    <p>{mailStatus}</p>
                    <button onClick={handleRedirect} className="mt-[0.8rem] px-[0.6rem] py-[0.2rem] text-[#111] text-[1rem] bg-gray-300 border-[1px] border-[#555] rounded-md">Back to login</button>
                </div>}
                {mailStatus === '' && <div className="">
                    <p className="text-[1.1rem]">Please give us your email:</p>
                    <form onSubmit={handleSubmit}>
                        {errorFlag && <div className="my-[0.4rem] flex items-center">
                            <AiFillWarning className="me-[0.2rem] text-red-700" />
                            <p className="text-[1rem] text-red-700">{errorMsg}</p>
                        </div>}
                        <input className="mt-[0.4rem] px-[0.6rem] block h-[36px] w-full max-w-[320px] outline-none border-[1px] border-[#ccc] rounded-md" value={email} onChange={handleChange} type="text" placeholder="Enter your email" required />
                        <button className="mt-[0.8rem] px-[0.6rem] py-[0.2rem] text-[#111] text-[1rem] bg-green-500 border-[1px] border-gray-600 rounded-md" type="submit">Reset password</button>
                    </form>
                </div>}
            </div>
        </AppLayout>
    );
}

export default ResetPassword;