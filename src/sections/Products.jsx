import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ProductsContext } from '../context/ProductContextProvider';


const Products = ({ title, path }) => {
    const { products } = useContext(ProductsContext);

    return (
        <div className="mx-auto mt-[2rem] px-[0.4rem] pb-[2rem] max-w-[1420px]">
            <div className="py-[1.2rem] flex items-center justify-between">
                <h1 className="text-[1.4rem] font-bold capitalize">{title}</h1>
                <Link to={path} className="text-[1rem] font-bold">View more</Link>
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