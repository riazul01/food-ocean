import React, { useContext, useEffect, useState } from 'react';

// layouts
import AppLayout from '../layouts/AppLayout';
import ProfileLayout from '../layouts/ProfileLayout';

// context
import { UserDetailsContext } from '../context/UserDetailsContextProvider';

// firebase
import { fs, storage } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { deleteObject } from "firebase/storage";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// skeleton loader
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// icons
import { SlLocationPin } from 'react-icons/sl';
import { FiCalendar } from 'react-icons/fi';

const UpdateProfile = () => {
    const userDetails = useContext(UserDetailsContext);

    const [user, setUser] = useState({id: '', name: '', email: '', phone: '', gender: 'male', joinedDate: '', imgUrl: null, defaultImg: null});
    const [address, setAddress] = useState({street: '', city: '', postcode: '', division: 'dhaka', country: 'Bangladesh'});
    const [profileImage, setProfileImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(false);

    // autofill
    useEffect(() => {
        if (userDetails) {
            setUser({
                id: userDetails.id ? userDetails.id : '',
                name: userDetails.name ? userDetails.name : '',
                email: userDetails.email ? userDetails.email : '',
                phone: userDetails.phone ? userDetails.phone : '',
                gender: userDetails.gender ? userDetails.gender : 'male',
                joinedDate: userDetails.joinedDate ? userDetails.joinedDate : '',
                imgUrl: userDetails.imgUrl ? userDetails.imgUrl : null,
                defaultImg: userDetails.defaultImg ? userDetails.defaultImg : null
            });

            setAddress({
                street: userDetails.address ? (userDetails.address.street ? userDetails.address.street : '') : '',
                city: userDetails.address ? (userDetails.address.city ? userDetails.address.city : '') : '',
                postcode: userDetails.address ? (userDetails.address.postcode ? userDetails.address.postcode : '') : '',
                division: userDetails.address ? (userDetails.address.division ? userDetails.address.division : 'dhaka') : 'dhaka',
                country: 'Bangladesh'
            });
        }
    }, [userDetails]);

    // convert image to object url
    useEffect(() => {
        if (profileImage === null || profileImage === undefined) {
            return;
        }
        const objUrl = URL.createObjectURL(profileImage);
        setPreviewImage(objUrl);

        // free memory when component is unmounted
        return (() => URL.revokeObjectURL(objUrl));
    }, [profileImage]);

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleAddressChange = (e) => {
        setAddress({...address, [e.target.name]: e.target.value});
    }

    const handleImageChange = (e) => {
        if (e.target.files[0] !== undefined) {
            setProfileImage(e.target.files[0]);
        }
    }

    // store updated data to firestore
    const updateProfileData = async (user) => {
        try {
            await setDoc(doc(fs, "users", userDetails.id), user);
            if (!profileImage) toast.success('Profile updated!');
        } catch (error) {
            if (!profileImage) toast.error('An error occured!');
            else console.log(error);
        } finally {
            setBtnDisabled(false);
            setProfileImage(null);
            setPreviewImage(null);
        }
    }

    const updateProfileDataWithImage = (user) => {
        const storageRef = ref(storage, `images/profile/${profileImage.name}`);
        const uploadTask = uploadBytesResumable(storageRef, profileImage);

        // upload image to storage
        uploadTask.on('state_changed', (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, (error) => {
            console.log(error);
            updateProfileData(user);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                user.imgUrl = downloadURL;
                updateProfileData(user);
            });
        });

        toast.promise(uploadTask, {
            pending: 'Uploading...',
            success: 'Profile updated!',
            error: 'An error occured!'
        });
    }

    const deletePreviousImageFromStorage = () => {
        const desertRef = ref(storage, user.imgUrl);

        deleteObject(desertRef).then(() => {
            console.log('Previous image deleted!');
        }).catch((error) => {
            console.log(error);
        });
    }

    const validateForm = (user) => {
        const phoneRegex = /^(\+88)?-?01[1-9]\d{8}$/;
        const zipRegex = /^\d{4}$/;

        if (!phoneRegex.test(user.phone)) {
            toast.error('Phone is not valid!');
            return false;
        }

        if (!zipRegex.test(user.address.postcode)) {
            toast.error('Postcode can contain only 4 digits');
            return false;
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {...user, address: {...address}};
        const isValid = validateForm(userData);
        if (!isValid) return;
        setBtnDisabled(true);

        if (profileImage === null || profileImage === undefined) {
            updateProfileData(userData);
        } else {
            if (user.imgUrl) {
                deletePreviousImageFromStorage();
            }
            updateProfileDataWithImage(userData);
        }
    }

    return (
        <AppLayout>
            <ProfileLayout>
                {/* title */}
                <h1 className="pb-[0.2rem] text-[#173334] text-[1.6rem] font-[500] border-b-[1px] border-dashed border-[#ddd]">Update Profile</h1>
                
                {/* header */}
                <div className="mt-[1rem] flex items-end justify-start gap-[1rem]">
                    
                    {/* profile image */}
                    {userDetails ? <div className="h-[130px] w-[130px] rounded-md overflow-hidden">
                        <img src={previewImage || (userDetails.imgUrl ? userDetails.imgUrl : null) || (userDetails.defaultImg ? userDetails.defaultImg : null)} className="h-full w-full object-cover" alt="profile"/>
                    </div> : <Skeleton className="w-[130px] h-[130px]"/>}

                    {/* profile info */}
                    <div className="">

                        {/* name */}
                        <h1 className="text-[1.6rem] font-bold capitalize">{userDetails ? (userDetails.name ? userDetails.name : <Skeleton className="ml-[0.3rem] w-[120px]"/>) : <Skeleton className="ml-[0.3rem] w-[120px]"/>}</h1>
                        
                        {/* location */}
                        {userDetails ? <div className="flex items-center">
                            <SlLocationPin className="text-[1.1rem]"/>
                            <p className="mt-[0.2rem] ml-[0.3rem] text-[1.1rem] capitalize">{userDetails.address ? `${userDetails.address.division}, ${userDetails.address.country}` : <Skeleton className="mb-[0.6rem] w-[130px] h-[22px]"/>}</p>
                        </div> : <Skeleton containerClassName="flex-1" className="mt-[0.2rem] ml-[0.3rem] w-[120px]"/>}
                        
                        {/* joined date */}
                        {userDetails ? <div className="flex items-center">
                            <FiCalendar className="text-[1.1rem]"/>
                            <p className="mt-[0.2rem] ml-[0.3rem] text-[1.1rem]">{userDetails.joinedDate ? `Joined - ${userDetails.joinedDate.split(' ')[0]}, ${userDetails.joinedDate.split(' ')[2]}` : <Skeleton className="mb-[0.6rem] w-[130px] h-[22px]"/>}</p>
                        </div> : <Skeleton containerClassName="flex-1" className="mt-[0.2rem] ml-[0.3rem] w-[120px]"/>}
                    </div>
                </div>

                {/* profile image change button */}
                {userDetails ? <div className="mt-[1rem]">
                    <label htmlFor="profileImg" className="px-[0.8rem] py-[0.2rem]  bg-[#ddd] border-[1px] border-[#999] rounded-sm">Change Image</label>
                    <input type="file" id="profileImg" onChange={handleImageChange} accept="image/*" className="hidden" />
                </div> : <Skeleton className="mt-[0.8rem] w-[130px] h-[25px]"/>}

                {/* description */}
                <form onSubmit={handleSubmit} className="mt-[2rem]">

                    {/* name */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Name:</strong>
                        <input value={user.name} onChange={handleChange} type="text" name="name" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Your name" required/>
                    </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[270px] h-[22px]"/>}

                    {/* email */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Email:</strong>
                        <input value={user.email} onChange={handleChange} type="email" name="email" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Your email" disabled/>
                    </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[270px] h-[22px]"/>}

                    {/* phone */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Phone:</strong>
                        <input value={user.phone} onChange={handleChange} type="phone" name="phone" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Phone number" required/>
                    </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[270px] h-[22px]"/>}

                    {/* gender */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Gender:</strong>
                        <select value={user.gender} onChange={handleChange} name="gender" className="px-[0.4rem] py-[0.1rem] border-[1px] border-[silver] outline-none rounded-md">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div> : <Skeleton className="mb-[0.6rem] w-[130px] h-[22px]"/>}

                    {/* address */}
                    {userDetails ? <h1 className="mt-[1.6rem] text-[#555] text-[1.2rem] font-bold inline-block">Address</h1> : <Skeleton className="mt-[1.6rem] mb-[0.6rem] w-[130px] h-[22px]"/>}
                    
                    {/* street */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Street:</strong>
                        <input value={address.street} onChange={handleAddressChange} type="text" name="street" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Street" required/>
                    </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[270px] h-[22px]"/>}

                    {/* city */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">City:</strong>
                        <input value={address.city} onChange={handleAddressChange} type="text" name="city" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="City" required/>
                    </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[270px] h-[22px]"/>}

                    {/* postcode */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Postcode:</strong>
                        <input value={address.postcode} onChange={handleAddressChange} type="text" name="postcode" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Postcode" required/>
                    </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[270px] h-[22px]"/>}

                    {/* division */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
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
                    </div> : <Skeleton className="mb-[0.6rem] w-[130px] h-[22px]"/>}

                    {/* country */}
                    {userDetails ? <div className="mt-[0.8rem] flex items-center">
                        <strong className="text-[1.1rem] w-[120px]">Country:</strong>
                        <input value={address.country} onChange={handleAddressChange} type="text" name="country" className="px-[0.4rem] py-[0.1rem] text-[1.1rem] w-[280px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Country" disabled/>
                    </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[270px] h-[22px]"/>}

                    {/* update button */}
                    {userDetails ? <button type="submit" className="mt-[2rem] px-[0.6rem] py-[0.2rem] text-[#fff] font-[500] bg-green-800 rounded-md" disabled={btnDisabled}>Update account</button> : <Skeleton className="mb-[0.6rem] w-[130px] h-[22px]"/>}
                </form>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    style={{zIndex: 999999}}
                />
            </ProfileLayout>
        </AppLayout>
    );
}

export default UpdateProfile;
