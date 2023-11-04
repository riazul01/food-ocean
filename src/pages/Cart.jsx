import React, { useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import CartProduct from '../components/CartProduct';

import { CartContext } from '../context/CartContextProvider';

const Cart = () => {
    const { cartItems, subTotal, shippingCost, discount, totalCost } = useContext(CartContext);

    return (
        <AppLayout>
            <div className="mx-auto px-[0.4rem] pb-[3rem] w-full max-w-[1420px]">
                <div className=""></div>
                <div className="flex items-center justify-between gap-[1rem]">
                    <div className="w-[60%]">
                        {cartItems && cartItems.map((item) => {
                            return <CartProduct key={item.id} cartItem={item} />
                        })}
                    </div>
                    <div className="w-[40%]">
                        <h1>World</h1>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Cart;
