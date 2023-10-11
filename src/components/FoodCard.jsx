import React from 'react';
import { RxTimer } from 'react-icons/rx';

import TestImg from '../assets/images/1.jpg';

const FoodCard = () => {
    return (
        <div className="relative w-[100%] h-[360px] p-[0.2rem] border-[1px] border-gray-200 rounded-md shadow-lg overflow-hidden">
            <div className="w-full h-[55%] rounded-sm overflow-hidden">
                <img src={TestImg} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="relative w-full h-[45%] pl-[0.6rem] pt-[0.6rem]">
                <h1 className="text-[1.2rem] font-bold">Chicken Biryani</h1>
                <div className="flex items-center justify-start pt-[0.5rem]">
                    <RxTimer className="text-[1.1rem]"/>
                    <p className="pl-[0.4rem] text-[1rem]">30 - 35 min</p>
                </div>
                <p className="text-[1.1rem] pt-[0.5rem]">160 Tk</p>
                <button className="absolute left-0 bottom-0 py-[0.4rem] w-full bg-[crimson] text-[1.1rem] text-white font-[500] outline-none rounded-sm">Add to Cart</button>
            </div>
            <p className="absolute top-[1.4rem] left-0 py-[0.2rem] px-[0.8rem] text-[1.1rem] font-bold bg-[orange] rounded-r-[0.1rem]" style={{boxShadow: '0.015rem 0.015rem 0.4rem 0 #444'}}>20% off</p>
        </div>
    );
}

export default FoodCard;