import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// context
import { UserDetailsContext } from '../context/UserDetailsContextProvider';
import { CartContext } from '../context/CartContextProvider';

// icons
import { LiaTimesSolid } from 'react-icons/lia';

const Message = () => {
    const userDetails = useContext(UserDetailsContext);
    const { orderConfirmed, dispatch } = useContext(CartContext);
    const path = useLocation().pathname.split('/').pop();
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/user/orders');
        dispatch({type: 'RESET_ORDER_STATE'});
    }

    const handleCloseMessage = () => {
        dispatch({type: 'RESET_ORDER_STATE'});
    }

    return (
        <div className={`${(path === '' && orderConfirmed) ? null : 'hidden'} w-full bg-[#d78d02] shadow-lg`}>
            <div className="mx-auto px-[0.4rem] py-[0.5rem] max-w-[1420px] flex items-center justify-between">
                <p className="text-[#222] text-[1.1rem] font-[500]">Dear <strong className="capitalize">{userDetails ? userDetails.name : 'user'}</strong>, Your order has been confirmed! <span onClick={handleRedirect} className="underline cursor-pointer">View orders</span></p>
                <LiaTimesSolid onClick={handleCloseMessage} className="text-[1.3rem] font-bold cursor-pointer"/>
            </div>
        </div>
    );
}

export default Message;