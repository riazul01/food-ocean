import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import AppLayout from '../layouts/AppLayout';
import { useLocation } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';

const CategoryItems = () => {
    const { vegetables, fruits } = useContext(ProductsContext);
    const path = useLocation().pathname.split('/').pop();

    return (
        <AppLayout>
            <div className="mx-auto px-[0.4rem] pb-[3rem] max-w-[1420px]">
                <div className="py-[1.2rem] flex items-center justify-between">
                    <h1 className="text-[1.4rem] font-bold capitalize">{path}</h1>
                    <p className="text-[1rem] font-bold text-[green]">120 Items</p>
                </div>
                <div className="grid grid-cols-5 gap-[1.2rem]">
                    {fruits.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                </div>
            </div>
        </AppLayout>
    );
}

export default CategoryItems;