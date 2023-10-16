import React from 'react';

const Category = ({ title, quantity, Image }) => {
    return (
        <div className="w-full h-[180px] bg-[#fff] border-[1px] border-s-0 border-t-0 border-[silver] cursor-pointer">
            <div className="pt-[1.2rem] pb-[0.6rem] w-full h-[60%]">
                <img src={Image} className="w-full h-full object-contain" alt="" />
            </div>
            <div className=" mt-[0.4rem] w-full h-[40%]">
                <h1 className="text-center">{title}</h1>
                <p className="text-center">{quantity} Items</p>
            </div>
        </div>
    );
}

export default Category;