/* eslint-disable react/prop-types */
import CarouselImage from "./CarouselImage";
import { useCallback, useEffect, useState } from "react";
import styles from "./Details.module.css";
import Counter from "../reuseable/counter/Counter";
import Button from "../reuseable/button/Button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItemDetails } from "../../store/actions/quoteActions";
function Content({preview}) {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { loading, error, products} = useSelector(state => state.product)
  
  useEffect(() => {
/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./CarouselImage.module.css"
function CarouselImage({image}) {
    const [view , setView] = useState(0)
    console.log(view, image)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-20">
          <div
            id="custCarousel"
            data-ride="carousel"
            className="carousel slide"
            align="center"
          >
            {/* <!-- slides --> */}
            <div className={styles["carousel-inner"]}>
              {image.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${view === index && `active`}`}
                >
                  <img src={item} alt="Hills" />
                </div>
              ))}
            </div>

            {/* <!-- Left right --> */}
            {/* <a
              className="carousel-control-prev"
              href="#custCarousel"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a
              className="carousel-control-next"
              href="#custCarousel"
              data-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </a> */}

            {/* <!-- Thumbnails --> */}
            <ol className="carousel-indicators list-inline">
              {image.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setView(index)}
                  className={`list-inline-item ${view === index && `active`}`}
                >
                  <a
                    id="carousel-selector-0"
                    className="selected"
                    data-slide-to="0"
                    data-target="#custCarousel"
                  >
                    <img src={item} style={{ height: "50px"}} className="img-fluid" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselImage

    dispatch(getItemDetails(name));
  }, [name, dispatch]);

  useCallback(() => {
    // if (preview) {
    //   dispatch(getItemDetails(preview));
    // }
    // if (!preview) {
    //   dispatch(getItemDetails(name));
    // }
    dispatch(getItemDetails(name))
  }, [name, dispatch]);
console.log(products, name)
  const handleChange = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.content}>
      {products.map((item) => (
        <>
          <div key={item.id} className={styles.image}>
            <CarouselImage image={item.img} />
          </div>

          <div className={styles.info}>
            <h3 className={styles.title}>{item.product}</h3>
            <span className={styles.price}>&#x20A6;{item.price.toFixed(2)}</span>
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

export default Content
