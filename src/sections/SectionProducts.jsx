import React from 'react';
import { Link } from 'react-router-dom';

// components
import ProductCard from '../components/ProductCard';

// icons
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const SectionProducts = ({ title, path, products }) => {

    const len = products ? products.length : 0;

    // shuffle product items
    for (let i = 0; i < len; i ++) {
        let j = parseInt(Math.random() * len);
        let temp = products[i];
        products[i] = products[j];
        products[j] = temp;
    }

    return (
        <div className="mx-auto px-[0.4rem] pb-[5rem] max-w-[1420px]">

            {/* header */}
            <div className="py-[1.2rem] flex items-center justify-between">
                <h1 className="text-[1.4rem] font-bold capitalize">{title}</h1>
                <Link to={path} className="flex items-center">
                    <p className="text-[1rem] font-bold text-[green]">View more</p>
                    <MdKeyboardDoubleArrowRight className="ms-[0.4rem] text-[1.2rem] text-[green] font-bold"/>
                </Link>
            </div>

            {/* products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1.2rem] place-items-center">
                {products && products.slice(0, 10).map((item) => {
                    return <ProductCard key={item.id} data={item}/>
                })}
            </div>
        </div>
    );
}

export default SectionProducts;