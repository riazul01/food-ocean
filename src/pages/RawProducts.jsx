import React, { useContext }  from 'react';

// layouts
import AppLayout from '../layouts/AppLayout';

// sections
import SectionProducts from '../sections/SectionProducts';

// context
import { ProductsContext } from '../context/ProductsContextProvider';

const RawProducts = () => {
    const { vegetables, fruits, meat, fish, eggs, spices, rice, flour, oil } = useContext(ProductsContext);

    return (
        <AppLayout>
            <div className="mx-auto max-w-[1420px]">
                <SectionProducts title="vegetables" path="/groceries/raw-products/vegetables" products={vegetables}/>
                <SectionProducts title="fruits" path="/groceries/raw-products/fruits" products={fruits}/>
                <SectionProducts title="meat" path="/groceries/raw-products/meat" products={meat}/>
                <SectionProducts title="fish" path="/groceries/raw-products/fish" products={fish}/>
                <SectionProducts title="eggs" path="/groceries/raw-products/eggs" products={eggs}/>
                <SectionProducts title="spices" path="/groceries/raw-products/spices" products={spices}/>
                <SectionProducts title="rice" path="/groceries/raw-products/rice" products={rice}/>
                <SectionProducts title="flour" path="/groceries/raw-products/flour" products={flour}/>
                <SectionProducts title="oil" path="/groceries/raw-products/oil" products={oil}/>            
            </div>
        </AppLayout>
    );
}

export default RawProducts;