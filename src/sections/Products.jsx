import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';


const Products = ({ title, path, products }) => {
    return (
        <div className="mx-auto px-[0.4rem] pb-[3rem] max-w-[1420px]">
            <div className="py-[1.2rem] flex items-center justify-between">
                <h1 className="text-[1.4rem] font-bold capitalize">{title}</h1>
                <Link to={path} className="flex items-center">
                    <p className="text-[1rem] font-bold text-[green]">View more</p>
                    <MdKeyboardDoubleArrowRight className="ms-[0.4rem] text-[1.2rem] text-[green] font-bold"/>
                </Link>
            </div>
            <div className="grid grid-cols-5 gap-[1.2rem]">
                {products.map((item) => {
                    return <ProductCard key={item.id} data={item}/>
                })}
            </div>
        </div>
    );
}

export default Products;