import React from 'react';
import FoodCard from '../components/FoodCard';

const FoodItems = ({ title }) => {
    return (
        <div className="max-w-[1420px] mx-auto px-[0.4rem] pb-[2rem]">
            <div className="flex items-center justify-between py-[1.2rem]">
                <h1 className="text-[1.8rem] font-bold capitalize">{title}</h1>
                <p className="text-[1rem] font-bold">View more</p>
            </div>
            <div className="grid grid-cols-3 gap-[1.2rem]">
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
            </div>
        </div>
    );
}

export default FoodItems;