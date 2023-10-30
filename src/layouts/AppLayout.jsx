import React from 'react';

// sections
import Topbar from '../sections/Topbar';
import Header from '../sections/Header';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const AppLayout = ({ children }) => {
    return (
        <>
            <Topbar/>
            {/* <Header/>
            <Navbar/> */}
            {children}
            {/* <Footer/> */}
        </>
    )
}

export default AppLayout;