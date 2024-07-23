/* eslint-disable react/prop-types */
import CarouselImage from "./CarouselImage";
import { useCallback, useEffect, useState } from "react";
import styles from "./Details.module.css";
import Counter from "../reuseable/counter/Counter";
import Button from "../reuseable/button/Button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItemDetails } from "../../store/actions/quoteActions";
function Content({ preview }) {
  const { name } = useParams();
  const dispatch = useDispatch();
  const wishlistRef = useRef();
  const { productDetails } = useSelector(
    (state) => state.product
  );
 const exists =
   wishlistRef?.current.find((item) => item.product === productDetails.product) !==
   undefined;
   
  useEffect(() => {
    if (preview) {
      dispatch(getItemDetails(preview));
    }
    if (!preview) {
      dispatch(getItemDetails(name));
    }
  }, [name, dispatch, preview]);

  useCallback(() => {
    if (preview) {
      dispatch(getItemDetails(preview));
    }
    if (!preview) {
      dispatch(getItemDetails(name));
    }
  }, [name, dispatch, preview]);
  console.log(productDetails, name);
  const handleChange = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.content}>
      {productDetails.map((item) => (
        <>
          <div key={item.id} className={styles.image}>
            <CarouselImage image={item.img} />
          </div>

          <div className={styles.info}>
            <h3 className={styles.title}>{item.product}</h3>
            <span className={styles.price}>
              &#x20A6;{item.price.toFixed(2)}
            </span>
            <section className={styles.selection}>
              <div>
                <Counter />
              </div>
              <div>
                <Button name="Add to Cart" />
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
              <p>{item.description}</p>
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
        </>
      ))}
    </div>
  );
}

export default Content;
