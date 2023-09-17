import React, { useEffect, useState } from 'react';
import ProductModel from '../models/ProductModel';

function Product_home(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ProductModel.getAll().then((res) => {
            setProducts(res);
        }); 
    },[]);
    const Price = () => {
        const price = products.price;
        const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format(price);
    };
    const image = 'http://127.0.0.1:8000/ ';
    return (
        <>
            {products.map((product) => (
                <li><a href="#" style={{ color:"black"}}>{product.name}</a></li>
            ))}
        </>
    );
}

export default Product_home;