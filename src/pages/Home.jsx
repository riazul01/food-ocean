import React, { useContext } from 'react';

import { ProductsContext } from '../context/ProductContextProvider';

// layouts
import AppLayout from '../layouts/AppLayout';
import Categories from '../sections/Categories';
import Products from '../sections/Products';

const Home = () => {
    const { top, recent, popular } = useContext(ProductsContext);

    return (
        <AppLayout>
            <Categories/>
            <Products title="top products" path="/groceries/top-products" products={top}/>
            <Products title="recent products" path="/groceries/recent-products" products={recent}/>
            <Products title="popular now" path="/groceries/popular-now" products={popular}/>
        </AppLayout>
    );
}

export default Home;