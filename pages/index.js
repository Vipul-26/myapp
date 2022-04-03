import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [filterData, setFilterData] = useState();
  const [activeCat, setActiveCat] = useState([]);
  const [activeBrand, setActiveBrand] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/filters')
      .then((response) => {
        setFilterData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);


  const handleSelect = (e) => {
    if (e.target.name === 'brand') {
      if (activeBrand.indexOf(e.target.value) === -1) {
        setActiveBrand([...activeBrand, e.target.value])
      }
      else {
        setActiveBrand(activeBrand.filter((brand) => (brand !== e.target.value)))
      }
    }
    else if (e.target.name === 'category') {
      if (activeCat.indexOf(e.target.value) === -1) {
        setActiveCat([...activeCat, e.target.value])
      }
      else {
        setActiveCat(activeCat.filter((category) => (category !== e.target.value)))
      }
    }
  };

  const handleClick = () => {
    console.log("Vipul", activeCat, activeBrand);
  };

  return (
    <div className={styles.container}>
      <div className={styles.firstDiv}>
        <h3>
          Category
        </h3>
        {filterData && filterData.searchFilter &&
          (
            filterData.searchFilter.categories.map((value, index) => {
              return (
                <div key={index}>
                  <label>
                    <input type="checkbox" value={value.name} onClick={handleSelect} name="category" />
                    {` ${value.name}`}
                  </label>
                </div>
              )
            })
          )
        }
      </div>
      <div className={styles.secondDiv}>
        <h3>
          Brands
        </h3>
        {filterData && filterData.searchFilter &&
          (
            filterData.searchFilter.brands.map((value, index) => {
              return (
                <div key={index}>
                  <label>
                    <input type="checkbox" value={value.name} onClick={handleSelect} name="brand" />
                    {` ${value.name}`}
                  </label>
                </div>
              )
            })
          )
        }
      </div>
      <button className={`${styles.btn}`} onClick={handleClick}>
        Apply Filter
      </button>
    </div>
  )
};
