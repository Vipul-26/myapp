import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router'

const Products = () => {

    const [prodData, setProdData] = useState();

    const router = useRouter();

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then((response) => {
                setProdData(response.data.products);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    console.log(router.query);

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
