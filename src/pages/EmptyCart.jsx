import React from 'react';
import AppLayout from '../layouts/AppLayout';

const EmptyCart = () => {
    return (
        <AppLayout>
            <div className="mx-auto px-[0.4rem] w-full max-w-[1420px] min-h-[50vh]">
                <h1 className="text-[#333] text-[1.2rem] font-[500]">Cart is Empty!</h1>
            </div>
        </AppLayout>
    );
}

export default EmptyCart;