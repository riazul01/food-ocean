import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// layout
import AppLayout from '../../layouts/AppLayout';
import ProfileLayout from '../../layouts/ProfileLayout';

// context
import { CartContext } from '../../context/CartContextProvider';
import { LoginContext } from '../../context/LoginContextProvider';
import { UserDetailsContext } from '../../context/UserDetailsContextProvider';

// firebase
import { fs, auth } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { signOut } from 'firebase/auth';

// toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteAccount = () => {
    const [text, setText] = useState('');
    const [error, setError] = useState(false);
    const cartContext = useContext(CartContext);
    const loginContext = useContext(LoginContext);
    const userDetails = useContext(UserDetailsContext);
    const navigate = useNavigate();

    const handleTextChange = (e) => {
        setText(e.target.value);
        setError(false);
    }

    const scheduleForDelete = async () => {
        try {
            const userRef = doc(fs, 'users', userDetails.id);
            await setDoc(userRef, {scheduleForDeletion: true}, {merge: true});
            await signOut(auth);
            loginContext.dispatch({type: 'LOGOUT'});
            cartContext.dispatch({type: 'MAKE_CART_EMPTY'});
            cartContext.dispatch({type: 'RESET_CHECKOUT_STATE'});
            cartContext.dispatch({type: 'RESET_ORDER_STATE'});
            localStorage.setItem('confirmationRequired', JSON.stringify({type: 'account-delete', flag: true}));
            navigate('/');
            setText('');
        } catch (error) {
            console.log(error);
            toast.error('An error occured!');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userDetails) return;
        if (text === 'delete-my-account') {
            scheduleForDelete();
        } else {
            setError(true);
        }
    }

    return (
         <AppLayout>
            <ProfileLayout>
                {/* title */}
                <h1 className="pb-[0.2rem] text-[#173334] text-[1.6rem] font-[500] border-b-[1px] border-dashed border-[#ddd]">Delete Account</h1>
                
                <form onSubmit={handleSubmit} className="mt-[0.8rem]">
                    <div className="mt-[0.8rem] flex flex-col w-full max-w-[340px]">
                        <strong className="text-[1.1rem]">Type <i>"delete-my-account"</i></strong>
                        <input value={text} onChange={handleTextChange} type="text" className={`mt-[0.2rem] px-[0.4rem] py-[0.2rem] text-[1.1rem] w-full max-w-[270px] border-[1px] ${error ? 'border-red-600' : 'border-[silver]'} outline-none rounded-md`} placeholder="delete-my-account" required/>
                        {error && <p className="mt-[0.2rem] ms-[0.2rem] text-red-700 text-[1rem] font-[500]">Text not matched!</p>}
                    </div>

                    <button type="submit" className="mt-[1.2rem] px-[0.8rem] py-[0.25rem] text-[#fff] text-[1rem] font-[500] bg-red-800 rounded-md">Confirm Delete</button>
                </form>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    style={{zIndex: 999999}}
                />
            </ProfileLayout>
        </AppLayout>
    );
}

export default DeleteAccount;