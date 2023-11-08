import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// layouts
import AppLayout from '../layouts/AppLayout';

// context
import { CartContext } from '../context/CartContextProvider';
import { UserDetailsContext } from '../context/UserDetailsContextProvider';

// icons
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

// skeleton loader
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const { subTotal, shippingCost, discount, totalCost, dispatch } = useContext(CartContext);
    const userDetails = useContext(UserDetailsContext);

    const [user, setUser] = useState({id: '', name: '', email: '', phone: '', gender: 'male', joinedDate: '', imgUrl: null, defaultImg: null});
    const [address, setAddress] = useState({street: '', city: '', postcode: '', division: 'dhaka', country: 'Bangladesh'});

    const navigate = useNavigate();

    // autofill
    useEffect(() => {
        if (userDetails) {
            setUser({
                id: userDetails.id ? userDetails.id : '',
                name: userDetails.name ? userDetails.name : '',
                email: userDetails.email ? userDetails.email : '',
                role: userDetails.role ? userDetails.role : '',
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

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleAddressChange = (e) => {
        setAddress({...address, [e.target.name]: e.target.value});
    }

     // submit checkout form
     const handleCheckout = (e) => {
        for (let key in user) {
            if (user[key] === '') {
                toast.error('Please fill your details first!');
                return;
            }
        }
        for (let key in address) {
            if (address[key] === '') {
                toast.error('Please fill your details first!');
                return;
            }
        }
        dispatch({type: 'CHECKOUT_CONFIRMED'});
        dispatch({type: 'RESET_ORDER_STATE'});
        localStorage.setItem("checkoutUserDetails", JSON.stringify({...user, address: address}));
        navigate('/payment');
    }

    return (
        <AppLayout>
            <div className="mx-auto px-[0.4rem] pb-[3rem] w-full max-w-[1420px]">
                {/* breadcrumb */}
                <div className="flex items-center justify-start gap-[0.4rem]">
                    <span onClick={() => navigate('/cart')} className="text-[#327e16] text-[1.1rem] font-[500] cursor-pointer">Cart</span>
                    <MdKeyboardDoubleArrowRight className="text-[#aaa] text-[1.3rem] font-[500] cursor-context-menu"/>
                    <span className="text-[#327e16] text-[1.1rem] font-[500] cursor-pointer">Checkout</span>
                    <MdKeyboardDoubleArrowRight className="text-[#aaa] text-[1.3rem] font-[500] cursor-context-menu"/>
                    <span className="text-[1.1rem] font-[500] cursor-pointer">Payment</span>
                </div>
                
                <div className="flex items-start justify-between gap-[1rem]">
                    {/* checkout form */}
                    <div className="w-[60%]">
                        <form className="mt-[2rem]">
                            {/* name */}
                            {userDetails ? <div className="mt-[0.8rem] flex flex-col sm:flex-row sm:items-center">
                                <strong className="text-[1.2rem] min-w-[160px]">Name:</strong>
                                <input value={user.name} onChange={handleChange} type="text" name="name" className="mt-[0.2rem] sm:mt-0 px-[0.4rem] py-[0.1rem] text-[1.2rem] w-[320px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Your name" required/>
                            </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[320px] h-[24px]"/>}

                            {/* email */}
                            {userDetails ? <div className="mt-[0.8rem] flex flex-col sm:flex-row sm:items-center">
                                <strong className="text-[1.2rem] w-[160px]">Email:</strong>
                                <input value={user.email} onChange={handleChange} type="email" name="email" className="mt-[0.2rem] sm:mt-0 px-[0.4rem] py-[0.1rem] text-[1.2rem] w-[320px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Your email"/>
                            </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[320px] h-[24px]"/>}

                            {/* phone */}
                            {userDetails ? <div className="mt-[0.8rem] flex flex-col sm:flex-row sm:items-center">
                                <strong className="text-[1.2rem] w-[160px]">Phone:</strong>
                                <input value={user.phone} onChange={handleChange} type="phone" name="phone" className="mt-[0.2rem] sm:mt-0 px-[0.4rem] py-[0.1rem] text-[1.2rem] w-[320px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Phone number" required/>
                            </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[320px] h-[24px]"/>}

                            {/* address */}
                            {userDetails ? <h1 className="mt-[1.6rem] text-[#555] text-[1.2rem] font-bold inline-block">Address</h1> : <Skeleton className="mt-[1.6rem] mb-[0.6rem] w-[130px] h-[24px]"/>}
                            
                            {/* street */}
                            {userDetails ? <div className="mt-[0.8rem] flex flex-col sm:flex-row sm:items-center">
                                <strong className="text-[1.2rem] w-[160px]">Street:</strong>
                                <input value={address.street} onChange={handleAddressChange} type="text" name="street" className="mt-[0.2rem] sm:mt-0 px-[0.4rem] py-[0.1rem] text-[1.2rem] w-[320px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Street" required/>
                            </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[320px] h-[24px]"/>}

                            {/* city */}
                            {userDetails ? <div className="mt-[0.8rem] flex flex-col sm:flex-row sm:items-center">
                                <strong className="text-[1.2rem] w-[160px]">City:</strong>
                                <input value={address.city} onChange={handleAddressChange} type="text" name="city" className="mt-[0.2rem] sm:mt-0 px-[0.4rem] py-[0.1rem] text-[1.2rem] w-[320px] border-[1px] border-[silver] outline-none rounded-md" placeholder="City" required/>
                            </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[320px] h-[24px]"/>}

                            {/* postcode */}
                            {userDetails ? <div className="mt-[0.8rem] flex flex-col sm:flex-row sm:items-center">
                                <strong className="text-[1.2rem] w-[160px]">Postcode:</strong>
                                <input value={address.postcode} onChange={handleAddressChange} type="text" name="postcode" className="mt-[0.2rem] sm:mt-0 px-[0.4rem] py-[0.1rem] text-[1.2rem] w-[320px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Postcode" required/>
                            </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[320px] h-[24px]"/>}

                            {/* division */}
                            {userDetails ? <div className="mt-[0.8rem] flex flex-col sm:flex-row sm:items-center">
                                <strong className="text-[1.2rem] w-[160px]">Division:</strong>
                                <select value={address.division} onChange={handleAddressChange} name="division" className="mt-[0.2rem] sm:mt-0 px-[0.4rem] py-[0.1rem] text-[1.2rem] w-[130px] border-[1px] border-[silver] outline-none rounded-md">
                                    <option value="dhaka">Dhaka</option>
                                    <option value="barishal">Barishal</option>
                                    <option value="sylhet">Sylhet</option>
                                    <option value="mymensingh">Mymensingh</option>
                                    <option value="rajshahi">Rajshahi</option>
                                    <option value="rangpur">Rangpur</option>
                                    <option value="khulna">Khulna</option>
                                    <option value="chattogram">Chattogram</option>
                                </select>
                            </div> : <Skeleton className="mb-[0.6rem] w-[160px] h-[24px]"/>}

                            {/* country */}
                            {userDetails ? <div className="mt-[0.8rem] flex flex-col sm:flex-row sm:items-center">
                                <strong className="text-[1.2rem] w-[160px]">Country:</strong>
                                <input value={address.country} onChange={handleAddressChange} type="text" name="country" className="mt-[0.2rem] sm:mt-0 px-[0.4rem] py-[0.1rem] text-[1.2rem] w-[320px] border-[1px] border-[silver] outline-none rounded-md" placeholder="Country" disabled/>
                            </div> : <Skeleton containerClassName="flex-1" className="mb-[0.6rem] w-[320px] h-[24px]"/>}
                        </form>
                    </div>
                    
                    {/* amount details */}
                    <div className="gradient-bg p-[0.8rem] w-[40%] max-w-[400px] border-[1px] border-[#ddd] shadow-lg rounded-lg">
                        <div className="border-b-[1px] border-b-[#ddd]">
                            <div className="mb-[0.6rem] flex items-center justify-between">
                                <p className="text-[1.2rem] font-[600]">Sub Total</p>
                                <p className="text-[1.2rem] font-[600]">{subTotal} Tk</p>
                            </div>
                            <div className="mb-[0.6rem] flex items-center justify-between">
                                <p className="text-[1.2rem] font-[600]">Shipping Cost</p>
                                <p className="text-[1.2rem] font-[600]">{shippingCost} Tk</p>
                            </div>
                            <div className="mb-[0.6rem] flex items-center justify-between">
                                <p className="text-[1.2rem] font-[600]">Discount</p>
                                <p className="text-[1.2rem] font-[600]">{discount} Tk</p>
                            </div>
                        </div>
                        <div className="mt-[0.6rem] flex items-center justify-between">
                            <p className="text-[1.2rem] font-[600]">Total Cost</p>
                            <p className="text-[1.2rem] font-[600]">{totalCost} Tk</p>
                        </div>
                        <button onClick={handleCheckout} className="mt-[0.6rem] h-[40px] w-full text-[#fff] text-[1.2rem] font-[500] bg-[#327e16] rounded-md">Checkout</button>
                    </div>
                </div>
            </div>
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
            />
        </AppLayout>
    );
}

export default Checkout;
