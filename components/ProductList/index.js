import React from 'react';
import styles from './productList.module.css';

const ProductList = ({ data }) => {

    const ratingValue = Math.max(1, Math.max(0, data.rating.rate));
    const width = Math.round(ratingValue * 16) || 0;

    return (
        <div className={styles.mainClass}>
            <a href="/">
                <img src={data.image} alt="product" className={styles.image} />
                <span className={styles.price}>
                    {`$${data.price}`}
                </span>
                <span className={styles.title}>
                    {data.title}
                </span>
                <span className={styles.description}>
                    {data.description}
                </span>
            </a>
            <div className={styles.favDiv}>
                <svg className={styles.favorite} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
            </div>
            <svg className={styles.rating} height="15" width="80" viewBox="0 0 80 15">
                <path d="M7.5 11.85l-4.4 2.28.8-4.88L.37 5.78l4.9-.74L7.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88M39.5 11.85l-4.4 2.28.8-4.88-3.53-3.47 4.9-.74L39.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88M23.5 11.85l-4.4 2.28.8-4.88-3.53-3.47 4.9-.74L23.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88M55.5 11.85l-4.4 2.28.8-4.88-3.53-3.47 4.9-.74L55.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88M71.5 11.85l-4.4 2.28.8-4.88-3.53-3.47 4.9-.74L71.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88"></path>
            </svg>
            <svg className={styles.ratingStar} height="15" width={width} viewBox={`0 0 ${width} 15`}>
                <desc></desc>
                <path d="M7.5 11.85l-4.4 2.28.8-4.88L.37 5.78l4.9-.74L7.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88M39.5 11.85l-4.4 2.28.8-4.88-3.53-3.47 4.9-.74L39.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88M23.5 11.85l-4.4 2.28.8-4.88-3.53-3.47 4.9-.74L23.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88M55.5 11.85l-4.4 2.28.8-4.88-3.53-3.47 4.9-.74L55.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88M71.5 11.85l-4.4 2.28.8-4.88-3.53-3.47 4.9-.74L71.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88"></path>
            </svg>
            <span className={styles.ratingCount}>
                {data.rating.count}
            </span>
        </div>
    );
};

export default ProductList;