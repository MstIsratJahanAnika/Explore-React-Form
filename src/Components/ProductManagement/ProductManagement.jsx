// import React from 'react';

import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {

    const [products, setProduct] = useState([]);

    const handleAddProducts = newProduct =>{

        // new product add a new array
        const newProducts = [...products, newProduct];
        setProduct(newProducts);

    }


    return (
        <div>
            <ProductForm handleAddProducts={handleAddProducts}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;