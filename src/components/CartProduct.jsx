import React, { useContext } from 'react';

import { CartContext } from '../context/CartContextProvider';

// icons
import { RiDeleteBin6Line } from 'react-icons/ri';
import { HiMinus } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';

const CartProduct = ({ cartItem }) => {
    const { dispatch } = useContext(CartContext);

    const handleRemove = () => {
        dispatch({type: 'REMOVE_PRODUCT', payload: cartItem});
    }

    const handleIncrement = () => {
        dispatch({type: 'CONTROL_QUANTITY', payload: {...cartItem, cartQuantity: cartItem.cartQuantity + 1}});
    }

    const handleDecrement = () => {
        if (cartItem.cartQuantity > 1) {
            dispatch({type: 'CONTROL_QUANTITY', payload: {...cartItem, cartQuantity: cartItem.cartQuantity - 1}});
        }
    }

    return (
        <div className="cartCard relative mb-[1.4rem] w-full h-[140px] flex items-center border-[1px] border-[#ddd] shadow-lg rounded-lg">
            
            {/* product image */}
            <div className="p-[0.2rem] h-full w-[180px]">
                <img src={cartItem.imgUrl} alt="cart-img" className="h-full w-full object-cover rounded-[0.2rem]"/>
            </div>

            {/* product details */}
            <div className="pl-[0.6rem]">
                <h1 className="text-[1.3rem] font-bold">{cartItem.name}</h1>
                <p className="my-[0.8rem] text-[1.1rem] text-[#555] font-bold">{`${cartItem.weight} ${cartItem.unit} * ${cartItem.cartQuantity}`}</p>
                <p className="text-[1.2rem] text-[#2e7016] font-bold">{cartItem.price * cartItem.cartQuantity}Tk</p>
            </div>

            {/* product delete button */}
            <button onClick={handleRemove} className="absolute top-0 right-0 mt-[0.4rem] mr-[0.6rem] p-[0.4rem] cursor-pointer">
                <RiDeleteBin6Line className="text-[1.4rem] text-red-600"/>
            </button>

            {/* control product quantity */}
            <div className="absolute bottom-[1rem] right-[1rem] flex items-center justify-center border-[1px] border-[#ccc] rounded-md">
                <button onClick={handleDecrement} className="px-[0.6rem] py-[0.2rem]"><HiMinus className="ctrlIcon" /></button>
                <span className="py-[0.175rem] font-[500] w-[3rem] flex items-center justify-center border-x-[1px] border-x-[#ccc]">{cartItem.cartQuantity}</span>
                <button onClick={handleIncrement} className="px-[0.6rem] py-[0.2rem]"><HiPlus className="ctrlIcon" /></button>
            </div>
        </div>
    );
}

export default CartProduct;