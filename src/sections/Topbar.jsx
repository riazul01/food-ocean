import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// context
import { LoginContext } from '../context/LoginContextProvider';

const Topbar = () => {
    const { currentUser } = useContext(LoginContext);

    return (
        <div className="pt-[0.8rem] h-[auto] w-full bg-[#173334]">
            <div className="mx-[auto] px-[0.4rem] text-[#fff] flex justify-center md:justify-between max-w-[1420px]">
                <p className="hidden lg:block text-[1rem] font-[500]">Need Help? Call Us: <span className="text-[orange] font-bold">+88 01234567890</span></p>
                <p className="hidden md:block text-[1rem] font-[500]">Get <span className="text-[orange] font-bold">30% off</span> for first order with exciting gift box! <Link to="/offers" className="underline">Learn more</Link></p>
                
                {/* topbar links */}
                <div className="flex items-center">
                    {currentUser && <div className="">
                        <Link to="/user/profile" className="text-[#fff] font-[500]">
                            My Account
                        </Link>
                        <span className="mx-[0.8rem]">|</span>
                    </div>}

                    {!currentUser && <div className="">
                        <Link to="/user/login" className="text-[#fff] font-[500]">
                            Login
                        </Link>
                        <span className="mx-[0.8rem]">|</span>
                    </div>}

                    {!currentUser && <div className="">
                        <Link to="/user/register" className="text-[#fff] font-[500]">
                            Register
                        </Link>
                        <span className="mx-[0.8rem]">|</span>
                    </div>}

                    <div className="">
                        <Link to="/about" className="text-[#fff] font-[500]">
                            About Us
                        </Link>
                        <span className="mx-[0.8rem]">|</span>
                    </div>

                    <div className="">
                        <Link to="/help" className="text-[#fff] font-[500]">
                            Help
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;