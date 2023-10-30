import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// sections
import Sidebar from './Sidebar';

// context
import { CartContext } from '../context/CartContextProvider';

// icons
import { BiSearchAlt } from 'react-icons/bi';
import { PiShoppingCartDuotone } from 'react-icons/pi';
import { FiPhoneCall, FiUser } from 'react-icons/fi';
import { LuClock4 } from 'react-icons/lu';

const Header = () => {
    const { cartItems } = useContext(CartContext);

    const [toggle, setToggle] = useState(JSON.parse(localStorage.getItem('toggle') || false));
    const [search, setSearch] = useState({
        searchText: '',
        searchCategory: 'all'
    });

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // search when 'Enter' key press
        document.onkeydown = (e) => {
            if(e.keyCode === 13 && search.searchText !== '') {
                navigate('/groceries/search-results', {state: search});
            }
        }
    }, [search, navigate]);

    useEffect(() => {
        // set search data
        if (location.state) {
            setSearch({searchText: location.state.searchText, searchCategory: location.state.searchCategory});
        }
    }, [location.state]);

    useEffect(() => {
        localStorage.setItem('toggle', JSON.stringify(toggle));
    }, [toggle]);

    useEffect(() => {
        setToggle(false);
    }, [location.pathname]);

    useEffect(() => {
        const body = document.querySelector('body');
        // close side nav
        body.onclick = () => {
            setToggle(false);
        }
    });

    // handle toggle bar
    const handleToggle = (e) => {
        e.stopPropagation();
        setToggle(!toggle);
    }

    // handle search input
    const handleChange = (e) => {
        setSearch({...search, [e.target.name]: e.target.value});
    }

    // search button click actions
    const handleClick = () => {
        if(search.searchText !== '') {
            navigate('/groceries/search-results', {state: search});
        }
    }

    return (
        <>
        <Sidebar toggle={toggle} setToggle={setToggle}/>

        {/* header */}
        <div className="w-full bg-[#173334] z-[9999] sticky top-0 left-0">
            <div className="mx-[auto] px-[0.4rem] py-[1.6rem] flex items-center justify-between max-w-[1420px]">
                {/* logo */}
                <Link to="/" className="hidden md:block text-[2rem] text-[orange]" style={{fontFamily: 'Croissant One'}}>Grocery</Link>

                {/* search bar */}
                <div className="flex items-center justify-center rounded-lg overflow-hidden">
                    
                    {/* search category */}
                    <select value={search.searchCategory} onChange={handleChange} name="searchCategory" className="hidden sm:block pl-[0.6rem] h-[44px] w-[120px] lg:w-[140px] text-[#fff] text-[1.1rem] bg-[#173334] border-[2px] border-[#214445] outline-none rounded-l-lg">
                        <option value="all">All</option>
                        <option value="raw-products">Raw Products</option>
                        <option value="beverages">Beverages</option>
                    </select>
                    
                    {/* search input */}
                    <input value={search.searchText} onChange={handleChange} name="searchText" className="pl-[1rem] text-[1.1rem] text-[#fff] h-[44px] w-full sm:w-[240px] lg:w-[300px] xl:w-[360px] bg-transparent border-[2px] sm:border-x-0 border-[#214445] outline-none rounded-lg sm:rounded-none" type="text" placeholder="Search products..." />
                    
                    {/* search button */}
                    <div onClick={handleClick} className="hidden text-[1.1rem] text-[#fff] sm:flex items-center justify-center h-[44px] w-[52px] bg-[#214445] cursor-pointer">
                        <BiSearchAlt className="text-[1.6rem]"/>
                    </div>
                </div>

                {/* working hours */}
                <div className="hidden xl:flex items-center justify-center">
                    <div className="px-[0.6rem]">
                        <LuClock4 className="text-[#fff] text-[1.3rem]"/>
                    </div>
                    <div className="">
                        <p className="text-[#fff] text-[1rem] font-bold">Sunday - Thursday</p>
                        <p className="text-[#fff] text-[1rem]">9:00 AM - 10:00 PM</p>
                    </div>
                </div>

                {/* icon links */}
                <div className="flex items-center">
                    <a href="tel:+8801234567890">
                        <FiPhoneCall className="ml-[1rem] md:ml-[1.4rem] text-[orange] text-[1.4rem] cursor-pointer"/>
                    </a>

                    <Link className="relative" to="/cart">
                        <PiShoppingCartDuotone className="ml-[1rem] md:ml-[1.4rem] text-[orange] text-[1.6rem] cursor-pointer"/>
                        {cartItems.length > 0 && <div className="absolute top-[-0.9rem] right-[-0.7rem] h-[1.5rem] w-[1.5rem] flex items-center justify-center rounded-[50%] bg-[orange]">
                            <p className="text-[#fff] text-[0.8rem] font-bold">{cartItems.length}</p>
                        </div>}
                    </Link>

                    <Link to="/user/profile">
                        <FiUser className="ml-[1rem] md:ml-[1.4rem] text-[orange] text-[1.6rem] cursor-pointer"/>
                    </Link>

                    <div onClick={handleToggle} className={`toggler ${toggle ? 'active' : null} ml-[1rem] md:ml-[1.4rem] grid h-[45px] w-auto cursor-pointer place-items-center rounded-sm z-[999]`}>
                        <span className="toggleBar relative h-[2.4px] w-[28px] bg-[orange]"></span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;