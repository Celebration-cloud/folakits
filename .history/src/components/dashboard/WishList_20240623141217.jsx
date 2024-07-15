/* eslint-disable react/prop-types */

import ImageItem from "../reuseable/card/ImageItem";

const WishList = ({ items, onRemoveItem }) => {
  const wishlistContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  };

  const wishlistItemStyle = {
    backgroundColor: "#fff",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    width: "90%", // Adjust width as needed
    textAlign: "left",
    position: "relative", // For positioning the remove button
  };

  const removeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "5px 10px",
    backgroundColor: "#ff3860",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={wishlistContainerStyle}>
      {items.map((item, index) => (
        <div key={index} style={wishlistItemStyle}>
          <ImageItem product={item} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span></span>
          <button
            style={removeButtonStyle}
            onClick={() => onRemoveItem(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      {items.length === 0 && <p>Your wishlist is empty.</p>}
    </div>
  );
};

export default WishList;
