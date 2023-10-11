import React from 'react';

// layouts
import AppLayout from '../layouts/AppLayout';
import Categories from '../sections/Categories';
import FoodItems from '../sections/FoodItems';

const Home = () => {
    return (
        <AppLayout>
            <Categories/>
            <FoodItems title="top groceries"/>
            <FoodItems title="popular foods"/>
            <FoodItems title="recent products"/>
        </AppLayout>
    );
}

export default Home;