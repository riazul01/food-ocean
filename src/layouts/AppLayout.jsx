import React from 'react';

// sections
import Topbar from '../sections/Topbar';
import Header from '../sections/Header';
import Navbar from '../sections/Navbar';

const AppLayout = ({ children }) => {
    return (
        <>
            <Topbar/>
            <Header/>
            <Navbar/>
            {children}
        </>
    )
}

export default AppLayout;