import React from 'react';
import { RxTimer } from 'react-icons/rx';

import TestImg from '../assets/images/1.jpg';

const FoodCard = () => {
    return (
        <div className="relative flex items-center justify-center w-[100%] h-[150px] p-[0.2rem] border-[1px] border-gray-200 rounded-md">
            <div className="w-[35%] h-full rounded-sm overflow-hidden">
                <img src={TestImg} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-[65%] pl-[0.6rem]">
                <h1 className="text-[1.1rem] font-bold">Chicken Biryani</h1>
                <p className="text-[1.1rem] py-[0.15rem]">160 Tk</p>
                <div className="flex items-center justify-start py-[0.15rem]">
                    <RxTimer className="text-[1.1rem]"/>
                    <p className="pl-[0.4rem] text-[1rem]">30 - 35 min</p>
                </div>
                <button className="mt-[0.4rem] mb-[0.2rem] px-[0.6rem] py-[0.2rem] bg-[crimson] text-[1rem] text-white outline-none rounded-sm">Add to Cart</button>
            </div>
            <p className="absolute top-[1rem] left-0 py-[0.2rem] px-[0.8rem] text-[1rem] bg-[orange] rounded-r-md">20% off</p>
        </div>
    );
}

export default FoodCard;