import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

// context
import { CartContext } from '../context/CartContextProvider';

// icons
import { MdKeyboardArrowRight } from 'react-icons/md';

const Sidebar = ({ toggle, setToggle }) => {
    const { cartItems } = useContext(CartContext);
    const path = useLocation().pathname.split('/').pop();
    
    return (
        <div onClick={(e) => e.stopPropagation()} className={`${toggle ? 'translate-x-0' : 'translate-x-[-100%]'} px-[1.4rem] py-[1rem] fixed top-0 left-0 w-[300px] h-[100vh] bg-[#122829] z-[99999] transition-transform duration-300`}>
            <div className="">
                <Link to="/" onClick={() => setToggle(false)} className="px-[0.8rem] text-[2rem] text-[orange]" style={{fontFamily: 'Croissant One'}}>Grocery</Link>
                <ul className="my-[1rem]">
                    <NavLink to="/" onClick={() => setToggle(false)} className={`${path === '' ? 'bg-[#173334]' : null} px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.1rem] flex items-center hover:bg-[#173334] rounded-lg`}>
                        {path === "" && <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>}
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/groceries" onClick={() => setToggle(false)} className={`${path === 'groceries' ? 'bg-[#173334]' : null} px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.1rem] flex items-center hover:bg-[#173334] rounded-lg`}>
                        {path === "groceries" && <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>}
                        <span>Groceries</span>
                    </NavLink>
                    <NavLink to="/groceries/trending-now" onClick={() => setToggle(false)} className={`${path === 'trending-now' ? 'bg-[#173334]' : null} px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.1rem] flex items-center hover:bg-[#173334] rounded-lg`}>
                        {path === "trending-now" && <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>}
                        <span>Trending now</span>
                    </NavLink>
                    <NavLink to="/groceries/raw-products" onClick={() => setToggle(false)} className={`${path === 'raw-products' ? 'bg-[#173334]' : null} px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.1rem] flex items-center hover:bg-[#173334] rounded-lg`}>
                        {path === "raw-products" && <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>}
                        <span>Raw Products</span>
                    </NavLink>
                    <NavLink to="/groceries/beverages" onClick={() => setToggle(false)} className={`${path === 'beverages' ? 'bg-[#173334]' : null} px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.1rem] flex items-center hover:bg-[#173334] rounded-lg`}>
                        {path === "beverages" && <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>}
                        <span>Beverages</span>
                    </NavLink>
                    <NavLink to="/offers" onClick={() => setToggle(false)} className={`${path === 'offers' ? 'bg-[#173334]' : null} px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.1rem] flex items-center hover:bg-[#173334] rounded-lg`}>
                        {path === "offers" && <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>}
                        <span>New Offers</span>
                    </NavLink>
                    <NavLink to="/cart" onClick={() => setToggle(false)} className={`${path === 'cart' ? 'bg-[#173334]' : null} px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.1rem] flex items-center hover:bg-[#173334] rounded-lg`}>
                        {path === "cart" && <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>}
                        <span>Cart Items</span>
                        {cartItems.length > 0 && <div className="ms-[0.4rem] flex items-center justify-center h-[1.5rem] w-[1.5rem] rounded-[50%] bg-[orange]">
                            <p className="text-[#fff] text-[0.8rem] font-bold">{cartItems.length}</p>
                        </div>}
                    </NavLink>
                    <NavLink to="/user/profile" onClick={() => setToggle(false)} className={`${(path === "login" || path === "register" || path === "profile" || path === "update-profile") ? 'bg-[#173334]' : null} px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.1rem] flex items-center hover:bg-[#173334] rounded-lg`}>
                        {(path === "login" || path === "register" || path === "profile" || path === "update-profile") && <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>}
                        <span>My Account</span>
                    </NavLink>
                    <NavLink to="/user/orders" onClick={() => setToggle(false)} className={`${path === 'orders' ? 'bg-[#173334]' : null} px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.1rem] flex items-center hover:bg-[#173334] rounded-lg`}>
                        {path === "orders" && <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>}
                        <span>My Orders</span>
                    </NavLink>
                    <NavLink to="/about" onClick={() => setToggle(false)} className={`${path === 'about' ? 'bg-[#173334]' : null} px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.1rem] flex items-center hover:bg-[#173334] rounded-lg`}>
                        {path === "about" && <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>}
                        <span>About Us</span>
                    </NavLink>
                    <NavLink to="/help" onClick={() => setToggle(false)} className={`${path === 'help' ? 'bg-[#173334]' : null} px-[0.8rem] py-[0.4rem] text-[#fff] text-[1.1rem] flex items-center hover:bg-[#173334] rounded-lg`}>
                        {path === "help" && <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>}
                        <span>Help</span>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;