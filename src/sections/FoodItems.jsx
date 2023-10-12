import React from 'react';
import FoodCard from '../components/FoodCard';
import ProductCard from '../components/ProductCard';

const FoodItems = ({ title }) => {
    return (
        <div className="mx-auto mt-[2rem] px-[0.4rem] pb-[2rem] max-w-[1420px]">
            <div className="py-[1.2rem] flex items-center justify-between">
                <h1 className="text-[1.4rem] font-bold capitalize">{title}</h1>
                <p className="text-[1rem] font-bold">View more</p>
            </div>
            <div className="grid grid-cols-5 gap-[1.2rem]">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <FoodCard/>
            </div>
        </div>
    );
}

export default FoodItems;