// ProductList.js
import React, { useState, useEffect } from 'react';
import sanityClient from '../../sanityClient'; // Import the sanityClient setup

function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from Sanity
        sanityClient
            .fetch('*[_type == "product"]') // 'product' should match your Sanity schema type name
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price} MAD</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsList;