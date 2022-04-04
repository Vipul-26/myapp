import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router'

const Products = () => {

    const [prodData, setProdData] = useState([]);

    const router = useRouter();

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then((response) => {
                const filteredCategoryData = response.data.products.filter(
                    (item) => item.category === router.query.category
                );
                setProdData(filteredCategoryData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [router.query.category]);

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
    return (
        <h3>Oops! No Product found</h3>
    );
};

export default Products;
