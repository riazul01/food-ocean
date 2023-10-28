import React, { useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import ProfileLayout from '../layouts/ProfileLayout';

import { UserDetailsContext } from '../context/UserDetailsContextProvider';

// icons
import { SlLocationPin } from 'react-icons/sl';
import { FiCalendar } from 'react-icons/fi';

import DefaultImg from '../assets/images/shopping.png';

const Profile = () => {
    const userDetails = useContext(UserDetailsContext);

    console.log(userDetails);

    let joinedDate = 'Month, YYYY';

    if (userDetails.joinedDate) {
        let dateArr = userDetails.joinedDate.split(' ');
        joinedDate = `${dateArr[0]}, ${dateArr[2]}`;
    }

    return (
        <AppLayout>
            <ProfileLayout>
                {/* title */}
                <h1 className="pb-[0.2rem] text-[#173334] text-[1.6rem] font-[500] border-b-[1px] border-dashed border-[#ddd]">My Profile</h1>
                
                {/* header */}
                <div className="mt-[1rem] flex items-end justify-start gap-[1rem]">
                    <div className="h-[130px] w-[130px] rounded-md overflow-hidden">
                        <img src={userDetails.imgUrl || DefaultImg} className="h-full w-full object-cover" alt="profile" />
                    </div>
                    <div className="">
                        <h1 className="text-[1.6rem] font-bold">{userDetails ? userDetails.name : 'Mr. X'}</h1>
                        <div className="flex items-center">
                            <SlLocationPin className="text-[1.1rem]"/>
                            <p className="mt-[0.2rem] ml-[0.3rem] text-[1.1rem]">Sylhet, Bangladesh</p>
                        </div>
                        <div className="flex items-center">
                            <FiCalendar className="text-[1.1rem]"/>
                            <p className="mt-[0.2rem] ml-[0.3rem] text-[1.1rem]">Joined - {joinedDate}</p>
                        </div>
                    </div>
                </div>

                {/* description */}
                <div className="mt-[2rem]">
                    <p className="mt-[0.8rem] flex items-center"><strong className="text-[1.1rem] w-[120px]">Email:</strong><span className="text-[1.1rem]">{userDetails.email ? userDetails.email : ''}</span></p>
                    <p className="mt-[0.8rem] flex items-center"><strong className="text-[1.1rem] w-[120px]">Phone:</strong><span className="text-[1.1rem]">{userDetails.phone ? userDetails.phone : '-:-'}</span></p>
                    <p className="mt-[0.8rem] flex items-center"><strong className="text-[1.1rem] w-[120px]">Gender:</strong><span className="text-[1.1rem]">{userDetails.gender ? userDetails.gender : '-:-'}</span></p>
                    <p className="mt-[0.8rem] flex items-center"><strong className="text-[1.1rem] w-[120px]">Address:</strong><span className="text-[1.1rem]">{`${userDetails.address.division ? userDetails.address.division : 'Dhaka'}, Bangladesh`}</span></p>
                </div>

                {/* delete account button */}
                <button className="mt-[2rem] px-[0.6rem] py-[0.2rem] text-[#a71818] font-[500] border-[1px] border-[#a71818] rounded-md">Delete account</button>
            </ProfileLayout>
        </AppLayout>
    );
}

export default Profile;