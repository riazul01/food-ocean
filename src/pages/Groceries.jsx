import React, { useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import Products from '../sections/Products';

import { ProductsContext } from '../context/ProductContextProvider';

const Groceries = () => {
    const { vegetables } = useContext(ProductsContext);

    return (
        <AppLayout>
            <div className="mx-auto max-w-[1420px]">
                <Products title="vegetables" path="/vegetables" products={vegetables}/>
            </div>
        </AppLayout>
    );
}

export default Groceries;