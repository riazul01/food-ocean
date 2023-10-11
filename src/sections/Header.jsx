import React from 'react';
import { Link } from 'react-router-dom';

// icons
import { BiSearchAlt } from 'react-icons/bi';
import { PiShoppingCartDuotone } from 'react-icons/pi';
import { FiPhoneCall, FiUser } from 'react-icons/fi';
import { LuClock4 } from 'react-icons/lu';

const Header = () => {
    return (
        <div className="w-full bg-[#173334]">
            <div className="mx-[auto] px-[0.4rem] py-[1.6rem] flex items-center justify-between max-w-[1420px]">
                {/* logo */}
                <Link to="/" className="text-[2rem] text-[orange]" style={{fontFamily: 'Croissant One'}}>Grocery</Link>

                {/* search bar */}
                <div className="flex items-center justify-center rounded-lg overflow-hidden">
                    <select className="pl-[0.6rem] h-[44px] w-[140px] text-[#fff] text-[1.1rem] bg-[#173334] border-[2px] border-[#214445] outline-none rounded-l-lg">
                        <option value="all">All</option>
                        <option value="foods">Foods</option>
                        <option value="groceries">Groceries</option>
                        <option value="restaurants">Restaurants</option>
                    </select>
                    
                    <input className="pl-[1rem] text-[1.1rem] text-[#fff] h-[44px] w-[360px] bg-transparent border-[2px] border-x-0 border-[#214445] outline-none" type="text" placeholder="Search products..." />
                    <div className="text-[1.1rem] text-[#fff] flex items-center justify-center h-[44px] w-[52px] bg-[#214445] cursor-pointer">
                        <BiSearchAlt className="text-[1.6rem]"/>
                    </div>
                </div>

                {/* working hours */}
                <div className="flex items-center justify-center">
                    <div className="px-[0.6rem]">
                        <LuClock4 className="text-[#fff] text-[1.3rem]"/>
                    </div>
                    <div className="">
                        <p className="text-[#fff] text-[1rem] font-bold">Sunday - Thursday</p>
                        <p className="text-[#fff] text-[1rem]">9:00 AM - 10:00 PM</p>
                    </div>
                </div>

                {/* icon links */}
                <div className="flex items-center">
                    <Link to="/support">
                        <FiPhoneCall className="ml-[1.4rem] text-[orange] text-[1.4rem] cursor-pointer"/>
                    </Link>
                    <Link to="/cart">
                        <PiShoppingCartDuotone className="ml-[1.4rem] text-[orange] text-[1.6rem] cursor-pointer"/>
                    </Link>
                    <Link to="/profile">
                        <FiUser className="ml-[1.4rem] text-[orange] text-[1.6rem] cursor-pointer"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;