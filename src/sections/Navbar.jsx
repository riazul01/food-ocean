import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="w-full">
            {/* nav links */}
            <div className="flex items-center justify-between max-w-[1420px] mx-auto px-[0.4rem] py-[1.4rem]">
                <div className="flex items-center justify-center">
                    <NavLink to="/" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] border-[1px] border-gray-600 rounded-md">Home</NavLink>
                    <NavLink to="/groceries" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] border-[1px] border-gray-600 rounded-md">Groceries</NavLink>
                    <NavLink to="/foods" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] border-[1px] border-gray-600 rounded-md">Foods</NavLink>
                    <NavLink to="/vegetables" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] border-[1px] border-gray-600 rounded-md">Vegetables</NavLink>
                    <NavLink to="/fruits" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] border-[1px] border-gray-600 rounded-md">Fruits</NavLink>
                    <NavLink to="/meat" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] border-[1px] border-gray-600 rounded-md">Meat</NavLink>
                    <NavLink to="/fish" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] border-[1px] border-gray-600 rounded-md">Fish</NavLink>
                    <NavLink to="/eggs" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] border-[1px] border-gray-600 rounded-md">Eggs</NavLink>
                    <NavLink to="/tea-coffe" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] border-[1px] border-gray-600 rounded-md">Tea & Coffe</NavLink>
                    <NavLink to="/spices" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] border-[1px] border-gray-600 rounded-md">Spices</NavLink>
                    <NavLink to="/dry-fruits" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] border-[1px] border-gray-600 rounded-md">Dry Fruits</NavLink>
                </div>           
            </div>
        </div>
    );
}

export default Navbar;