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
          <div>
            
          </div>
          <ImageItem product={item} />
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>Category: {item.category}</span>
          </div>
          <div>

          <button style={{...removeButtonStyle, color: "white", backgroundColor: "blue"}}>
            Selection Option
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
