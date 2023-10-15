import React, { useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import { useLocation } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';

const CategoryItems = () => {
    const { vegetables, fruits } = useContext(ProductsContext);
    const path = useLocation().pathname.split('/').pop();

    return (
        <AppLayout>
            <h1>Hello</h1>
        </AppLayout>
    );
}

export default CategoryItems;