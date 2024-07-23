/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import ImageItem from "../reuseable/card/ImageItem";
import styles from './WishList.module.css'
const WishList = ({ items, onRemoveItem }) => {
  const navigate = useNavigate()
  const wishlistContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  };

  

  const removeButtonStyle = {
    top: "10px",
    right: "10px",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={wishlistContainerStyle}>
      {items &&
        items.map((item, index) => (
          <div key={index} className={styles.wishItem}>
            <div className={styles.img}>
              <img src={item.img[0]} alt="" />
            </div>
            <div className={styles.details}>
              <h3>{item.product}</h3>
              <p style={{ color: "red" }}>
                {item.originalPrice} {item.originalPrice && `-`}&#x20A6;
                {item.price.}
              </p>
              <p>{item.description}</p>
              <span>
                Category: <span style={{ color: "blue" }}>{item.category}</span>
              </span>
            </div>
            <div className={styles.option}>
              <button
                onClick={() => navigate(`/Shop/${item.product}`)}
                style={{
                  ...removeButtonStyle,
                  color: "white",
                  backgroundColor: "blue",
                }}
              >
                Select Options
              </button>
              <span
                style={removeButtonStyle}
                onClick={() => onRemoveItem(item.id)}
              >
                <i className="fa-solid fa-heart fa-xl"></i>
              </span>
            </div>
          </div>
        ))}
      {items && items.length === 0 && <p>Your wishlist is empty.</p>}
    </div>
  );
};

export default WishList;
