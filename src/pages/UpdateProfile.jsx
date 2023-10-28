import React, { useContext, useEffect, useState } from 'react';
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

const UpdateProfile = () => {
    const userDetails = useContext(UserDetailsContext);

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        gender: 'male',
        imgUrl: ''
    });

    const [address, setAddress] = useState({
        street: '',
        city: '',
        postcode: '',
        division: 'dhaka',
        country: 'Bangladesh'
    });

    const [profileImage, setProfileImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        if (userDetails) {
            setUser({
                name: userDetails.name ? userDetails.name : '',
                email: userDetails.email ? userDetails.email : '',
                phone: userDetails.phone ? userDetails.phone : '',
                gender: userDetails.gender ? userDetails.gender : 'male'
            });

            setAddress({
                street: userDetails.address.street ? userDetails.address.street : '',
                city: userDetails.address.city ? userDetails.address.city : '',
                postcode: userDetails.address.postcode ? userDetails.address.postcode : '',
                division: userDetails.address.division ? userDetails.address.division : 'dhaka',
                country: 'Bangladesh'
            });
        }
    }, [userDetails]);

    useEffect(() => {
        if (profileImage === null || profileImage === undefined) {
            return;
        }

        const objUrl = URL.createObjectURL(profileImage);
        setPreviewImage(objUrl);

        // free memory when component is unmounted
        return (() => URL.revokeObjectURL(objUrl));
    }, [profileImage]);

    const handleImageInput = (e) => {
        // fix select file cancelation problem
        if (e.target.files[0] !== undefined) {
            setProfileImage(e.target.files[0]);
        }
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleAddressChange = (e) => {
        setAddress({...address, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {...user, address: {...address}};
        console.log(userData);
    }

    return (
        <AppLayout>
            <ProfileLayout>
                {/* title */}
                <h1 className="pb-[0.2rem] text-[#173334] text-[1.6rem] font-[500] border-b-[1px] border-dashed border-[#ddd]">Update Profile</h1>
                
                {/* header */}
                <div className="mt-[1rem] flex items-end justify-start gap-[1rem]">
                    <div className="h-[130px] w-[130px] rounded-md overflow-hidden">
                        <img src={previewImage || DefaultImg} className="h-full w-full object-cover" alt="profile" />
                    </div>
                    <div className="">
                        <h1 className="text-[1.6rem] font-bold">{userDetails ? (userDetails.name ? userDetails.name : <Skeleton width={100}/>) : <Skeleton width={100}/>}</h1>
                        {userDetails ? <div className="flex items-center">
                            <SlLocationPin className="text-[1.1rem]"/>
                            <p className="mt-[0.2rem] ml-[0.3rem] text-[1.1rem]">{userDetails.address ? `${userDetails.address.division}, ${userDetails.address.country}` : <Skeleton width={100}/>}</p>
                        </div> : <Skeleton containerClassName="flex-1" width={100}/>}
                        {userDetails ? <div className="flex items-center">
                            <FiCalendar className="text-[1.1rem]"/>
                            <p className="mt-[0.2rem] ml-[0.3rem] text-[1.1rem]">{userDetails.joinedDate ? `Joined - ${userDetails.joinedDate.split(' ')[0]}, ${userDetails.joinedDate.split(' ')[2]}` : <Skeleton width={100}/>}</p>
                        </div> : <Skeleton containerClassName="flex-1" width={100}/>}
                    </div>
                </div>

                <div className="mt-[1rem]">
                    <label htmlFor="profileImg" className="px-[0.8rem] py-[0.2rem]  bg-[#ddd] border-[1px] border-[#999] rounded-sm">Change Image</label>
                    <input type="file" id="profileImg" onChange={handleImageInput} accept="image/*" className="hidden" />
                </div>

                {/* description */}
                <form onSubmit={handleSubmit} className="mt-[2rem]">
                    <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Name:</strong>
                        <input value={user.name} onChange={handleChange} type="text" name="name" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Your name" required />
                    </div>
                    <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Email:</strong>
                        <input value={user.email} onChange={handleChange} type="email" name="email" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Your email" disabled />
                    </div>
                    <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Phone:</strong>
                        <input value={user.phone} onChange={handleChange} type="phone" name="phone" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Phone number" required />
                    </div>
                    <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Gender:</strong>
                        <select value={user.gender} onChange={handleChange} name="gender" className="px-[0.4rem] py-[0.1rem] border-[1px] border-[silver] outline-none rounded-md">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    {/* address */}
                    <p className="mt-[1.1rem] text-[#555] text-[1.2rem] font-bold inline-block border-b-[2px] border-[#555]">Address</p>
                    <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Street:</strong>
                        <input value={address.street} onChange={handleAddressChange} type="text" name="street" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Street" required />
                    </div>
                    <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">City:</strong>
                        <input value={address.city} onChange={handleAddressChange} type="text" name="city" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="City" required />
                    </div>
                    <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Postcode:</strong>
                        <input value={address.postcode} onChange={handleAddressChange} type="text" name="postcode" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Postcode" required />
                    </div>
                    <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Division:</strong>
                        <select value={address.division} onChange={handleAddressChange} name="division" className="px-[0.4rem] py-[0.1rem] border-[1px] border-[silver] outline-none rounded-md">
                            <option value="dhaka">Dhaka</option>
                            <option value="barishal">Barishal</option>
                            <option value="sylhet">Sylhet</option>
                            <option value="mymensingh">Mymensingh</option>
                            <option value="rajshahi">Rajshahi</option>
                            <option value="rangpur">Rangpur</option>
                            <option value="khulna">Khulna</option>
                            <option value="chattogram">Chattogram</option>
                        </select>
                    </div>
                    <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Country:</strong>
                        <input value={address.country} onChange={handleAddressChange} type="text" name="country" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Country" disabled/>
                    </div>
                    {/* update button */}
                    <button type="submit" className="mt-[2rem] px-[0.6rem] py-[0.2rem] text-[#fff] font-[500] bg-green-800 rounded-md">Update account</button>
                </form>
            </ProfileLayout>
        </AppLayout>
    );
}

export default UpdateProfile;
