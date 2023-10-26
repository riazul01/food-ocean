import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const path = useLocation().pathname.split('/').pop();

    return (
        <div className="px-[2rem] py-[1rem] fixed top-0 left-0 w-[320px] h-[100vh] bg-[#122829] z-[99999]">
            <div className="">
                <Link to="/" className="px-[0.8rem] text-[2rem] text-[orange]" style={{fontFamily: 'Croissant One'}}>Grocery</Link>
                <ul className="my-[1rem]">
                    <NavLink to="/" className={`${path === '' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>Home</NavLink>
                    <NavLink to="/groceries" className={`${path === 'groceries' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>Groceries</NavLink>
                    <NavLink to="/groceries/trending" className={`${path === 'trending' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>Trending now</NavLink>
                    <NavLink to="/groceries/raw-products" className={`${path === 'raw-products' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>Raw Products</NavLink>
                    <NavLink to="/groceries/beverages" className={`${path === 'beverages' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>Beverages</NavLink>
                    <NavLink to="/about" className={`${path === 'about' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>About Us</NavLink>
                    <NavLink to="/help" className={`${path === 'help' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>Help</NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;