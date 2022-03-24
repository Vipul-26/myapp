import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [filterData, setFilteData] = useState();
  const [activeCat, setActiveCat] = useState([]);
  const [activeSubCat, setActiveSubCat] = useState([]);
  const [activeBrand, setActiveBrand] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/filters')
      .then((response) => {
        setFilteData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.name === 'brand') {
      setActiveBrand([...activeBrand, e.target.value])
    }
    else if (e.target.name === 'cat') {
      setActiveCat([...activeCat, e.target.value])
    }
    else if (e.target.name === 'subCat') {
      setActiveSubCat([...activeSubCat, e.target.value])
    }
  }

  console.log("Vipul", activeCat, activeSubCat, activeBrand);

  return (
    <div className={styles.container}>
      <div className={styles.firstDiv}>
        <h2>
          Category
        </h2>
        {filterData && filterData.searchFilter &&
          (
            filterData.searchFilter.categories.map((value, index) => {
              return (
                <div key={index}>
                  <label>
                    <input type="checkbox" value={value.name} onClick={(e) => handleClick(e)} name="cat" />
                    {value.name}
                  </label>
                  {value && value.subCategories &&
                    (
                      value.subCategories.map((val, index) => {
                        return (
                          <div key={index} className={styles.subCat}>
                            <label>
                              <input type="checkbox" value={val.name} onClick={(e) => handleClick(e)} name="subCat" />
                              {val.name}
                            </label>
                          </div>
                        )
                      })
                    )
                  }
                </div>
              )
            })
          )
        }
      </div>
      <div className={styles.secondDiv}>
        <h2>
          Brands
        </h2>
        {filterData && filterData.searchFilter &&
          (
            filterData.searchFilter.brands.map((value, index) => {
              return (
                <div key={index}>
                  <label>
                    <input type="checkbox" value={value.name} onClick={(e) => handleClick(e)} name="brand" />
                    {value.name}
                  </label>
                </div>
              )
            })
          )
        }
      </div>
    </div>
  )
}
