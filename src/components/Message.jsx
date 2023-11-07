import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LiaTimesSolid } from 'react-icons/lia';
import { UserDetailsContext } from '../context/UserDetailsContextProvider';
import { CartContext } from '../context/CartContextProvider';

const Message = () => {
    const userDetails = useContext(UserDetailsContext);
    const { orderConfirmed, dispatch } = useContext(CartContext);
    const path = useLocation().pathname.split('/').pop();

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'RESET_ORDER_STATE'});
        }, 60000)
    });

    const handleCloseMessage = () => {
        dispatch({type: 'RESET_ORDER_STATE'});
    }

    return (
        <div className={`${(path === '' && orderConfirmed) ? null : 'hidden'} w-full bg-[#d78d02] shadow-lg`}>
            <div className="mx-auto px-[0.4rem] py-[0.5rem] max-w-[1420px] flex items-center justify-between">
                <p className="text-[#222] text-[1.1rem] font-[500]">Dear {userDetails ? userDetails.name : 'user'}, Your order has been confirmed! <span className="underline cursor-pointer">View orders</span></p>
                <LiaTimesSolid onClick={handleCloseMessage} className="text-[1.3rem] font-bold cursor-pointer"/>
            </div>
        </div>
    );
}

export default Message;