/* eslint-disable react/prop-types */
import styles from './ProductItem.module.css'
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
import { useState } from 'react';
const ProductItem = ({ name, color, size, price, quantity }) => {
  
  return (
    <>
      <div className={styles.cartItem}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={img1} style={{width: "100%", height: "100%"}} />
        </div>
        <div>

        <h6 style={{margin: "0px"}}>{name}</h6>
        </div>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <C
        <span className={styles.price}>${(price * quantity).toFixed(2)}</span>
        <i className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={img1} style={{width: "100%", height: "100%"}} />
        </div>
        <div>

        <h6 style={{margin: "0px"}}>{name}</h6>
        </div>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <div className={styles.counter}>
          <button onClick={handleDecrement} className={styles.button}>
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button onClick={handleIncrement} className={styles.button}>
            +
          </button>
        </div>
        <span className={styles.price}>${(price * quantity).toFixed(2)}</span>
        <i className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={img1} style={{width: "100%", height: "100%"}} />
        </div>
        <div>

        <h6 style={{margin: "0px"}}>{name}</h6>
        </div>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <div className={styles.counter}>
          <button onClick={handleDecrement} className={styles.button}>
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button onClick={handleIncrement} className={styles.button}>
            +
          </button>
        </div>
        <span className={styles.price}>${(price * quantity).toFixed(2)}</span>
        <i className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={img1} style={{width: "100%", height: "100%"}} />
        </div>
        <div>

        <h6 style={{margin: "0px"}}>{name}</h6>
        </div>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <div className={styles.counter}>
          <button onClick={handleDecrement} className={styles.button}>
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button onClick={handleIncrement} className={styles.button}>
            +
          </button>
        </div>
        <span className={styles.price}>${(price * quantity).toFixed(2)}</span>
        <i className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={img1} style={{width: "100%", height: "100%"}} />
        </div>
        <div>

        <h6 style={{margin: "0px"}}>{name}</h6>
        </div>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <div className={styles.counter}>
          <button onClick={handleDecrement} className={styles.button}>
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button onClick={handleIncrement} className={styles.button}>
            +
          </button>
        </div>
        <span className={styles.price}>${(price * quantity).toFixed(2)}</span>
        <i className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
      </div>
    </>
  );
};

export default ProductItem