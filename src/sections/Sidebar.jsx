import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({ toggle, setToggle }) => {
    const path = useLocation().pathname.split('/').pop();
    
    return (
        <div onClick={(e) => e.stopPropagation()} className={`${toggle ? 'translate-x-0' : 'translate-x-[-100%]'} px-[1.4rem] py-[1rem] fixed top-0 left-0 w-[300px] h-[100vh] bg-[#122829] z-[99999] transition-transform duration-300`}>
            <div className="">
                <Link to="/" onClick={() => setToggle(false)} className="px-[0.8rem] text-[2rem] text-[orange]" style={{fontFamily: 'Croissant One'}}>Grocery</Link>
                <ul className="my-[1rem]">
                    <NavLink to="/" onClick={() => setToggle(false)} className={`${path === '' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>Home</NavLink>
                    <NavLink to="/groceries" onClick={() => setToggle(false)} className={`${path === 'groceries' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>Groceries</NavLink>
                    <NavLink to="/groceries/trending" onClick={() => setToggle(false)} className={`${path === 'trending' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>Trending now</NavLink>
                    <NavLink to="/groceries/raw-products" onClick={() => setToggle(false)} className={`${path === 'raw-products' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>Raw Products</NavLink>
                    <NavLink to="/groceries/beverages" onClick={() => setToggle(false)} className={`${path === 'beverages' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>Beverages</NavLink>
                    <NavLink to="/groceries/offers" onClick={() => setToggle(false)} className={`${path === 'offers' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>New Offers</NavLink>
                    <NavLink to="/user/orders" onClick={() => setToggle(false)} className={`${path === 'orders' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>My Orders</NavLink>
                    <NavLink to="/about" onClick={() => setToggle(false)} className={`${path === 'about' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>About Us</NavLink>
                    <NavLink to="/help" onClick={() => setToggle(false)} className={`${path === 'help' ? 'bg-[#173334]' : null} block px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.2rem] hover:bg-[#173334] rounded-lg`}>Help</NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;