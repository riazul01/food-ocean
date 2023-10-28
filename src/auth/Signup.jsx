import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// firebase
import { auth, fs } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

// context
import { LoginContext } from '../context/LoginContextProvider';

// layouts
import AppLayout from '../layouts/AppLayout';

// icons
import { SiMaildotru } from 'react-icons/si';
import { BiSolidLock } from 'react-icons/bi';
import { LuUserCircle2 } from 'react-icons/lu';
import { PiWarningCircleDuotone } from 'react-icons/pi';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Signup = () => {
    const [user, setUser] = useState({email: '', name: '', password: ''});
    const [error, setError] = useState({flag: false, code: null, message: ''});

    const navigate = useNavigate();
    const { dispatch } = useContext(LoginContext);

    // handle input change
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const getCurrentTime = () => {
        let dt = new Date();
        let monthIndex = dt.getMonth();
        let date = dt.getDate();
        let year = dt.getFullYear();

        let hh = dt.getHours();
        let mm = dt.getMinutes();
        let ss = dt.getSeconds();

        let xm = hh >= 12 ? 'PM' : 'AM';

        date = date < 10 ? '0' + date : date;
        hh = hh < 10 ? '0' + hh : hh;
        mm = mm < 10 ? '0' + mm : mm;
        ss = ss < 10 ? '0' + ss : ss;

        return `${monthNames[monthIndex]} ${date}, ${year} ${hh}:${mm}:${ss} ${xm}`;
    }

    // save user info to firestore
    const addUserToFireStore = async (colName, docName, data) => {
        try {
            await setDoc(doc(fs, colName, docName), data);
        } catch (err) {
            console.log(err.message);
        }
    }

    // submit user data
    const handleSubmit = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const authUser = userCredential.user;
            dispatch({type: 'LOGIN', payload: authUser});
            let joinedDate = getCurrentTime();
            addUserToFireStore('users', authUser.uid, {id: authUser.uid, email: user.email, name: user.name, imgUrl: '', phone: '', gender: '', address: {street: '', city: '', postcode: '', division: 'Dhaka', country: 'Bangladesh'}, role: 'user', joinedDate});
            setUser({email: '', name: '', password: ''});
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
                    <h1 className="text-[#173334] text-[1.8rem]">Register</h1>
                    <p className="mt-[0.2rem] text-[#182828] text-[1.1rem]">Please create an account to continue!</p>
                    
                    {/* error message */}
                    {error.flag && <div className="mt-[0.3rem] flex items-center">
                        <PiWarningCircleDuotone className="text-[#b12525] text-[1.3rem]"/>
                        <p className="ml-[0.3rem] text-[#b12525] text-[1.1rem]">{error.message}</p>
                    </div>}

                    {/* signup form */}
                    <form onSubmit={handleSubmit}>
                        <div className="mt-[0.8rem] w-full h-[45px] flex items-center border-[1px] border-[#ddd] rounded-md overflow-hidden">
                            <SiMaildotru className="ms-[0.8rem] text-gray-400 text-[1rem]"/>
                            <input type="email" name="email" value={user.email} onChange={handleChange} className="px-[0.65rem] h-full w-full border-none outline-none box-border" placeholder="Enter your email" required/>
                        </div>
                        <div className="mt-[1rem] w-full h-[45px] flex items-center border-[1px] border-[#ddd] rounded-md overflow-hidden">
                            <LuUserCircle2 className="ms-[0.8rem] text-gray-400 text-[1.25rem]"/>
                            <input type="text" name="name" value={user.name} onChange={handleChange} className="px-[0.4rem] h-full w-full border-none outline-none box-border" placeholder="Your name" required/>
                        </div>
                        <div className="mt-[1rem] w-full h-[45px] flex items-center border-[1px] border-[#ddd] rounded-md overflow-hidden">
                            <BiSolidLock className="ms-[0.8rem] text-gray-400 text-[1.25rem]"/>
                            <input type="password" name="password" value={user.password} onChange={handleChange} className="px-[0.4rem] h-full w-full border-none outline-none box-border" placeholder="Create password" required/>
                        </div>
                        <button type="submit" className="mt-[1.2rem] px-[1rem] py-[0.4rem] text-[#fff] font-[500] bg-[#173334] rounded-lg">Submit</button>
                    </form>

                    {/* login link */}
                    <div className="mt-[1rem] flex items-center">
                        <p className="me-[0.4rem] text-[#182828] text-[1.1rem]">Already have an account?</p>
                        <Link to="/user/login" className="text-[#182828] text-[1.1rem] underline">Login now</Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Signup;