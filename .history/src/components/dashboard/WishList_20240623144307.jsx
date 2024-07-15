/* eslint-disable react/prop-types */

import ImageItem from "../reuseable/card/ImageItem";
import styles from './WishList.module.css'
const WishList = ({ items, onRemoveItem }) => {
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
      {items.map((item, index) => (
        <div key={index} className={styles.wishItem}>
          <div className={styles.img}>

          <ImageItem product={item} />
          </div>
          <div className={styles.details}>
            <h3>{item.name}</h3>
            <p style={{color: ""}}>{item.originalPrice} {item.originalPrice && `-`} {item.price}</p>
            <p>{item.description}</p>
            <span>Category: {item.category}</span>
          </div>
          <div className={styles.option}>

          <button style={{...removeButtonStyle, color: "white", backgroundColor: "blue"}}>
            Select Options
          </button>
          <span style={removeButtonStyle} onClick={() => onRemoveItem(item.id)}>
            <i className="fa-solid fa-heart fa-xl"></i>
          </span>
          </div>
        </div>
      ))}
      {items.length === 0 && <p>Your wishlist is empty.</p>}
    </div>
  );
};

export default WishList;
