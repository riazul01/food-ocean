import React from 'react';
import { Link } from 'react-router-dom';

// images
import GooglePalyBadge from '../assets/images/badges/google-play.png';
import AppStoreBadge from '../assets/images/badges/app-store.png';

// icons
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        <div className="w-full bg-[#122829]">
            <div className="mx-[auto] px-[0.4rem] pt-[2.6rem] max-w-[1420px] h-auto flex flex-wrap justify-between">
                
                {/* footer column 01 */}
                <div className="pb-[2.6rem] xl:pr-[1.8rem] w-full md:w-[50%] lg:w-[40%] xl:w-[28%]">
                    
                    {/* brand */}
                    <h1 className="text-[1.8rem] text-[orange]" style={{fontFamily: 'Croissant One'}}>Grocery</h1>
                    
                    {/* subscribe */}
                    <div className="">
                        <p className="pt-[1rem] pb-[0.4rem] text-[#fff] text-[1.1rem] font-[500]">Stay updated with latest news</p>
                        <div className="h-[40px] w-full max-w-[340px] flex items-center rounded-lg border-[2px] border-[#d58b03] bg-[#d58b03] overflow-hidden">
                            <input type="text" placeholder="Enter your email" className="px-[0.8rem] text-[#111] text-[1.1rem] placeholder:text-[#666] h-full w-[67%] border-0 outline-none bg-[#fff]"/>
                            <button className="text-[#111] text-[1.1rem] font-[600] h-full w-[33%] bg-[#d58b03]">Subscribe</button>
                        </div>
                    </div>

                    {/* social links */}
                    <div className="mt-[1.6rem] flex items-center">
                        <a href="#null" className="mr-[0.4rem] h-[2.6rem] w-[2.6rem] flex items-center justify-center rounded-lg border-[1px] border-[#888] cursor-pointer" title="facebook">
                            <FaFacebookF className="text-[#888] text-[1.2rem] cursor-pointer"/>
                        </a>
                        <a href="#null" className="mr-[0.4rem] h-[2.6rem] w-[2.6rem] flex items-center justify-center rounded-lg border-[1px] border-[#888] cursor-pointer" title="instagram">
                            <BsInstagram className="text-[#888] text-[1.2rem] cursor-pointer"/>
                        </a>
                        <a href="#null" className="mr-[0.4rem] h-[2.6rem] w-[2.6rem] flex items-center justify-center rounded-lg border-[1px] border-[#888] cursor-pointer" title="linkedin">
                            <BsLinkedin className="text-[#888] text-[1.2rem] cursor-pointer"/>
                        </a>
                        <a href="#null" className="mr-[0.4rem] h-[2.6rem] w-[2.6rem] flex items-center justify-center rounded-lg border-[1px] border-[#888] cursor-pointer" title="twitter">
                            <BsTwitter className="text-[#888] text-[1.2rem] cursor-pointer"/>
                        </a>
                        <a href="#null" className="mr-[0.4rem] h-[2.6rem] w-[2.6rem] flex items-center justify-center rounded-lg border-[1px] border-[#888] cursor-pointer" title="youtube">
                            <BsYoutube className="text-[#888] text-[1.2rem] cursor-pointer"/>
                        </a>
                    </div>

                    {/* mobile app links */}
                    <div className="mt-[1.4rem] flex items-center">
                        <a href="#null" title="google play" className="mr-[0.6rem] h-[2.6rem] w-[8.6rem]">
                            <img src={GooglePalyBadge} className="h-full w-full object-cover" alt="google-play" />
                        </a>
                        <a href="#null" title="app store" className="h-[2.6rem] w-[7.8rem]">
                            <img src={AppStoreBadge} className="h-full w-full object-cover" alt="google-play" />
                        </a>
                    </div>
                </div>

                {/* footer column 02 */}
                <div className="pb-[2.4rem] flex flex-col w-full md:w-[50%] lg:w-[30%] xl:w-[18%]">
                    <h1 className="pl-[0.4rem] text-[orange] text-[1.2rem] font-bold">Navigation</h1>
                    <Link to="/" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Home</span>
                    </Link>
                    <Link to="/groceries" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Groceries</span>
                    </Link>
                    <Link to="/trending" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Trending now</span>
                    </Link>
                    <Link to="/groceries/raw-products" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Raw Products</span>
                    </Link>
                    <Link to="/groceries/beverages" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Beverages</span>
                    </Link>
                </div>
                
                {/* footer column 03 */}
                <div className="pb-[2.4rem] flex flex-col w-full md:w-[33%] lg:w-[30%] xl:w-[18%]">
                    <h1 className="pl-[0.4rem] text-[orange] text-[1.2rem] font-bold">Trending</h1>
                    <Link to="/groceries/raw-products/fruits" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Fruits</span>
                    </Link>
                    <Link to="/groceries/raw-products/vegetables" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Vegetables</span>
                    </Link>
                    <Link to="/groceries/trending/top-products" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Top Products</span>
                    </Link>
                    <Link to="/groceries/trending/recent-products" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Recent Products</span>
                    </Link>
                    <Link to="/groceries/trending/popular-now" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Popular Now</span>
                    </Link>
                </div>
                
                {/* footer column 04 */}
                <div className="pb-[2.4rem] flex flex-col w-full md:w-[33%] lg:w-[40%] xl:w-[18%]">
                    <h1 className="pl-[0.4rem] text-[orange] text-[1.2rem] font-bold">Quick Links</h1>
                    <Link to="/user/profile" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">User Account</span>
                    </Link>
                    <Link to="#null" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Become an Affilate</span>
                    </Link>
                    <Link to="/user/orders/track-orders" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Track Orders</span>
                    </Link>
                    <Link to="/offers" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">New offers</span>
                    </Link>
                    <Link to="#null" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Latest Blogs</span>
                    </Link>
                </div>

                {/* footer column 05 */}
                <div className="pb-[3rem] flex flex-col w-full md:w-[33%] lg:w-[60%] xl:w-[18%]">
                    <h1 className="pl-[0.4rem] text-[orange] text-[1.2rem] font-bold">Services</h1>
                    <Link to="/services/about" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">About Us</span>
                    </Link>
                    <Link to="/services/contact" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Contact Us</span>
                    </Link>
                    <Link to="/services/help" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Help Center</span>
                    </Link>
                    <Link to="/services/terms" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Terms of use</span>
                    </Link>
                    <Link to="/services/privacy" className="mt-[0.6rem] flex items-center">
                        <MdKeyboardArrowRight className="text-[#fff] text-[1.3rem]"/>
                        <span className="text-[#fff] text-[1.1rem]">Privacy policy</span>
                    </Link>
                </div>
            </div>
        </div>

        {/* copyright section */}
        <div className="w-full bg-[#173334] border-t-[1px] border-[#3a4c4d]">
            <div className="mx-[auto] px-[0.4rem] py-[1.4rem] max-w-[1420px] flex items-center justify-center">
                <p className="text-[#fff] text-[0.8rem] lg:text-[1.1rem]">Created by <a className="text-[orange]" href="https://github.com/riazul01" target="_blank" rel="noreferrer">riazul01</a> | &copy; 2024 - All Rights Reserved</p>
            </div>
        </div>
        </>
    );
}

export default Footer;