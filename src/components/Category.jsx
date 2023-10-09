import React from 'react';

const Category = ({ Category="Meals", CategoryImg }) => {
    return (
        <div className="w-[170px] h-[180px] border-[1px] border-[silver] rounded-lg cursor-pointer">
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