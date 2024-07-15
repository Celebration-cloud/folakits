import React, { useState } from 'react'

function ImageItem() {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product?.onSale ? (
        <>
          <img
            src={product?.img[0]} // Replace with the initial image path
            alt="Initial"
            style={imageStyle}
          />
          {product?.img[1] && (
            <img
              src={product.img[1]} // Replace with the hover image path
              alt="Hover"
              style={hoverImageStyle}
            />
          )}
        </>
      ) : (
        <>
          <img
            src={img1} // Replace with the initial image path
            alt="Initial"
            style={imageStyle}
          />
          <div
            style={{
              ...outStock,
              background: "",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              disabled
              style={{
                backgroundColor: "transparent",
                color: "black",
                border: "2px solid black",
              }}
            >
              Out of Stock
            </button>
          </div>
        </>
      )}

      <div style={iconStyle}>
        {/* Render the heart with ECG line icon here */}
        {product?.onSale && (
          <Tooltip title="Add to Cart" placement="left-end">
            <i
              style={{
                backgroundColor: "white",
                padding: "6px",
                borderRadius: "100%",
              }}
              className="fa-solid fa-cart-shopping"
            ></i>
          </Tooltip>
        )}
        <Tooltip title="View Product" placement="left-end">
          <i
            style={{
              backgroundColor: "white",
              padding: "6px",
              borderRadius: "100%",
            }}
            className="fa-solid fa-link"
          ></i>
        </Tooltip>

        <Tooltip title="Add to Wishlist" placement="left-end">
          <i
            style={{
              backgroundColor: "white",
              padding: "6px",
              borderRadius: "100%",
            }}
            className="fa-regular fa-heart"
          ></i>
          {/* <i class="fa-solid fa-heart"></i> */}
        </Tooltip>

        <Tooltip title="Preview" placement="left-end">
          <i
            style={{
              backgroundColor: "white",
              padding: "6px",
              borderRadius: "100%",
            }}
            className="fa-solid fa-maximize"
          ></i>
        </Tooltip>
      </div>
    </div>
  );
}

export default ImageItem
