import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

// layouts
import AppLayout from '../layouts/AppLayout';

// components
import ProductCard from '../components/ProductCard';

// context
import { ProductsContext } from '../context/ProductContextProvider';

const CategoryItems = () => {
    const { top, recent, popular, vegetables, fruits, meat, fish, eggs, teaCoffe, spices, dryFruits, biscuits, cake, jams, breads, rice, flour, oil } = useContext(ProductsContext);
    const path = useLocation().pathname.split('/').pop();

    let data = [];
    let quantity = 0;

    if (path === 'vegetables') {
        data = [...vegetables];
        quantity = vegetables.length;
    } else if (path === 'fruits') {
        data = [...fruits];
        quantity = fruits.length;
    } else if (path === 'meat') {
        data = [...meat];
        quantity = meat.length;
    } else if (path === 'fish') {
        data = [...fish];
        quantity = fish.length;
    } else if (path === 'eggs') {
        data = [...eggs];
        quantity = eggs.length;
    } else if (path === 'tea-coffe') {
        data = [...teaCoffe];
        quantity = teaCoffe.length;
    } else if (path === 'spices') {
        data = [...spices];
        quantity = spices.length;
    } else if (path === 'dry-fruits') {
        data = [...dryFruits];
        quantity = dryFruits.length;
    } else if (path === 'biscuits') {
        data = [...biscuits];
        quantity = biscuits.length;
    } else if (path === 'cakes') {
        data = [...cake];
        quantity = cake.length;
    } else if (path === 'jams') {
        data = [...jams];
        quantity = jams.length;
    } else if (path === 'breads') {
        data = [...breads];
        quantity = breads.length;
    } else if (path === 'rice') {
        data = [...rice]
        quantity = rice.length;
    } else if (path === 'flour') {
        data = [...flour];
        quantity = flour.length;
    } else if (path === 'oil') {
        data = [...oil];
        quantity = oil.length;
    } else if (path === 'top-products') {
        data = [...top];
        quantity = top.length;
    } else if (path === 'recent-products') {
        data = [...recent];
        quantity = recent.length;
    } else if (path === 'popular-now') {
        data = [...popular];
        quantity = popular.length;
    }

    return (
        <AppLayout>
            <div className="mx-auto px-[0.4rem] pb-[3rem] max-w-[1420px]">
                <div className="py-[1.2rem] flex items-center justify-between">
                    <h1 className="text-[1.4rem] font-bold capitalize">{path}</h1>
                    <p className="text-[1rem] font-bold text-[green]">{quantity} Items</p>
                </div>
                <div className="grid grid-cols-5 gap-[1.2rem]">
                    {data.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                </div>
            </div>
        </AppLayout>
    );
}

export default CategoryItems;