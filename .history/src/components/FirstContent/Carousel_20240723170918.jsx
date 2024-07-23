import React from "react";
import styles from "./Carousel.module.css"; // Make sure to import your CSS module
import caro from "/public/R.jpg"; // Replace with the actual image path
import Button from "../reuseable/button/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Carousel() {
  const { advert } = useSelector((state) => state.product);
  const navigate = useNavigate()
  return (
    <div
      id="carouselExampleCaptions"
      className={`${styles.body} carousel slide`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {advert?.map((item, idx) => (
          <button
            type="button"
            key={idx}
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={idx.toString()} // Use the index as a string
            className={idx === 0 ? "active" : ""} // Set the active class conditionally
            aria-current={idx === 0 ? "true" : "false"} // Set aria-current conditionally
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>
      <div className={`${styles.content} carousel-inner`}>
        {advert?.map((item, idx) => (
          <div
            key={idx}
            className={`carousel-item ${idx === 0 ? "active" : ""}`}
          >
            <img src={item.img[0]} className="d-block w-100 h-3" alt="Product" />
            <div
              style={{
                position: "absolute",
                zIndex: 30,
                top: "0",
                padding: "20px",
                marginTop: "100px",
                color: "white",
                display: "inline-flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <h1>{item.product}</h1>
              <p>{item?.description}</p>
              <span style={{ zIndex: 0, position: "relative" }}>
                <Button
                  onClick={() => navigate(`/Shop/${item?.product}`)}
                  name="Shop Now"
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
