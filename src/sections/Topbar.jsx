import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// icons
import { GoMail } from 'react-icons/go';
import { FiUser } from 'react-icons/fi';
import { FaRegEdit } from 'react-icons/fa';
import { FaQuestion } from 'react-icons/fa6';
import { TbWorldBolt } from 'react-icons/tb';
import { MdArrowDropDown } from 'react-icons/md';
import { BsSpeedometer2, BsChatRightText } from 'react-icons/bs';

const Topbar = () => {
    const [activeHelpBox, setActiveHelpBox] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        body.onclick = () => {
            setActiveHelpBox(false);
        }
    });

    const handleHelpBox = (e) => {
        e.stopPropagation();
        setActiveHelpBox(!activeHelpBox);
    }

    return (
        <div className="h-[auto] w-full py-[0.8rem] bg-[#272727]">
            <div className="flex justify-between max-w-[1420px] mx-[auto] px-[0.4rem] text-[#fff]">
                
                {/* help dropdown */}
                <div className="relative">
                    <div onClick={handleHelpBox} className="flex items-center cursor-pointer">
                        <MdArrowDropDown/>
                        <p>Need Help?</p>
                    </div>

                    <div onClick={(e) => e.stopPropagation()} className={`absolute ${activeHelpBox ? 'top-[2.4rem] left-0 opacity-100 visible pointer-events-auto' : 'top-[4rem] left-0 opacity-0 invisible pointer-events-none'} w-[260px] px-[0.6rem] py-[0.4rem] bg-[#222] z-[9999] rounded-md trasition duration-300`}>
                        <h1 className="py-[0.4rem] pl-[0.3rem] text-[1.1rem] font-medium">Customer Service</h1>
                        <div className="flex items-center cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#333] rounded-md transition duration-200">
                            <BsSpeedometer2 className="text-[1.1rem]"/>
                            <p className="pl-[0.4rem] text-[1rem]">Track my order</p>
                        </div>
                        <div className="flex items-center cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#333] rounded-md transition duration-200">
                            <BsChatRightText className="text-[1.1rem]"/>
                            <p className="pl-[0.4rem] text-[1rem]">Live Chat</p>
                        </div>
                        <div className="flex items-center cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#333] rounded-md transition duration-200">
                            <GoMail className="text-[1.1rem]"/>
                            <p className="pl-[0.4rem] text-[1rem]">Send Email</p>
                        </div>
                        <div className="flex items-center cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#333] rounded-md transition duration-200">
                            <FaQuestion className="text-[1.1rem]"/>
                            <p className="pl-[0.4rem] text-[1rem]">Frequently Asked Question</p>
                        </div>
                        <div className="flex items-center cursor-pointer py-[0.4rem] px-[0.6rem] hover:bg-[#333] rounded-md transition duration-200">
                            <TbWorldBolt className="text-[1.1rem]"/>
                            <p className="pl-[0.4rem] text-[1rem]">International Shipping Info</p>
                        </div>
                    </div>
                </div>

                {/* account management links */}
                <div className="flex items-center">
                    <Link to="/login" className="flex items-center cursor-pointer">
                        <FiUser />
                        <p className="ml-[0.2rem]">Login</p>
                    </Link>
                    <span className="mx-[1rem]">|</span>
                    <Link to="/register" className="flex items-center cursor-pointer">
                        <FaRegEdit/>
                        <p className="ml-[0.2rem]">Register</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Topbar;