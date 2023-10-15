import React, { useContext } from 'react';

import { ProductsContext } from '../context/ProductContextProvider';

// layouts
import AppLayout from '../layouts/AppLayout';
import Categories from '../sections/Categories';
import Products from '../sections/Products';

const Home = () => {
    const { vegetables } = useContext(ProductsContext);
    const { fruits } = useContext(ProductsContext);

    return (
        <AppLayout>
            <Categories/>
            <Products title="vegetables" path="/vegetables" products={vegetables}/>
            <Products title="Fruits" path="/fruits" products={fruits}/>
        </AppLayout>
    );
}

export default Home;