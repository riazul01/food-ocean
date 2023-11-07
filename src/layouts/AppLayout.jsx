import React from 'react';

// sections
import Topbar from '../sections/Topbar';
import Header from '../sections/Header';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

// components
import Message from '../components/Message';

const AppLayout = ({ children }) => {
    return (
        <>
            <Topbar/>
            <Header/>
            <Message/>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default AppLayout;