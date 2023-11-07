import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

// layouts
import AppLayout from '../layouts/AppLayout';

// components
import ProductCard from '../components/ProductCard';

// context
import { ProductsContext } from '../context/ProductsContextProvider';

// skeleton loader
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CategoryProducts = () => {
    const { products, top, recent, popular, vegetables, fruits, meat, fish, eggs, teaCoffe, spices, dryFruits, biscuits, cakes, jams, breads, rice, flour, oil } = useContext(ProductsContext);
    const path = useLocation().pathname.split('/').pop();

    let title = path;
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
        title = "tea & coffe";
        data = [...teaCoffe];
        quantity = teaCoffe.length;
    } else if (path === 'spices') {
        data = [...spices];
        quantity = spices.length;
    } else if (path === 'dry-fruits') {
        title = "dry fruits";
        data = [...dryFruits];
        quantity = dryFruits.length;
    } else if (path === 'biscuits') {
        data = [...biscuits];
        quantity = biscuits.length;
    } else if (path === 'cakes') {
        data = [...cakes];
        quantity = cakes.length;
    } else if (path === 'jams') {
        title = "jams & jellies";
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
        title = "top products";
        data = [...top];
        quantity = top.length;
    } else if (path === 'recent-products') {
        title = "recent products";
        data = [...recent];
        quantity = recent.length;
    } else if (path === 'popular-now') {
        title = "popular now";
        data = [...popular];
        quantity = popular.length;
    }

    return (
        <AppLayout>
            <div className="mx-auto px-[0.4rem] pb-[3rem] w-full max-w-[1420px]">
                {/* header */}
                <div className="py-[1.2rem] flex items-center justify-between">
                    <h1 className="text-[1.4rem] font-bold capitalize">{title}</h1>
                    <p className="text-[1rem] font-bold text-[green]">{quantity} Items</p>
                </div>

                {/* products */}
                {products.length !== 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1.2rem] place-items-center">
                    {data.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                </div> : <div className="flex gap-[1.2rem] items-center justify-center">
                    <Skeleton containerClassName="flex-1" className="w-full h-[360px]"/>
                    <Skeleton containerClassName="flex-1" className="w-full h-[360px]"/>
                    <Skeleton containerClassName="flex-1" className="w-full h-[360px]"/>
                    <Skeleton containerClassName="flex-1" className="w-full h-[360px]"/>
                    <Skeleton containerClassName="flex-1" className="w-full h-[360px]"/>
                </div>}
            </div>
        </AppLayout>
    );
}

export default CategoryProducts;