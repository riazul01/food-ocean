import React, { useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import ProfileLayout from '../layouts/ProfileLayout';

import { UserDetailsContext } from '../context/UserDetailsContextProvider';

// skeleton loader
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// icons
import { SlLocationPin } from 'react-icons/sl';
import { FiCalendar } from 'react-icons/fi';

import DefaultImg from '../assets/images/shopping.png';

const Profile = () => {
    const userDetails = useContext(UserDetailsContext);

    return (
        <AppLayout>
            <ProfileLayout>
                {/* title */}
                <h1 className="pb-[0.2rem] text-[#173334] text-[1.6rem] font-[500] border-b-[1px] border-dashed border-[#ddd]">My Profile</h1>
                
                {/* header */}
                <div className="mt-[1rem] flex items-end justify-start gap-[1rem]">
                    <div className="h-[130px] w-[130px] rounded-md overflow-hidden">
                        <img src={DefaultImg} className="h-full w-full object-cover" alt="profile" />
                    </div>
                    <div className="">
                        <h1 className="text-[1.6rem] font-bold">{userDetails ? userDetails.name : <Skeleton width={100}/>}</h1>
                        {userDetails ? <div className="flex items-center">
                            <SlLocationPin className="text-[1.1rem]"/>
                            <p className="mt-[0.2rem] ml-[0.3rem] text-[1.1rem]">{`${userDetails.address.division}, ${userDetails.address.country}`}</p>
                        </div> : <Skeleton containerClassName="flex-1" width={100}/>}
                        {userDetails ? <div className="flex items-center">
                            <FiCalendar className="text-[1.1rem]"/>
                            <p className="mt-[0.2rem] ml-[0.3rem] text-[1.1rem]">{`Joined - ${userDetails.joinedDate.split(' ')[0]}, ${userDetails.joinedDate.split(' ')[2]}`}</p>
                        </div> : <Skeleton containerClassName="flex-1" width={100}/>}
                    </div>
                </div>

                {/* description */}
                <div className="mt-[2rem]">
                    <p className="mt-[0.8rem] flex items-center"><strong className="text-[1.1rem] w-[120px]">Email:</strong><span className="text-[1.1rem]">{userDetails ? userDetails.email : <Skeleton width={100}/>}</span></p>
                    <p className="mt-[0.8rem] flex items-center"><strong className="text-[1.1rem] w-[120px]">Phone:</strong><span className="text-[1.1rem]">{userDetails ? (userDetails.phone ? userDetails.phone : '-:-') : <Skeleton width={100}/>}</span></p>
                    <p className="mt-[0.8rem] flex items-center"><strong className="text-[1.1rem] w-[120px]">Gender:</strong><span className="text-[1.1rem]">{userDetails ? (userDetails.gender ? userDetails.gender : '-:-') : <Skeleton width={100}/>}</span></p>
                    <p className="mt-[0.8rem] flex items-center"><strong className="text-[1.1rem] w-[120px]">Address:</strong><span className="text-[1.1rem]">{userDetails ? `${userDetails.address.street} ${userDetails.address.city}${userDetails.address.city !== '' ? '-' : ''}${userDetails.address.postcode} ${userDetails.address.division} ${userDetails.address.country}`.trim().split(' ').join(', ') : <Skeleton width={100}/>}</span></p>
                </div>

                {/* delete account button */}
                <button className="mt-[2rem] px-[0.6rem] py-[0.2rem] text-[#a71818] font-[500] border-[1px] border-[#a71818] rounded-md">Delete account</button>
            </ProfileLayout>
        </AppLayout>
    );
}

export default Profile;