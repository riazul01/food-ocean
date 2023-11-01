import React, { useContext } from 'react';

// layouts
import AppLayout from '../layouts/AppLayout';

// sections
import SectionProducts from '../sections/SectionProducts';

// context
import { ProductsContext } from '../context/ProductsContextProvider';

const TrendingProducts = () => {
    const { top, recent, popular } = useContext(ProductsContext);

    return (
        <AppLayout>
            <SectionProducts title="top products" path="/groceries/trending/top-products" products={top}/>
            <SectionProducts title="recent products" path="/groceries/trending/recent-products" products={recent}/>
            <SectionProducts title="popular now" path="/groceries/trending/popular-now" products={popular}/>
        </AppLayout>
    );
}

export default TrendingProducts;