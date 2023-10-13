import React from 'react';

import { HiMinus } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';

import TestImg from '../assets/images/1.jpg';

const ProductCard = () => {
    return (
        <div className="relative w-[100%] h-[360px] p-[0.2rem] border-[1px] border-gray-200 rounded-md shadow-lg overflow-hidden">
            <div className="w-full h-[55%] rounded-sm overflow-hidden">
                <img src={TestImg} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="relative w-full h-[45%] pl-[0.6rem] pt-[0.6rem]">
                <h1 className="text-[1.2rem] font-bold">Fresh Apple</h1>
                <p className="pt-[0.5rem] text-[1rem] font-[500]">1 pcs</p>
                <p className="pt-[0.5rem] text-[1.1rem] text-[#2e7016] font-bold">160 Tk</p>
                <button className="absolute left-0 bottom-0 py-[0.4rem] w-[45%] bg-[#327e16] text-[1.1rem] text-white font-[500] outline-none rounded-sm">Added</button>
                <div className={`absolute right-0 bottom-0 flex items-center`}>
                    <button className="px-[0.7rem] py-[0.62rem] border-none outline-none bg-[#222] rounded-sm"><HiMinus className="text-white text-[1.2rem]"/></button>
                    <span className="text-[1.2rem] text-center font-bold w-[2.5rem]">12</span>
                    <button className="px-[0.7rem] py-[0.62rem] border-none outline-none bg-[#222] rounded-sm"><HiPlus className="text-white text-[1.2rem]"/></button>
                </div>
            </div>
            <p className="absolute top-[1.4rem] left-0 py-[0.2rem] px-[0.8rem] text-[1.1rem] font-bold bg-[orange] rounded-r-[0.1rem]" style={{boxShadow: '0.015rem 0.015rem 0.4rem 0 #444'}}>20% off</p>
        </div>
    );
}

export default ProductCard;