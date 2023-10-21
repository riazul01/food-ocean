import React, { useContext } from 'react';

// layouts
import AppLayout from '../layouts/AppLayout';

// sections
import Categories from '../sections/Categories';
import Products from '../sections/Products';

// context
import { ProductsContext } from '../context/ProductContextProvider';

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