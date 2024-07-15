/* eslint-disable react/prop-types */
import styles from './ProductItem.module.css'
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
const ProductItem = ({ name, color, size, price, quantity }) => {
  return (
    <>
    <div className={styles.cartItem}>
      <img src="product-image.jpg" alt={name} className={styles.productImage} />
      <div className={styles.productDetails}>
        <p className={styles.productName}>{name}</p>
        <p>Color: {color}</p>
        <p>HD Size: {size}</p>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${(price * quantity).toFixed(2)}</p>
      </div>
      <button className={styles.removeButton}>Remove</button>
    </div>
    <div>
      <div>
        <img src={img1} alt=''/>
      </div>
      <h6></h6>
    </div>
    </>
    
  );
};

export default ProductItem