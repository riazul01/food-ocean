import React from 'react';

// layouts
import AppLayout from '../layouts/AppLayout';
import Categories from '../sections/Categories';

const Home = () => {
    return (
        <AppLayout>
            <Categories/>
        </AppLayout>
    );
}

export default Home;