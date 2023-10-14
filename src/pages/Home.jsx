import React from 'react';

// layouts
import AppLayout from '../layouts/AppLayout';
import Categories from '../sections/Categories';
import Products from '../sections/Products';

const Home = () => {
    return (
        <AppLayout>
            <Categories/>
            <Products title="top products"/>
        </AppLayout>
    );
}

export default Home;