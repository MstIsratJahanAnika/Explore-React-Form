// import React from 'react';

import GrandPa from "./GrandPa";
import './FamilyTree.css';
import { createContext, useState } from "react";

// context 
export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {

    const [money, setMoney] = useState(0);

    const asset = 'diamond';
    const newAsset = 'gold';

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>

            <h3>Total Family Money: {money}</h3>
            <MoneyContext value={[money, setMoney]}>
                {/* AssetContext Grandpa er shob jaygay accessible */}
                <AssetContext.Provider value={newAsset}>
                    <GrandPa asset={asset}></GrandPa>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;