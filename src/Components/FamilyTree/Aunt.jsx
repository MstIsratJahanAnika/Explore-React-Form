// import React from 'react';
import { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {

    const [money, setMoney] = use(MoneyContext);

    const handleAddMoney=()=>{
        setMoney(money + 5000);
    }
    return (
        <div>
            <h3>Aunt</h3>

            <section className='flex'>
                <Cousin asset={asset} name='Tom tom'></Cousin>
                <Cousin name='Jared JoJo'></Cousin>

                <button onClick={handleAddMoney}>Add 5000tk</button>
            </section>
        </div>
    );
};

export default Aunt;