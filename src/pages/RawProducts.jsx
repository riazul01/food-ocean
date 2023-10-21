import React, { useContext }  from 'react';
import AppLayout from '../layouts/AppLayout';
import Products from '../sections/Products';

// context
import { ProductsContext } from '../context/ProductContextProvider';

const RawProducts = () => {
    const { vegetables, fruits, meat, fish, eggs, spices, rice, flour, oil } = useContext(ProductsContext);

    return (
        <AppLayout>
            <div className="mx-auto max-w-[1420px]">
                <Products title="vegetables" path="/groceries/raw-products/vegetables" products={vegetables}/>
                <Products title="fruits" path="/groceries/raw-products/fruits" products={fruits}/>
                <Products title="meat" path="/groceries/raw-products/meat" products={meat}/>
                <Products title="fish" path="/groceries/raw-products/fish" products={fish}/>
                <Products title="eggs" path="/groceries/raw-products/eggs" products={eggs}/>
                <Products title="spices" path="/groceries/raw-products/spices" products={spices}/>
                <Products title="rice" path="/groceries/raw-products/rice" products={rice}/>
                <Products title="flour" path="/groceries/raw-products/flour" products={flour}/>
                <Products title="oil" path="/groceries/raw-products/oil" products={oil}/>            
            </div>
        </AppLayout>
    );
}

export default RawProducts;