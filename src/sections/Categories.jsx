import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// components
import Category from '../components/Category';

// context
import { ProductsContext } from '../context/ProductsContextProvider';

// images
import VegetableImg from '../assets/images/categories/vegetable.png';
import FruitImg from '../assets/images/categories/food.png';
import MeatImg from '../assets/images/categories/meat.png';
import FishImg from '../assets/images/categories/fish.png';
import EggImg from '../assets/images/categories/eggs.png';
import TeaImg from '../assets/images/categories/tea.png';
import SpicyImg from '../assets/images/categories/spicy.png';
import DryFruitImg from '../assets/images/categories/dried-fruits.png';
import JamImg from '../assets/images/categories/jam.png';
import BiscuitsImg from '../assets/images/categories/cookies.png';
import CakeImg from '../assets/images/categories/cake.png';
import BreadImg from '../assets/images/categories/breads.png';
import FlourImg from '../assets/images/categories/flour.png';
import RiceImg from '../assets/images/categories/rice.png';
import OilImg from '../assets/images/categories/oil.png';

const Categories = () => {
    const { vegetables, fruits, meat, fish, eggs, teaCoffe, spices, dryFruits, biscuits, cakes, jams, breads, rice, flour, oil } = useContext(ProductsContext);

    return (
        <div className="mx-auto pb-[1.6rem] px-[0.4rem] max-w-[1420px]">
            <div className="w-full grid grid-cols-8 border-[1px] border-e-0 border-b-0 border-[silver]">
                <Link to="/groceries/raw-products/vegetables">
                    <Category title="Vegetables" quantity={vegetables ? vegetables.length : '0'} Image={VegetableImg}/>
                </Link>
                <Link to="/groceries/raw-products/fruits">
                    <Category title="Fruits" quantity={fruits ? fruits.length : '0'} Image={FruitImg}/>
                </Link>
                <Link to="/groceries/raw-products/meat">
                    <Category title="Meat" quantity={meat ? meat.length : '0'} Image={MeatImg}/>
                </Link>
                <Link to="/groceries/raw-products/fish">
                    <Category title="Fish" quantity={fish ? fish.length : '0'} Image={FishImg}/>
                </Link>
                <Link to="/groceries/raw-products/eggs">
                    <Category title="Eggs" quantity={eggs ? eggs.length : '0'} Image={EggImg}/>
                </Link>
                <Link to="/groceries/raw-products/spices">
                    <Category title="Spicies" quantity={spices ? spices.length : '0'} Image={SpicyImg}/>
                </Link>
                <Link to="/groceries/raw-products/rice">
                    <Category title="Rice" quantity={rice ? rice.length : '0'} Image={RiceImg}/>
                </Link>
                <Link to="/groceries/raw-products/flour">
                    <Category title="Flour" quantity={flour ? flour.length : '0'} Image={FlourImg}/>
                </Link>
                <Link to="/groceries/raw-products/oil">
                    <Category title="Oil" quantity={oil ? oil.length : '0'} Image={OilImg}/>
                </Link>
                <Link to="/groceries/beverages/tea-coffe">
                    <Category title="Tea & Coffe" quantity={teaCoffe ? teaCoffe.length : '0'} Image={TeaImg}/>
                </Link>
                <Link to="/groceries/beverages/dry-fruits">
                    <Category title="Dry Fruits" quantity={dryFruits ? dryFruits.length : '0'} Image={DryFruitImg}/>
                </Link>
                <Link to="/groceries/beverages/jams">
                    <Category title="Jams & Jellies" quantity={jams ? jams.length : '0'} Image={JamImg}/>
                </Link>
                <Link to="/groceries/beverages/biscuits">
                    <Category title="Biscuits" quantity={biscuits ? biscuits.length : '0'} Image={BiscuitsImg}/>
                </Link>
                <Link to="/groceries/beverages/cakes">
                    <Category title="Cakes" quantity={cakes ? cakes.length : '0'} Image={CakeImg}/>
                </Link>
                <Link to="/groceries/beverages/breads">
                    <Category title="Breads" quantity={breads ? breads.length : '0'} Image={BreadImg}/>
                </Link>
            </div>
        </div>
    );
}

export default Categories;