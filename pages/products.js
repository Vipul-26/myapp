import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import styles from '../styles/Home.module.css';

const Products = () => {

    const [prodData, setProdData] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then((response) => {
                setProdData(response.data.products);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    if (prodData) {
        return (
            <div className={styles.prodList}>
                {
                    prodData.map((data) => {
                        return (
                            <ProductList data={data} />
                        )
                    })
                }
            </div>
        )
    }
    return null;
};

export default Products;
