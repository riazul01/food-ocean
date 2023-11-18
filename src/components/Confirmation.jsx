import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// context
import { CartContext } from '../context/CartContextProvider';
import { UserDetailsContext } from '../context/UserDetailsContextProvider';

// icons
import { LiaTimesSolid } from 'react-icons/lia';

const Confirmation = () => {
    const userDetails = useContext(UserDetailsContext);
    const { dispatch } = useContext(CartContext);
    const [confirmation, setConfirmation] = useState(JSON.parse(localStorage.getItem('confirmationRequired')) || {type: '', flag: false});
    const path = useLocation().pathname.split('/').pop();
    const navigate = useNavigate();

    const handleRedirectOrders = () => {
        setConfirmation({type: '', flag: false});
        dispatch({type: 'RESET_ORDER_STATE'});
        localStorage.setItem('confirmationRequired', JSON.stringify({type: '', flag: false}));
        navigate('/user/orders');
    }

    const handleRedirectLogin = () => {
        setConfirmation({type: '', flag: false});
        localStorage.setItem('confirmationRequired', JSON.stringify({type: '', flag: false}));
        navigate('/user/login');
    }

    const handleCloseMessage = () => {
        setConfirmation({type: '', flag: false});
        dispatch({type: 'RESET_ORDER_STATE'});
        localStorage.setItem('confirmationRequired', JSON.stringify({type: '', flag: false}));
    }

    return (
        <div className={`${(path === '' && confirmation.flag) ? null : 'hidden'} w-full bg-[#d78d02] shadow-lg`}>
            <div className="mx-auto px-[0.4rem] py-[0.5rem] max-w-[1420px] flex items-center justify-between">
                {confirmation.type === "order" && <p className="text-[#222] text-[1rem] md:text-[1.1rem] font-[500]">Dear <strong className="capitalize">{userDetails ? userDetails.name : 'user'}</strong>, Your order has been confirmed! <span onClick={handleRedirectOrders} className="underline cursor-pointer">View orders</span></p>}
                {confirmation.type === "account-delete" && <p className="text-[#222] text-[1rem] md:text-[1.1rem] font-[500]">Your account is scheduled for deletion. If you don't do this please <span onClick={handleRedirectLogin} className="underline cursor-pointer">login again</span>!</p>}
                <div className="flex items-center justify-center">
                    <LiaTimesSolid onClick={handleCloseMessage} className="text-[1.3rem] font-bold cursor-pointer"/>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;