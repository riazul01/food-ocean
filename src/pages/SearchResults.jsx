import React, { useState, useEffect, useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import ProductCard from '../components/ProductCard';
import { useLocation } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';

const SearchResults = () => {
    const { products } = useContext(ProductsContext);
    const location = useLocation();
    
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {

        if (location.state !== null) {
            const searchText = location.state.searchText;
            const searchCategory = location.state.searchCategory;

            const items = searchText !== '' && products && products.filter((item) => {
                const mainText = ''.concat(item.category, item.name, item.price, item.status, item.type, item.weight, item.unit).replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
                const srchText = searchText.replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
                
                let categoryFlag = null;

                if (searchCategory === 'raw-products') {
                    const rawProducts = ['vegetables', 'fruits', 'meat', 'fish', 'eggs', 'spices', 'rice', 'flour', 'oil'];
                    for (let i = 0; i < rawProducts.length; i ++) {
                        if (item.category === rawProducts[i]) {
                            categoryFlag = true;
                            break;
                        }
                    }
                } else if (searchCategory === 'beverages') {
                    const beverages = ['tea-coffe', 'dry-fruits', 'biscuits', 'cake', 'jams', 'breads']
                    for (let i = 0; i < beverages.length; i ++) {
                        if (item.category === beverages[i]) {
                            categoryFlag = true;
                            break;
                        }
                    }
                } else {
                    categoryFlag = true;
                }

                if (mainText.includes(srchText) && categoryFlag) {
                    return true;
                } else {
                    return false;
                }
            });

            if (items) {
                setFilteredItems(items);
            }
        }

    }, [location.state, products]);

    return (
        <AppLayout>
            <div className="mx-auto px-[0.4rem] pb-[3rem] max-w-[1420px] min-h-[50vh]">
                <div className="py-[1.2rem] flex items-center justify-between">
                    <h1 className="text-[1.4rem] font-bold italic">Search results for {`"${location.state.searchText}"`}</h1>
                </div>

                {filteredItems.length === 0 ? <p className="text-[1.1rem]">No items found in category {`"${location.state.searchCategory}"!`}</p>
                : <div className="grid grid-cols-5 gap-[1.2rem]">
                    {filteredItems.map((item) => {
                        return <ProductCard key={item.id} data={item}/>
                    })}
                </div>}
            </div>
        </AppLayout>
    );
}

export default SearchResults;