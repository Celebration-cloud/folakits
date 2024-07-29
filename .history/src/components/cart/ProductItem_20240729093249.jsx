/* eslint-disable react/prop-types */
import styles from './ProductItem.module.css'
import Counter from '../reuseable/counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { userCartList } from '../../store/actions/userActions';
import { getItems } from '../../store/actions/quoteActions';
import { useNavigate } from 'react-router-dom';
const ProductItem = ({ cart}) => {
   const { userData } = useSelector((state) => state.user);
   const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch()
  const navigate = useNavigate()
   const updateQuantity = (itemId, newQuantity) => {
     // Find the item in the cart based on itemId
     const updatedCart = cart.map((item) =>
       item.id === itemId ? { ...item, amount: newQuantity } : item
     );
     // Call the callback function to update the cart state
    dispatch(userCartList(updatedCart, userData[0].user_name));

   };
   const quant = cart.map((item) => {
    return item.quantity
   })
   console.log(quant, cart)
function handleRemoveItem(itemId) {
  // Find the item in the cart based on itemId
 const removedItem = cart.filter((item) => item.id !== itemId);

  // Remove the item from the cart (update your cart state accordingly)
  // ...
  dispatch(userCartList(removedItem, userData[0].user_name));

  // Now 'removedItem' contains the removed item data

}
const outStock = products.findIndex(item => {
  return item.quantity < 1;
})
console.log(outStock)
  return (
    <>
      {cart?.map(
        (item, idx) =>
          item.quantity > 0 && (
            <div key={idx} className={styles.item}>
              <div className={styles.img}>
                <img
                  src={item.img[0]}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div>
                <h6 style={{ margin: "0px" }}>{item.product}</h6>
              </div>
              <span className={styles.price}>
                &#x20A6;{item.price.toFixed(2)}
              </span>
              <Counter
                amount={item.amount}
                onQuantityChange={(newQuantity) =>
                  updateQuantity(item.id, newQuantity)
                }
              />
              <span className={styles.price}>
                &#x20A6;{(item.price * item.amount).toFixed(2)}
              </span>
              <i
                onClick={() => handleRemoveItem(item.id)}
                className={`${styles.remove} fa-solid fa-xmark fa-1xl`}
              ></i>
            </div>
          )
      )}
      {cart?.length < 1 && (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
          <img
            src="https://placehold.co/400?text=🛒&bg=primary&text_color=primary-foreground"
            alt="empty-cart"
            className="mb-8 rounded-lg shadow-lg"
          />
          <p className="text-primary-foreground text-lg font-semibold">
            Your cart is empty
          </p>
          <p className="text-secondary-foreground mt-4">
            Start shopping to add items to your cart!
          </p>
          <button
            onClick={() => {
              navigate(`/Shop`), dispatch(getItems());
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Shop Now
          </button>
        </div>
      )}
      {!cart && (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
          <img
            src="https://placehold.co/400?text=🛒&bg=primary&text_color=primary-foreground"
            alt="empty-cart"
            className="mb-8 rounded-lg shadow-lg"
          />
          <p className="text-primary-foreground text-lg font-semibold">
            Your cart is empty
          </p>
          <p className="text-secondary-foreground mt-4">
            Start shopping to add items to your cart!
          </p>
          <button
            onClick={() => {
              navigate(`/Shop`), dispatch(getItems());
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Shop Now
          </button>
        </div>
      )}
    </>
  );
};

export default ProductItem