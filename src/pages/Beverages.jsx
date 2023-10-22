import React, { useContext } from 'react';

// layouts
import AppLayout from '../layouts/AppLayout';

// sections
import SectionProducts from '../sections/SectionProducts';

// context
import { ProductsContext } from '../context/ProductContextProvider';

const Beverages = () => {
    const { teaCoffe, dryFruits, biscuits, cake, jams, breads } = useContext(ProductsContext);

    return (
        <AppLayout>
            <div className="mx-auto max-w-[1420px]">
                <SectionProducts title="tea & coffe" path="/groceries/beverages/tea-coffe" products={teaCoffe}/>
                <SectionProducts title="dry fruits" path="/groceries/beverages/dry-fruits" products={dryFruits}/>
                <SectionProducts title="jams & jellies" path="/groceries/beverages/jams" products={jams}/>
                <SectionProducts title="biscuits" path="/groceries/beverages/biscuits" products={biscuits}/>
                <SectionProducts title="cakes" path="/groceries/beverages/cakes" products={cake}/>
                <SectionProducts title="breads" path="/groceries/beverages/breads" products={breads}/>           
            </div>
        </AppLayout>
    );
}

export default Beverages;