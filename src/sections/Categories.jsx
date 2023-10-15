import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/Category';

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
    return (
        <div className="mx-auto pb-[1.6rem] px-[0.4rem] max-w-[1420px]">
            <div className="w-full grid grid-cols-8 border-[1px] border-e-0 border-b-0 border-[silver]">
                <Link to="/groceries/vegetables">
                    <Category Category="Vegetables" CategoryImg={VegetableImg}/>
                </Link>
                <Link to="/groceries/fruits">
                    <Category Category="Fruits" CategoryImg={FruitImg}/>
                </Link>
                <Link to="/groceries/meat">
                    <Category Category="Meat" CategoryImg={MeatImg}/>
                </Link>
                <Link to="/groceries/fish">
                    <Category Category="Fish" CategoryImg={FishImg}/>
                </Link>
                <Link to="/groceries/eggs">
                    <Category Category="Eggs" CategoryImg={EggImg}/>
                </Link>
                <Link to="/groceries/tea-coffe">
                    <Category Category="Tea & Coffe" CategoryImg={TeaImg}/>
                </Link>
                <Link to="/groceries/spices">
                    <Category Category="Spicies" CategoryImg={SpicyImg}/>
                </Link>
                <Link to="/groceries/dried-fruits">
                    <Category Category="Dried Fruits" CategoryImg={DryFruitImg}/>
                </Link>
                <Link to="/groceries/jams">
                    <Category Category="Jams & Jellies" CategoryImg={JamImg}/>
                </Link>
                <Link to="/groceries/biscuits">
                    <Category Category="Biscuits" CategoryImg={BiscuitsImg}/>
                </Link>
                <Link to="/groceries/cakes">
                    <Category Category="Cakes" CategoryImg={CakeImg}/>
                </Link>
                <Link to="/groceries/breads">
                    <Category Category="Breads" CategoryImg={BreadImg}/>
                </Link>
                <Link to="/groceries/reice">
                    <Category Category="Rice" CategoryImg={RiceImg}/>
                </Link>
                <Link to="/groceries/flour">
                    <Category Category="Flour" CategoryImg={FlourImg}/>
                </Link>
                <Link to="/groceries/oil">
                    <Category Category="Oil" CategoryImg={OilImg}/>
                </Link>
            </div>
        </div>
    );
}

export default Categories;