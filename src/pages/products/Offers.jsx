import React, { useState, useEffect, useContext } from 'react';

// layouts
import AppLayout from '../../layouts/AppLayout';

// components
import ProductCard from '../../components/ProductCard';

// context
import { ProductsContext } from '../../context/ProductsContextProvider';

// skeleton loader
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Offers = () => {
    const { products } = useContext(ProductsContext);
    const discountProducts = products.filter((product) => product.discount !== '0');
    const [len, setLen] = useState(15);

    useEffect(() => {
        window.onscroll = () => {
            const footer = document.querySelector(".footer");
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const footerHeight = footer.offsetHeight;
            
            if (windowHeight + scrollTop + 1 >= scrollHeight - footerHeight) {
                setLen((prev) => prev + 15);
            }
        }
    });

    return (
        <AppLayout>
            <div className="mx-auto px-[0.4rem] pb-[3rem] max-w-[1420px] min-h-[50vh]">
                {/* header */}
                <div className="py-[1.2rem] flex items-center justify-between">
                    <h1 className="text-[1.4rem] font-bold capitalize">Best Products</h1>
                    <p className="text-[1rem] font-bold text-[green]">{discountProducts ? discountProducts.length : '0'} Items</p>
                </div>

                {/* products */}
                {products.length !== 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1.2rem] place-items-center">
                    {discountProducts.slice(0, len).map((item) => {
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

export default Offers;