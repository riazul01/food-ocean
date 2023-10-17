import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import AppLayout from '../layouts/AppLayout';
import { useLocation } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';

const CategoryItems = () => {
    const { vegetables, fruits, meat, fish, eggs, teaCoffe, spices, dryFruits, biscuits, cake, jams, breads } = useContext(ProductsContext);
    const path = useLocation().pathname.split('/').pop();

    return (
        <AppLayout>
            <div className="mx-auto px-[0.4rem] pb-[3rem] max-w-[1420px]">
                <div className="py-[1.2rem] flex items-center justify-between">
                    <h1 className="text-[1.4rem] font-bold capitalize">{path}</h1>
                    <p className="text-[1rem] font-bold text-[green]">120 Items</p>
                </div>
                <div className="grid grid-cols-5 gap-[1.2rem]">
                    {path === 'vegetables' && vegetables.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                    {path === 'fruits' && fruits.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                    {path === 'meat' && meat.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                    {path === 'fish' && fish.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                    {path === 'eggs' && eggs.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                    {path === 'tea-coffe' && teaCoffe.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                    {path === 'spices' && spices.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                    {path === 'dry-fruits' && dryFruits.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                    {path === 'biscuits' && biscuits.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                    {path === 'cakes' && cake.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                    {path === 'jams' && jams.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                    {path === 'breads' && breads.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                </div>
            </div>
        </AppLayout>
    );
}

export default CategoryItems;