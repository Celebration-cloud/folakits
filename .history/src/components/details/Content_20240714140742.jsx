/* eslint-disable react/prop-types */
import CarouselImage from "./CarouselImage";
import { useEffect, useState } from "react";
import styles from "./Details.module.css";
import Counter from "../reuseable/counter/Counter";
import Button from "../reuseable/button/Button";
import { useParams } from "react-router-dom";
function Content() {
    const {name} = useParams();
    useEffect(() => {
      return () => {
          console.log(name)
        }
      }, [name])
      
    const handleChange = (event) => {
      e.
    };
  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <CarouselImage />
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>Pastel Jacket With Bejewelled Collar</h3>
        <span className={styles.price}>79.99 GBP</span>
        <section className={styles.selection}>
          <div>
            <Counter/>
          </div>
          <div>

          <Button name="Add to Cart"/>
          </div>
        </section>
        <section className={styles.wishing}>
          <span>Open sizes guide</span>
          <span className={styles.wish}>
            <i className="fa-regular fa-heart fa-xl"></i>
            <span>Add to Wishlist</span>
          </span>
        </section>
        <section className={styles.describe}>
          <h2>Description:</h2>
          <p>
            Pastel Jacket with Bejewelled collar exclusive pattern by John
            Malkovich and printed on soft cotton fabric.Made in Italy. Quilted
            Design Contrasted faux-fur collar Loops on the shoulder Side zip
            pockets Two side pockets with one press stud fasteneing Long sleeve
            with elastic cuff's Zip fasteneing on the front section Side length
            31.5cm Back length 56.5cm
          </p>
        </section>
        <section className={styles.share}>
          <h5>Share</h5>
          <span>
            <i className="fa-brands fa-facebook fa-xl"></i>
            <i className="fa-brands fa-instagram fa-xl"></i>
            <i className="fa-brands fa-square-whatsapp fa-xl"></i>
          </span>
        </section>
      </div>
    </div>
  );
}

export default Content
