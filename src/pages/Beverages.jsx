import React, { useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import Products from '../sections/Products';

import { ProductsContext } from '../context/ProductContextProvider';
import Categories from '../sections/Categories';

const Beverages = () => {
    const { teaCoffe, dryFruits, biscuits, cake, jams, breads } = useContext(ProductsContext);

    return (
        <AppLayout>
            <div className="mx-auto max-w-[1420px]">
                <Categories/>
                <Products title="tea & coffe" path="/groceries/beverages/tea-coffe" products={teaCoffe}/>
                <Products title="dried fruits" path="/groceries/beverages/dried-fruits" products={dryFruits}/>
                <Products title="jams & jellies" path="/groceries/beverages/jams" products={jams}/>
                <Products title="biscuits" path="/groceries/beverages/biscuits" products={biscuits}/>
                <Products title="cakes" path="/groceries/beverages/cakes" products={cake}/>
                <Products title="breads" path="/groceries/raw-products/breads" products={breads}/>           
            </div>
        </AppLayout>
    );
}

export default Beverages;