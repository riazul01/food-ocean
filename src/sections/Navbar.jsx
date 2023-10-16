import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [index, setIndex] = useState(0);
    const active = [true, true, true, true, true, true, true, true, false, false, false, false, false, false, false];

    for (let i = 0; i < active.length; i ++) {
        let j = Math.floor(Math.random() * 15);
        let temp = active[i];
        active[i] = active[j];
        active[j] = temp;

        if (active[index] === false) {
            active[index] = true;

            for (let j = 0; j < active.length; j ++) {
                if (active[j] === true && j !== index) {
                    active[j] = false;
                    break;
                }
            }
        }
    }
    

    return (
        <div className="w-full">
            {/* nav links */}
            <div className="flex items-center justify-between max-w-[1420px] mx-auto px-[0.4rem] py-[1.4rem]">
                <div className="flex items-center justify-center">
                    <NavLink to="/" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Home</NavLink>
                    <NavLink to="/groceries" className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Groceries</NavLink>
                    {active[0] && <NavLink to="/groceries/vegetables" onClick={() => setIndex(0)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Vegetables</NavLink>}
                    {active[1] && <NavLink to="/groceries/fruits" onClick={() => setIndex(1)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Fruits</NavLink>}
                    {active[2] && <NavLink to="/groceries/meat" onClick={() => setIndex(2)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Meat</NavLink>}
                    {active[3] && <NavLink to="/groceries/fish" onClick={() => setIndex(3)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Fish</NavLink>}
                    {active[4] && <NavLink to="/groceries/eggs" onClick={() => setIndex(4)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Eggs</NavLink>}
                    {active[5] && <NavLink to="/groceries/tea-coffe" onClick={() => setIndex(5)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Tea & Coffe</NavLink>}
                    {active[6] && <NavLink to="/groceries/spices" onClick={() => setIndex(6)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Spices</NavLink>}
                    {active[7] && <NavLink to="/groceries/dry-fruits" onClick={() => setIndex(7)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Dry Fruits</NavLink>}
                    {active[8] && <NavLink to="/groceries/jams" onClick={() => setIndex(8)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Jams & Jellies</NavLink>}
                    {active[9] && <NavLink to="/groceries/biscuits" onClick={() => setIndex(9)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Biscuits</NavLink>}
                    {active[10] && <NavLink to="/groceries/cakes" onClick={() => setIndex(10)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Cakes</NavLink>}
                    {active[11] && <NavLink to="/groceries/breads" onClick={() => setIndex(11)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Breads</NavLink>}
                    {active[12] && <NavLink to="/groceries/rice" onClick={() => setIndex(12)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Rice</NavLink>}
                    {active[13] && <NavLink to="/groceries/flour" onClick={() => setIndex(13)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Flour</NavLink>}
                    {active[14] && <NavLink to="/groceries/oil" onClick={() => setIndex(14)} className="navLink mr-[0.4rem] px-[0.6rem] py-[0.2rem] text-[#222] text-[1rem] font-[600] border-[1px] border-gray-600 rounded-md">Oil</NavLink>}
                </div>
            </div>
        </div>
    );
}

export default Navbar;