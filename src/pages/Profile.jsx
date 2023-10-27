import React from 'react';
import AppLayout from '../layouts/AppLayout';
import ProfileLayout from '../layouts/ProfileLayout';

// icons
import { SlLocationPin } from 'react-icons/sl';
import { FiCalendar } from 'react-icons/fi';

import TestImg from '../assets/images/man.png';

const Profile = () => {
    return (
        <AppLayout>
            <ProfileLayout>
                <div className="">
                    {/* title */}
                    <h1 className="text-[#173334] text-[1.6rem] font-[500] border-b-[1px] border-dashed border-[#ddd]">My Profile</h1>
                    
                    {/* header */}
                    <div className="mt-[1rem] flex items-end justify-start gap-[1rem]">
                        <div className="h-[140px] w-140px] border-[5px] border-[#333] rounded-md">
                            <img src={TestImg} className="h-full w-full object-cover" alt="" />
                        </div>
                        <div className="">
                            <h1 className="text-[1.6rem] font-bold">Mr. Jhon</h1>
                            <div className="flex items-center">
                                <SlLocationPin className="text-[1.1rem]"/>
                                <p className="mt-[0.2rem] ml-[0.3rem] text-[1.1rem]">Sylhet, Bangladesh</p>
                            </div>
                            <div className="flex items-center">
                                <FiCalendar className="text-[1.1rem]"/>
                                <p className="mt-[0.2rem] ml-[0.3rem] text-[1.1rem]">Joined - November, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileLayout>
        </AppLayout>
    );
}

export default Profile;