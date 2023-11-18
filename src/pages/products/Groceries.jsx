import React, { useContext } from 'react';

// layouts
import AppLayout from '../../layouts/AppLayout';

// sections
import SectionProducts from '../../sections/SectionProducts';
import Categories from '../../sections/Categories';

// context
import { ProductsContext } from '../../context/ProductsContextProvider';

const Groceries = () => {
    const { vegetables, fruits, meat, fish, eggs, teaCoffe, spices, dryFruits, biscuits, cakes, jams, breads, rice, flour, oil } = useContext(ProductsContext);

    return (
        <AppLayout>
            <div className="mx-auto max-w-[1420px]">
                <Categories/>
                <SectionProducts title="vegetables" path="/groceries/raw-products/vegetables" products={vegetables}/>
                <SectionProducts title="fruits" path="/groceries/raw-products/fruits" products={fruits}/>
                <SectionProducts title="meat" path="/groceries/raw-products/meat" products={meat}/>
                <SectionProducts title="fish" path="/groceries/raw-products/fish" products={fish}/>
                <SectionProducts title="eggs" path="/groceries/raw-products/eggs" products={eggs}/>
                <SectionProducts title="spices" path="/groceries/raw-products/spices" products={spices}/>
                <SectionProducts title="rice" path="/groceries/raw-products/rice" products={rice}/>
                <SectionProducts title="flour" path="/groceries/raw-products/flour" products={flour}/>
                <SectionProducts title="oil" path="/groceries/raw-products/oil" products={oil}/>            
                <SectionProducts title="tea & coffe" path="/groceries/beverages/tea-coffe" products={teaCoffe}/>
                <SectionProducts title="dry fruits" path="/groceries/beverages/dry-fruits" products={dryFruits}/>
                <SectionProducts title="jams & jellies" path="/groceries/beverages/jams" products={jams}/>
                <SectionProducts title="biscuits" path="/groceries/beverages/biscuits" products={biscuits}/>
                <SectionProducts title="cakes" path="/groceries/beverages/cakes" products={cakes}/>
                <SectionProducts title="breads" path="/groceries/beverages/breads" products={breads}/>
            </div>
        </AppLayout>
    );
}

export default Groceries;