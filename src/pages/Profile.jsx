import React, { useContext } from 'react';

// layout
import AppLayout from '../layouts/AppLayout';
import ProfileLayout from '../layouts/ProfileLayout';

// context
import { UserDetailsContext } from '../context/UserDetailsContextProvider';

// skeleton loader
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// icons
import { SlLocationPin } from 'react-icons/sl';
import { FiCalendar } from 'react-icons/fi';

const Profile = () => {
    const userDetails = useContext(UserDetailsContext);

    return (
        <AppLayout>
            <ProfileLayout>
                {/* title */}
                <h1 className="pb-[0.2rem] text-[#173334] text-[1.6rem] font-[500] border-b-[1px] border-dashed border-[#ddd]">My Profile</h1>
                
                {/* header */}
                <div className="mt-[1rem] flex items-end justify-start gap-[1rem]">
                    
                    {/* profile image */}
                    {userDetails ? <div className="h-[130px] w-[130px] rounded-md overflow-hidden">
                        {(userDetails.imgUrl || userDetails.defaultImg) ? <img src={(userDetails.imgUrl ? userDetails.imgUrl : null) || (userDetails.defaultImg ? userDetails.defaultImg : null)} className="h-full w-full object-cover" alt="profile"/> : <Skeleton className="w-[130px] h-[130px]"/>}
                    </div> : <Skeleton className="w-[130px] h-[130px]"/>}

                    {/* profile info */}
                    <div className="">

                        {/* name */}
                        <h1 className="text-[1.6rem] font-bold capitalize">{userDetails ? (userDetails.name ? userDetails.name : <Skeleton className="ml-[0.3rem] w-[120px]"/>) : <Skeleton className="ml-[0.3rem] w-[120px]"/>}</h1>
                        
                        {/* location */}
                        {userDetails ? <div className="flex items-center">
                            <SlLocationPin className="text-[1.1rem]"/>
                            {userDetails.address ? <p className="mt-[0.2rem] ml-[0.3rem] text-[1.1rem] capitalize">{`${userDetails.address.division}, ${userDetails.address.country}`}</p> : <Skeleton className="ml-[0.2rem] w-[104px] h-[20px]"/>}
                        </div> : <Skeleton containerClassName="flex-1" className="mt-[0.2rem] ml-[0.3rem] w-[120px] h-[22px]"/>}
                        
                        {/* joined date */}
                        {userDetails ? <div className="flex items-center">
                            <FiCalendar className="text-[1.1rem]"/>
                            {userDetails.joinedDate ? <p className="mt-[0.2rem] ml-[0.3rem] text-[1.1rem]">{`Joined - ${userDetails.joinedDate.split(' ')[0]}, ${userDetails.joinedDate.split(' ')[2]}`}</p> : <Skeleton className="ml-[0.2rem] w-[104px] h-[20px]"/>}
                        </div> : <Skeleton containerClassName="flex-1" className="mt-[0.6rem] ml-[0.3rem] w-[120px] h-[22px]"/>}
                    </div>
                </div>

                {/* description */}
                <div className="mt-[2rem]">

                    {/* email */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Email:</strong>
                        {userDetails.email ? <span className="text-[1.1rem]">{userDetails.email}</span> : <Skeleton className="w-[152px] h-[20px]"/>}
                    </div> : <Skeleton containerClassName="flex-1" className="mt-[0.8rem] w-[272px] h-[22px]"/>}

                    {/* phone */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Phone:</strong>
                        {userDetails.phone ? <span className="text-[1.1rem]">{userDetails.phone}</span>
                        : (userDetails.phone === '' ? <span className="text-[1.1rem]">{`[not added]`}</span> 
                        : <Skeleton className="w-[152px] h-[20px]"/>)}
                    </div> : <Skeleton containerClassName="flex-1" className="mt-[0.8rem] w-[272px] h-[22px]"/>}

                    {/* gender */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Gender:</strong>
                        {userDetails.gender ? <span className="text-[1.1rem] capitalize">{userDetails.gender}</span>
                        : (userDetails.gender === '' ? <span className="text-[1.1rem]">{`[not added]`}</span>
                        : <Skeleton className="w-[152px] h-[20px]"/>)}
                    </div> : <Skeleton className="mt-[0.8rem] w-[120px] h-[22px]"/>}

                    {/* address */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Address:</strong>
                        {userDetails.address ? <div className="flex items-center">
                            {userDetails.address.street && <span className="mr-[0.2rem] text-[1.1rem] capitalize">{userDetails.address.street},</span>}
                            {userDetails.address.city && <span className="text-[1.1rem] capitalize">{userDetails.address.city}{userDetails.address.postcode ? '-' : ','}</span>}
                            {userDetails.address.postcode && <span className="mr-[0.2rem] text-[1.1rem]">{userDetails.address.postcode},</span>}
                            {userDetails.address.division && <span className="mr-[0.2rem] text-[1.1rem] capitalize">{userDetails.address.division},</span>}
                            {userDetails.address.country && <span className="mr-[0.2rem] text-[1.1rem] capitalize">{userDetails.address.country}</span>}
                        </div> : <Skeleton className="w-[152px] h-[20px]"/>}
                    </div> : <Skeleton containerClassName="flex-1" className="mt-[0.8rem] w-[272px] h-[22px]"/>}
                </div>

                {/* delete account button */}
                {userDetails ? <button className="mt-[2rem] px-[0.6rem] py-[0.2rem] text-[#a71818] font-[500] border-[1px] border-[#a71818] rounded-md" disabled={userDetails.email ? false : true}>Delete account</button> : <Skeleton className="mt-[2rem] w-[120px] h-[22px]"/>}
            </ProfileLayout>
        </AppLayout>
    );
}

export default Profile;