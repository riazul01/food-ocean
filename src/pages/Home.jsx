import React from 'react';

// layouts
import AppLayout from '../layouts/AppLayout';
import Categories from '../sections/Categories';
import FoodItems from '../sections/FoodItems';

const Home = () => {
    return (
        <AppLayout>
            <Categories/>
            <FoodItems title="top products"/>
            <FoodItems title="recent products"/>
            <FoodItems title="popular now"/>
        </AppLayout>
    );
}

export default Home;