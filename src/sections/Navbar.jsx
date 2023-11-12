import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const path = useLocation().pathname.split('/');

    let flag = true;
    
    // switch raw-products and beverages links
    if (path[path.length - 1] === 'raw-products' || path[path.length - 2] === 'raw-products') {
        flag = true;
    } else if (path[path.length - 1] === 'beverages' || path[path.length - 2] === 'beverages') {
        flag = false;
    }

    return (
        <div className="w-full">
            {/* nav links */}
            <div className=" mx-auto px-[0.4rem] py-[0.8rem] md:py-[1.4rem] flex items-center justify-between max-w-[1420px]">
                <div className="flex flex-wrap items-center justify-center">
                    <NavLink to="/" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Home</NavLink>
                    <NavLink to="/groceries" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Groceries</NavLink>
                    <NavLink to="/groceries/raw-products" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Raw Products</NavLink>
                    <NavLink to="/groceries/beverages" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Beverages</NavLink>
                    {flag && <NavLink to="/groceries/raw-products/vegetables" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Vegetables</NavLink>}
                    {flag && <NavLink to="/groceries/raw-products/fruits" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Fruits</NavLink>}
                    {flag && <NavLink to="/groceries/raw-products/meat" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Meat</NavLink>}
                    {flag && <NavLink to="/groceries/raw-products/fish" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Fish</NavLink>}
                    {flag && <NavLink to="/groceries/raw-products/eggs" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Eggs</NavLink>}
                    {flag && <NavLink to="/groceries/raw-products/spices" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Spices</NavLink>}
                    {flag && <NavLink to="/groceries/raw-products/rice" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Rice</NavLink>}
                    {flag && <NavLink to="/groceries/raw-products/flour" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Flour</NavLink>}
                    {flag && <NavLink to="/groceries/raw-products/oil" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Oil</NavLink>}
                    {!flag && <NavLink to="/groceries/beverages/tea-coffe" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Tea & Coffe</NavLink>}
                    {!flag && <NavLink to="/groceries/beverages/dry-fruits" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Dry Fruits</NavLink>}
                    {!flag && <NavLink to="/groceries/beverages/jams" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Jams & Jellies</NavLink>}
                    {!flag && <NavLink to="/groceries/beverages/biscuits" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Biscuits</NavLink>}
                    {!flag && <NavLink to="/groceries/beverages/cakes" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Cakes</NavLink>}
                    {!flag && <NavLink to="/groceries/beverages/breads" className="navLink mb-[0.4rem] mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Breads</NavLink>}
                </div>
            </div>
        </div>
    );
}

export default Navbar;