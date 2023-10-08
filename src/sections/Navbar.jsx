import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// icons
import { BsLightningCharge } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className="w-full border-b-[1px] border-gray-200">

            {/* nav links */}
            <div className="flex items-center justify-between max-w-[1420px] mx-auto px-[0.4rem] py-[0.2rem] bg-[#fff]">
                <div className="flex items-center justify-center">
                    <NavLink to="/" className="navLink pe-[2.4rem] py-[0.8rem] text-[1.1rem] text-[#222] hover:text-[crimson] font-[600] transition duration-300 list-none cursor-pointer">Home</NavLink>
                    <NavLink to="/products" className="navLink pe-[2.4rem] py-[0.8rem] text-[1.1rem] text-[#222] hover:text-[crimson] font-[600] transition duration-300 list-none cursor-pointer">Products</NavLink>
                    <NavLink to="/groceries" className="navLink pe-[2.4rem] py-[0.8rem] text-[1.1rem] text-[#222] hover:text-[crimson] font-[600] transition duration-300 list-none cursor-pointer">Groceries</NavLink>
                    <NavLink to="/fruits-&-vegetables" className="navLink pe-[2.4rem] py-[0.8rem] text-[1.1rem] text-[#222] hover:text-[crimson] font-[600] transition duration-300 list-none cursor-pointer">Fruits & Vegetables</NavLink>
                    <NavLink to="/foods" className="navLink pe-[2.4rem] py-[0.8rem] text-[1.1rem] text-[#222] hover:text-[crimson] font-[600] transition duration-300 list-none cursor-pointer">Foods</NavLink>
                    <NavLink to="/restaurants" className="navLink pe-[2.4rem] py-[0.8rem] text-[1.1rem] text-[#222] hover:text-[crimson] font-[600] transition duration-300 list-none cursor-pointer">Restaurants</NavLink>
                    <NavLink to="/services" className="navLink pe-[2.4rem] py-[0.8rem] text-[1.1rem] text-[#222] hover:text-[crimson] font-[600] transition duration-300 list-none cursor-pointer">Services</NavLink>
                    <NavLink to="/about" className="navLink pe-[2.4rem] py-[0.8rem] text-[1.1rem] text-[#222] hover:text-[crimson] font-[600] transition duration-300 list-none cursor-pointer">About</NavLink>
                    <NavLink to="/contact" className="navLink pe-[2.4rem] py-[0.8rem] text-[1.1rem] text-[#222] hover:text-[crimson] font-[600] transition duration-300 list-none cursor-pointer">Contact</NavLink>
                </div>

                {/* offers button */}
                <div className="flex items-center justify-center px-[1rem] py-[0.3rem] bg-[crimson] rounded-lg cursor-pointer">
                    <BsLightningCharge className="text-[1.1rem] text-[#fff]"/>
                    <Link to="/offers" className="text-[1.2rem] text-[#fff] ml-[0.3rem]">Offers</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;