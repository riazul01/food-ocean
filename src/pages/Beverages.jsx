import React, { useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import Products from '../sections/Products';

import { ProductsContext } from '../context/ProductContextProvider';

const Beverages = () => {
    const { teaCoffe, dryFruits, biscuits, cake, jams, breads } = useContext(ProductsContext);

    return (
        <AppLayout>
            <div className="mx-auto max-w-[1420px]">
                <Products title="tea & coffe" path="/groceries/beverages/tea-coffe" products={teaCoffe}/>
                <Products title="dried fruits" path="/groceries/beverages/dry-fruits" products={dryFruits}/>
                <Products title="jams & jellies" path="/groceries/beverages/jams" products={jams}/>
                <Products title="biscuits" path="/groceries/beverages/biscuits" products={biscuits}/>
                <Products title="cakes" path="/groceries/beverages/cakes" products={cake}/>
                <Products title="breads" path="/groceries/beverages/breads" products={breads}/>           
            </div>
        </AppLayout>
    );
}

export default Beverages;