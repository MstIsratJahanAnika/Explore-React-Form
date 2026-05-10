// import React from 'react';

import { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {

    // chaile onno nam o deya jaito const er
    const [money, setMoney] = use(MoneyContext);
    return (
        <div>
            <h3>Brother</h3>
            <button onClick={()=> setMoney(money + 1000)}>Add 1000tk</button>
        </div>
    );
};

export default Brother;