import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// icons
import { GrLocation } from 'react-icons/gr';
import { BiSearchAlt } from 'react-icons/bi';
import { PiShoppingCartDuotone } from 'react-icons/pi';
import { MdArrowDropDown } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';

const Header = () => {
    const [activeLocationBox, setActiveLocationBox] = useState(false);
    const [city, setCity] = useState('Dhaka');

    useEffect(() => {
        const body = document.querySelector('body');
        body.onclick = () => {
            setActiveLocationBox(false);
        }
    });

    const handleLocationBox = (e) => {
        e.stopPropagation();
        setActiveLocationBox(!activeLocationBox);
    }

    return (
        <div className="w-full border-b-[1px] border-gray-200">
            <div className="flex items-center justify-between max-w-[1420px] mx-[auto] px-[0.4rem] py-[1.2rem] bg-[#fff]">
                {/* logo */}
                <Link to="/" className="text-[2rem] text-[crimson]" style={{fontFamily: 'Croissant One'}}>Food<span style={{fontFamily: 'Amita'}}>Ocean</span></Link>

                {/* location */}
                <div className="relative w-[280px]">
                    <div className="flex items-center cursor-pointer" onClick={handleLocationBox}>
                        <div className="flex items-center justify-center p-[0.6rem] rounded-full bg-slate-200">
                            <GrLocation className="text-[1.2rem]"/>
                        </div>
                        <div className="flex items-center">
                            <div className="ml-[0.6rem]">
                                <p className="text-[0.9rem]">Select Location</p>
                                <p className="text-[1.1rem]">{city}, Bangladesh</p>
                            </div>
                            <MdArrowDropDown className="text-[1.1rem]"/>
                        </div>
                    </div>
                    
                    {/* location dropdown */}
                    <div onClick={(e) => e.stopPropagation()} className={`absolute ${activeLocationBox ? 'top-[3.4rem] left-0 opacity-100 visible pointer-events-auto' : 'top-[5rem] left-0 opacity-0 invisible pointer-events-none'} w-[260px] px-[0.6rem] py-[0.4rem] bg-[#fff] z-[9999] rounded-md trasition duration-300 border-[1px] border-gray-300`}>
                        <h1 className="py-[0.4rem] pl-[0.3rem] text-[1.1rem] font-medium">Select Your City</h1>
                        <div onClick={() => setCity('Dhaka')} className={`flex items-center ${city === 'Dhaka' ? 'bg-[#ddd]' : 'bg-transparent'} cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#ddd] rounded-md transition duration-200`}>
                            <p className="text-[1rem]">Dhaka</p>
                        </div>
                        <div onClick={() => setCity('Barishal')} className={`flex items-center ${city === 'Barishal' ? 'bg-[#ddd]' : 'bg-transparent'} cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#ddd] rounded-md transition duration-200`}>
                            <p className="text-[1rem]">Barishal</p>
                        </div>
                        <div onClick={() => setCity('Chattogram')} className={`flex items-center ${city === 'Chattogram' ? 'bg-[#ddd]' : 'bg-transparent'} cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#ddd] rounded-md transition duration-200`}>
                            <p className="text-[1rem]">Chattogram</p>
                        </div>
                        <div onClick={() => setCity('Khulna')} className={`flex items-center ${city === 'Khulna' ? 'bg-[#ddd]' : 'bg-transparent'} cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#ddd] rounded-md transition duration-200`}>
                            <p className="text-[1rem]">Khulna</p>
                        </div>
                        <div onClick={() => setCity('Rajshahi')} className={`flex items-center ${city === 'Rajshahi' ? 'bg-[#ddd]' : 'bg-transparent'} cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#ddd] rounded-md transition duration-200`}>
                            <p className="text-[1rem]">Rajshahi</p>
                        </div>
                        <div onClick={() => setCity('Rangpur')} className={`flex items-center ${city === 'Rangpur' ? 'bg-[#ddd]' : 'bg-transparent'} cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#ddd] rounded-md transition duration-200`}>
                            <p className="text-[1rem]">Rangpur</p>
                        </div>
                        <div onClick={() => setCity('Mymensingh')} className={`flex items-center ${city === 'Mymensingh' ? 'bg-[#ddd]' : 'bg-transparent'} cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#ddd] rounded-md transition duration-200`}>
                            <p className="text-[1rem]">Mymensingh</p>
                        </div>
                        <div onClick={() => setCity('Sylhet')} className={`flex items-center ${city === 'Sylhet' ? 'bg-[#ddd]' : 'bg-transparent'} cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#ddd] rounded-md transition duration-200`}>
                            <p className="text-[1rem]">Sylhet</p>
                        </div>
                    </div>
                </div>

                {/* search bar */}
                <div className="flex items-center justify-center rounded-lg overflow-hidden">
                    <select className="pl-[0.6rem] h-[44px] w-[140px] text-[1.1rem] text-[#fff] bg-[crimson] outline-none placeholder-[#fff]">
                        <option value="all">All</option>
                        <option value="foods">Foods</option>
                        <option value="groceries">Groceries</option>
                        <option value="restaurants">Restaurants</option>
                    </select>
                    
                    <input className="h-[44px] w-[360px] pl-[1rem] text-[1.1rem] text-[#222] border-[2px] border-x-0 border-[crimson] outline-none" type="text" placeholder="Search products..." />
                    <div className="flex items-center justify-center h-[44px] w-[52px] text-[1.1rem] text-[#fff] bg-[crimson] cursor-pointer">
                        <BiSearchAlt className="text-[1.6rem]"/>
                    </div>
                </div>

                {/* icon links */}
                <div className="flex items-center">
                    <Link to="/support">
                        <FiPhoneCall className="text-[1.4rem] ml-[1.4rem] cursor-pointer"/>
                    </Link>
                    <Link to="/cart">
                        <PiShoppingCartDuotone className="text-[1.6rem] ml-[1.4rem] cursor-pointer"/>
                    </Link>
                    <Link to="/profile">
                        <FiUser className="text-[1.6rem] ml-[1.4rem] cursor-pointer"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;