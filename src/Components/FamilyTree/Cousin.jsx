// import React from 'react';

import Friend from "./Friend";
import Special from "./Special";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>

            {/* Tom tom er special person */}
            {
                name === 'Tom tom' && <Special asset={asset}></Special>
            }
            {
                name === 'Jared JoJo' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;