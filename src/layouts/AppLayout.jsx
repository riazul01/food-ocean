import React from 'react';

// sections
import Topbar from '../sections/Topbar';
import Header from '../sections/Header';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

// components
import Confirmation from '../components/Confirmation';

const AppLayout = ({ children }) => {
    return (
        <>
            <Topbar/>
            <Header/>
            <Confirmation/>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default AppLayout;