import React from 'react';

const Category = ({ Category="Meals", CategoryImg }) => {
    return (
        <div className="w-full h-[180px] bg-[#fff] border-[1px] border-s-0 border-t-0 border-[silver] cursor-pointer">
            <div className="pt-[1.2rem] pb-[0.6rem] w-full h-[60%]">
                <img src={CategoryImg} className="w-full h-full object-contain" alt="" />
            </div>
            <div className="w-full h-[40%] mt-[0.4rem]">
                <h1 className="text-center">{Category}</h1>
                <p className="text-center">20 Items</p>
            </div>
        </div>
    );
}

export default Category;