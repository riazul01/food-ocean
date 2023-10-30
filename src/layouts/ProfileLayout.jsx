import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FiUser, FiUsers } from 'react-icons/fi';
import { FiUserCheck } from 'react-icons/fi';
import { RiListUnordered } from 'react-icons/ri';
import { RxExit } from 'react-icons/rx';

const ProfileLayout = ({ children }) => {
    const path = useLocation().pathname.split('/').pop();

    return (
        <div className="w-full h-auto">
            <div className="mx-auto pt-[1rem] pb-[3rem] max-w-[1420px] flex items-start justify-between gap-[1rem]">
                <div className="w-[240px]">
                    <div className="p-[0.4rem] w-full max-w-[240px] border-[1px] rounded-lg">
                        <Link to="/user/profile" className={`${path === 'profile' ? 'bg-[#eeefef]' : null} px-[0.6rem] py-[0.4rem] flex items-center rounded-lg hover:bg-[#eeefef] cursor-pointer transition-all duration-200`}>
                            <FiUser className="text-[1.2rem]"/>
                            <p className="ms-[0.6rem] text-[1.1rem] font-[500]">My Profile</p>
                        </Link>
                        <Link to="/user/update-profile" className={`${path === 'update-profile' ? 'bg-[#eeefef]' : null} px-[0.6rem] py-[0.4rem] flex items-center rounded-lg hover:bg-[#eeefef] cursor-pointer transition-all duration-200`}>
                            <FiUserCheck className="text-[1.2rem]"/>
                            <p className="ms-[0.6rem] text-[1.1rem] font-[500]">Update Profile</p>
                        </Link>
                        <Link to="/user/orders" className={`${path === 'orders' ? 'bg-[#eeefef]' : null} px-[0.6rem] py-[0.4rem] flex items-center rounded-lg hover:bg-[#eeefef] cursor-pointer transition-all duration-200`}>
                            <RiListUnordered className="text-[1.2rem]"/>
                            <p className="ms-[0.6rem] text-[1.1rem] font-[500]">My Orders</p>
                        </Link>
                        <div className="px-[0.6rem] py-[0.4rem] flex items-center rounded-lg hover:bg-[#eeefef] cursor-pointer transition-all duration-200">
                            <FiUsers className="text-[1.2rem]"/>
                            <a href="/" className="ms-[0.6rem] text-[1.1rem] font-[500]">Switch to Admin</a>
                        </div>
                        <div className="px-[0.6rem] py-[0.4rem] flex items-center rounded-lg hover:bg-[#eeefef] cursor-pointer transition-all duration-200">
                            <RxExit className="text-[1.2rem]"/>
                            <p className="ms-[0.6rem] text-[1.1rem] font-[500]">Logout</p>
                        </div>
                    </div>
                </div>
                <div className="w-[calc(100%-240px)]">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ProfileLayout;