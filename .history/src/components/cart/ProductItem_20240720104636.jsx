/* eslint-disable react/prop-types */
import styles from './ProductItem.module.css'
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
import { useState } from 'react';
import Counter from '../reuseable/counter/Counter';
const ProductItem = ({ cart }) => {
  return (
    <>
    {cart?.map((item, idx) => (
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={img1} style={{ width: "100%", height: "100%" }} />
        </div>
        <div>
          <h6 style={{ margin: "0px" }}>{name}</h6>
        </div>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <Counter />
        <span className={styles.price}>${(price * quantity).toFixed(2)}</span>
        <i className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
      </div>
    ))}
      
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={img1} style={{ width: "100%", height: "100%" }} />
        </div>
        <div>
          <h6 style={{ margin: "0px" }}>{name}</h6>
        </div>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <Counter />
        <span className={styles.price}>${(price * quantity).toFixed(2)}</span>
        <i className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={img1} style={{ width: "100%", height: "100%" }} />
        </div>
        <div>
          <h6 style={{ margin: "0px" }}>{name}</h6>
        </div>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <Counter />
        <span className={styles.price}>${(price * quantity).toFixed(2)}</span>
        <i className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={img1} style={{ width: "100%", height: "100%" }} />
        </div>
        <div>
          <h6 style={{ margin: "0px" }}>{name}</h6>
        </div>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <Counter />
        <span className={styles.price}>${(price * quantity).toFixed(2)}</span>
        <i className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={img1} style={{ width: "100%", height: "100%" }} />
        </div>
        <div>
          <h6 style={{ margin: "0px" }}>{name}</h6>
        </div>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <Counter />
        <span className={styles.price}>${(price * quantity).toFixed(2)}</span>
        <i className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
      </div>
    </>
  );
};

export default ProductItem