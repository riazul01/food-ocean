import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// firebase
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

// context
import { CartContext } from '../context/CartContextProvider';
import { LoginContext } from '../context/LoginContextProvider';

// icons
import { RxExit } from 'react-icons/rx';
import { RiListUnordered } from 'react-icons/ri';
import { FiUser, FiUsers, FiUserCheck } from 'react-icons/fi';

const ProfileLayout = ({ children }) => {
    const path = useLocation().pathname.split('/').reverse();
    const loginContext = useContext(LoginContext);
    const cartContext = useContext(CartContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            loginContext.dispatch({type: 'LOGOUT'});
            cartContext.dispatch({type: 'MAKE_CART_EMPTY'});
            cartContext.dispatch({type: 'RESET_CHECKOUT_STATE'});
            cartContext.dispatch({type: 'RESET_ORDER_STATE'});
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="w-full h-auto">
            <div className="mx-auto px-[0.4rem] pt-[1rem] pb-[3rem] max-w-[1420px] flex flex-col md:flex-row items-start justify-between gap-[1rem]">
                
                {/* navigation */}
                <div className="w-full md:w-[240px]">
                    <div className="p-[0.4rem] w-full border-[1px] rounded-lg">
                        <Link to="/user/profile" className={`${path[0] === 'profile' ? 'bg-[#eeefef]' : null} px-[0.6rem] py-[0.4rem] flex items-center rounded-lg hover:bg-[#eeefef] cursor-pointer transition-all duration-200`}>
                            <FiUser className="text-[1.2rem]"/>
                            <p className="ms-[0.6rem] text-[1.1rem] font-[500]">My Profile</p>
                        </Link>
                        <Link to="/user/update-profile" className={`${path[0] === 'update-profile' ? 'bg-[#eeefef]' : null} px-[0.6rem] py-[0.4rem] flex items-center rounded-lg hover:bg-[#eeefef] cursor-pointer transition-all duration-200`}>
                            <FiUserCheck className="text-[1.2rem]"/>
                            <p className="ms-[0.6rem] text-[1.1rem] font-[500]">Update Profile</p>
                        </Link>
                        <Link to="/user/orders" className={`${(path[0] === 'orders' || path[1] === 'orders') ? 'bg-[#eeefef]' : null} px-[0.6rem] py-[0.4rem] flex items-center rounded-lg hover:bg-[#eeefef] cursor-pointer transition-all duration-200`}>
                            <RiListUnordered className="text-[1.2rem]"/>
                            <p className="ms-[0.6rem] text-[1.1rem] font-[500]">My Orders</p>
                        </Link>
                        <a href="#null" className="px-[0.6rem] py-[0.4rem] flex items-center rounded-lg hover:bg-[#eeefef] cursor-pointer transition-all duration-200">
                            <FiUsers className="text-[1.2rem]"/>
                            <p href="/" className="ms-[0.6rem] text-[1.1rem] font-[500]">Switch to Admin</p>
                        </a>
                        <div onClick={handleLogout} className="px-[0.6rem] py-[0.4rem] flex items-center rounded-lg hover:bg-[#eeefef] cursor-pointer transition-all duration-200">
                            <RxExit className="text-[1.2rem]"/>
                            <p className="ms-[0.6rem] text-[1.1rem] font-[500]">Logout</p>
                        </div>
                    </div>
                </div>

                {/* pages */}
                <div className="w-full mt-[1.2rem] md:mt-0 md:w-[calc(100%-240px)]">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ProfileLayout;