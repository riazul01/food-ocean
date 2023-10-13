import React from 'react';
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
        <div className="mx-auto px-[0.4rem] max-w-[1420px]">
            <div className="w-full grid grid-cols-8 border-[1px] border-e-0 border-b-0 border-[silver]">
                <Category Category="Vegetables" CategoryImg={VegetableImg}/>
                <Category Category="Fruits" CategoryImg={FruitImg}/>
                <Category Category="Meat" CategoryImg={MeatImg}/>
                <Category Category="Fish" CategoryImg={FishImg}/>
                <Category Category="Eggs" CategoryImg={EggImg}/>
                <Category Category="Tea & Coffe" CategoryImg={TeaImg}/>
                <Category Category="Spicies" CategoryImg={SpicyImg}/>
                <Category Category="Dried Fruits" CategoryImg={DryFruitImg}/>
                <Category Category="Jams & Jellies" CategoryImg={JamImg}/>
                <Category Category="Biscuits" CategoryImg={BiscuitsImg}/>
                <Category Category="Cakes" CategoryImg={CakeImg}/>
                <Category Category="Breads" CategoryImg={BreadImg}/>
                <Category Category="Rice" CategoryImg={RiceImg}/>
                <Category Category="Flour" CategoryImg={FlourImg}/>
                <Category Category="Oil" CategoryImg={OilImg}/>
            </div>
        </div>
    );
}

export default Categories;