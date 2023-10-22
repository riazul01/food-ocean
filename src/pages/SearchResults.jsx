import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

// layouts
import AppLayout from '../layouts/AppLayout';

// components
import ProductCard from '../components/ProductCard';

// context
import { ProductsContext } from '../context/ProductContextProvider';

const SearchResults = () => {
    const { products } = useContext(ProductsContext);
    const location = useLocation();
    
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        // filter search items
        if (location.state !== null) {
            const searchText = location.state.searchText;
            const searchCategory = location.state.searchCategory;

            const items = searchText !== '' && products && products.filter((item) => {
                const mainText = ''.concat(item.category, item.name, item.price, item.status, item.type, item.weight, item.unit).replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
                const srchText = searchText.replace(/[^a-zA-Z0-9@]/g, '').toLowerCase().slice(0, 3);
                
                let categoryFlag = null;
                const rawProducts = ['vegetables', 'fruits', 'meat', 'fish', 'eggs', 'spices', 'rice', 'flour', 'oil'];
                const beverages = ['tea-coffe', 'dry-fruits', 'biscuits', 'cake', 'jams', 'breads']
                
                // filter category products
                if (searchCategory === 'raw-products') {
                    for (let i = 0; i < rawProducts.length; i ++) {
                        if (item.category === rawProducts[i]) {
                            categoryFlag = true;
                            break;
                        }
                    }
                } else if (searchCategory === 'beverages') {
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

            // store filtered items
            if (items) {
                setFilteredItems(items);
            }
        }

    }, [location.state, products]);

    return (
        <AppLayout>
            <div className="mx-auto px-[0.4rem] pb-[3rem] max-w-[1420px] min-h-[50vh]">
                
                {/* search info */}
                <div className="py-[1.2rem] flex items-center justify-between">
                    <h1 className="text-[1.4rem] font-bold italic">Search results for {`"${location.state.searchText}"`}</h1>
                </div>

                {/* search products */}
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