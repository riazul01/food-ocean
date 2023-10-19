import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <div className="w-full">
            {/* nav links */}
            <div className="flex items-center justify-between max-w-[1420px] mx-auto px-[0.4rem] py-[1.4rem]">
                <div className="flex items-center justify-center">
                    <NavLink to="/" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Home</NavLink>
                    <NavLink to="/groceries" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Groceries</NavLink>
                    {<NavLink onClick={() => setToggle(true)} to="/groceries/raw-products" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Raw Products</NavLink>}
                    {<NavLink onClick={() => setToggle(false)} to="/groceries/beverages" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Beverages</NavLink>}
                    {toggle && <NavLink to="/groceries/raw-products/vegetables" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Vegetables</NavLink>}
                    {toggle && <NavLink to="/groceries/raw-products/fruits" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Fruits</NavLink>}
                    {toggle && <NavLink to="/groceries/raw-products/meat" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Meat</NavLink>}
                    {toggle && <NavLink to="/groceries/raw-products/fish" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Fish</NavLink>}
                    {toggle && <NavLink to="/groceries/raw-products/eggs" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Eggs</NavLink>}
                    {!toggle && <NavLink to="/groceries/beverages/tea-coffe" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Tea & Coffe</NavLink>}
                    {toggle && <NavLink to="/groceries/raw-products/spices" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Spices</NavLink>}
                    {!toggle && <NavLink to="/groceries/beverages/dry-fruits" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Dry Fruits</NavLink>}
                    {!toggle && <NavLink to="/groceries/beverages/jams" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Jams & Jellies</NavLink>}
                    {!toggle && <NavLink to="/groceries/beverages/biscuits" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Biscuits</NavLink>}
                    {!toggle && <NavLink to="/groceries/beverages/cakes" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Cakes</NavLink>}
                    {!toggle && <NavLink to="/groceries/beverages/breads" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Breads</NavLink>}
                    {toggle && <NavLink to="/groceries/raw-products/rice" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Rice</NavLink>}
                    {toggle && <NavLink to="/groceries/raw-products/flour" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Flour</NavLink>}
                    {toggle && <NavLink to="/groceries/raw-products/oil" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Oil</NavLink>}
                </div>
            </div>
        </div>
    );
}

export default Navbar;