import React, { useContext } from 'react';

// layouts
import AppLayout from '../layouts/AppLayout';

// sections
import Products from '../sections/Products';
import Categories from '../sections/Categories';

// context
import { ProductsContext } from '../context/ProductContextProvider';

const Groceries = () => {
    const { vegetables, fruits, meat, fish, eggs, teaCoffe, spices, dryFruits, biscuits, cake, jams, breads, rice, flour, oil } = useContext(ProductsContext);

    return (
        <AppLayout>
            <div className="mx-auto max-w-[1420px]">
                <Categories/>
                <Products title="vegetables" path="/groceries/raw-products/vegetables" products={vegetables}/>
                <Products title="fruits" path="/groceries/raw-products/fruits" products={fruits}/>
                <Products title="meat" path="/groceries/raw-products/meat" products={meat}/>
                <Products title="fish" path="/groceries/raw-products/fish" products={fish}/>
                <Products title="eggs" path="/groceries/raw-products/eggs" products={eggs}/>
                <Products title="tea & coffe" path="/groceries/beverages/tea-coffe" products={teaCoffe}/>
                <Products title="spices" path="/groceries/raw-products/spices" products={spices}/>
                <Products title="dried fruits" path="/groceries/beverages/dry-fruits" products={dryFruits}/>
                <Products title="jams & jellies" path="/groceries/beverages/jams" products={jams}/>
                <Products title="biscuits" path="/groceries/beverages/biscuits" products={biscuits}/>
                <Products title="cakes" path="/groceries/beverages/cakes" products={cake}/>
                <Products title="breads" path="/groceries/raw-products/breads" products={breads}/>
                <Products title="rice" path="/groceries/raw-products/rice" products={rice}/>
                <Products title="flour" path="/groceries/raw-products/flour" products={flour}/>
                <Products title="oil" path="/groceries/raw-products/oil" products={oil}/>            
            </div>
        </AppLayout>
    );
}

export default Groceries;