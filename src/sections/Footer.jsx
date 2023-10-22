import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full bg-[#173334]">
            <div className="mx-[auto] px-[0.4rem] py-[3rem] max-w-[1420px] flex justify-between">
                <div className="w-[28%] pr-[1.8rem]">
                    <h1 className="text-[1.6rem] text-[orange]" style={{fontFamily: 'Croissant One'}}>Grocery</h1>
                    <p className="mt-[1rem] text-[#fff]">Lorem ipsum dolor sit amet consectetur adeping elit. Animi nostrum voluptatibus non recusandae repudiandae sapiente.</p>
                    <div className="mt-[1rem] flex items-center">
                        <a href="#null" className="cursor-pointer" title="facebook">
                            <FaFacebookF className="mr-[1.2rem] text-[orange] text-[1.2rem] cursor-pointer"/>
                        </a>
                        <a href="#null" className="cursor-pointer" title="instagram">
                            <BsInstagram className="mr-[1.2rem] text-[orange] text-[1.2rem] cursor-pointer"/>
                        </a>
                        <a href="#null" className="cursor-pointer" title="linkedin">
                            <BsLinkedin className="mr-[1.2rem] text-[orange] text-[1.2rem] cursor-pointer"/>
                        </a>
                        <a href="#null" className="cursor-pointer" title="twitter">
                            <BsTwitter className="mr-[1.2rem] text-[orange] text-[1.2rem] cursor-pointer"/>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-[18%]">
                    <h1 className="text-[orange] text-[1.2rem] font-bold">Navigation</h1>
                    <Link to="/" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Home</Link>
                    <Link to="/about" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">About Us</Link>
                    <Link to="/groceries" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Groceries</Link>
                    <Link to="/groceries/raw-products" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Raw Products</Link>
                    <Link to="/groceries/beverages" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Beverages</Link>
                </div>

                <div className="flex flex-col w-[18%]">
                    <h1 className="text-[orange] text-[1.2rem] font-bold">Trending</h1>
                    <Link to="/groceries/raw-products/fruits" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Fruits</Link>
                    <Link to="/groceries/raw-products/vegetables" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Vegetables</Link>
                    <Link to="/groceries/top-products" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Top Products</Link>
                    <Link to="/groceries/recent-products" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Recent Products</Link>
                    <Link to="/groceries/popular-now" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Popular Now</Link>
                </div>
                
                <div className="flex flex-col w-[18%]">
                    <h1 className="text-[orange] text-[1.2rem] font-bold">Quick Links</h1>
                    <Link to="/profile" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">User Account</Link>
                    <Link to="/" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Become an Affilate</Link>
                    <Link to="/" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Track Orders</Link>
                    <Link to="/" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">New offers</Link>
                    <Link to="/" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Latest Blogs</Link>
                </div>

                <div className="flex flex-col w-[18%]">
                    <h1 className="text-[orange] text-[1.2rem] font-bold">Services</h1>
                    <Link to="/" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Help Center</Link>
                    <Link to="/" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Terms of use</Link>
                    <Link to="/" className="mt-[0.6rem] text-[#fff] text-[1.1rem]">Privacy policy</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;