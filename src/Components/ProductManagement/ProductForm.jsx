// import React from 'react';

import { useState } from "react";

const ProductForm = ({handleAddProducts}) => {

    // invalid input hole 
    const [error, setError] = useState('');

    const handleProductSubmit = e => {
        e.preventDefault();


        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        // console.log(name, price, quantity);

        if(name.length === 0){
            setError('Please Provide a Valid Name of Product');
            return;
        }
        else if(price.length === 0 || price < 0){
            setError('Provide a valid price of the product');
            return;
        }
        else{
            // input field thik ase 
            setError('');
        }

        const newProduct = {
            name,
            price, 
            quantity
        }
        // console.log(newProduct);
        // if(!error){
        //     handleAddProducts(newProduct);
        // }

        handleAddProducts(newProduct);
    }

    return (
        <div>
            <h2>Add a Product</h2>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder="Product Name" />
                <br />
                <input type="text" name="price" placeholder="Product Price" />
                <br />
                <input type="text" name="quantity" placeholder="Product quantity" />
                <br />
                <input type="submit" value="Submit" />
            </form>

            <p><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;