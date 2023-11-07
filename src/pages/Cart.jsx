import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// layouts
import AppLayout from '../layouts/AppLayout';

// components
import CartProduct from '../components/CartProduct';

// context
import { CartContext } from '../context/CartContextProvider';

const Cart = () => {
    const { cartItems, subTotal, shippingCost, discount, totalCost } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <AppLayout>
            <div className="mx-auto px-[0.4rem] pb-[3rem] w-full max-w-[1420px]">
                
                {/* breadcrumb */}
                <div className="flex items-center justify-start gap-[0.4rem]">
                    <span className="text-[green] text-[1.1rem] font-[500] cursor-pointer">Cart</span>
                    <span className="text-[#aaa] text-[1.1rem] font-[500] cursor-context-menu">/</span>
                    <span className="text-[1.1rem] font-[500] cursor-pointer">Checkout</span>
                    <span className="text-[#aaa] text-[1.1rem] font-[500] cursor-context-menu">/</span>
                    <span className="text-[1.1rem] font-[500] cursor-pointer">Payment</span>
                </div>

                <div className="mt-[1rem] flex items-start justify-between gap-[1rem]">
                    {/* cart products */}
                    <div className="w-[60%]">
                        {cartItems && cartItems.map((item) => {
                            return <CartProduct key={item.id} cartItem={item} />
                        })}
                    </div>
                    
                    {/* amount details */}
                    <div className="gradient-bg p-[0.8rem] w-[40%] max-w-[400px] border-[1px] border-[#ddd] shadow-lg rounded-lg">
                        <div className="border-b-[1px] border-b-[#ddd]">
                            <div className="mb-[0.6rem] flex items-center justify-between">
                                <p className="text-[1.2rem] font-[600]">Sub Total</p>
                                <p className="text-[1.1rem] font-[600]">{subTotal} Tk</p>
                            </div>
                            <div className="mb-[0.6rem] flex items-center justify-between">
                                <p className="text-[1.2rem] font-[600]">Shipping Cost</p>
                                <p className="text-[1.1rem] font-[600]">{shippingCost} Tk</p>
                            </div>
                            <div className="mb-[0.6rem] flex items-center justify-between">
                                <p className="text-[1.2rem] font-[600]">Discount</p>
                                <p className="text-[1.1rem] font-[600]">{discount} Tk</p>
                            </div>
                        </div>
                        <div className="mt-[0.6rem] flex items-center justify-between">
                            <p className="text-[1.2rem] font-[600]">Total Cost</p>
                            <p className="text-[1.1rem] font-[600]">{totalCost} Tk</p>
                        </div>
                        <button onClick={() => navigate('/checkout')} className="mt-[0.6rem] h-[40px] w-full text-[#fff] text-[1.2rem] font-[500] bg-[#327e16] rounded-md">Buy now</button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Cart;
