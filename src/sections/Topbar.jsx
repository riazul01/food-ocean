import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className="h-[auto] w-full py-[0.8rem] bg-[#173334]">
            <div className="flex justify-between max-w-[1420px] mx-[auto] px-[0.4rem] text-[#fff]">
                <p className="text-[1rem] font-[500]">Need Help? Call Us: <span className="text-[orange] font-bold">+88 01234567890</span></p>
                <p className="text-[1rem] font-[500]">Get <span className="text-[orange] font-bold">30% off</span> for first order with exciting gift box! <a href="#null" className="underline">Learn more</a></p>
                {/* account management links */}
                <div className="flex items-center">
                    <Link to="/login" className="text-[#fff] font-[500]">
                        Login
                    </Link>
                    <span className="mx-[0.8rem]">|</span>
                    <Link to="/register" className="text-[#fff] font-[500]">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Topbar;