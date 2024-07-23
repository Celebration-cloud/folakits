/* eslint-disable react/prop-types */
import CarouselImage from "./CarouselImage";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Details.module.css";
import Counter from "../reuseable/counter/Counter";
import Button from "../reuseable/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItemDetails } from "../../store/actions/quoteActions";
import { userCartList, userWishlist } from "../../store/actions/userActions";
import { toaster } from "evergreen-ui";
function Content({ preview }) {
  const { session } = useSelector((state) => state.user);
  const { userData } = useSelector((state) => state.user);
  const { productDetails } = useSelector((state) => state.product);
  const cartListRef = useRef([]);
  cartListRef.current = userData ? userData[0]?.cart : [];
  const wishlistRef = useRef();
  wishlistRef.current = userData ? userData[0]?.wishlist : [];
  const countRef = useRef()
  const existRef = useRef()
  const [exist] = useState(wishlistRef.current?.find((item) => item.id === productDetails.id) !==
    undefined)
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleWish(item) {

    console.log(item);
    if (session) {
      if (userData) {
        // Check if the item is already in the wishlist
        const existingIndex = wishlistRef.current?.findIndex(
          (existingItem) => existingItem.id === item.id
        );

        if (existingIndex !== -1) {
          // Item is already in the wishlist, remove it
          wishlistRef.current.splice(existingIndex, 1);
          dispatch(userWishlist(wishlistRef.current, userData[0].user_name));
          if (preview) {
            dispatch(getItemDetails(preview));
          }
          toaster.success("Removed from wishlist");
        } else {
          // Item is not in the wishlist, add it
          wishlistRef.current = [...wishlistRef.current, item];
          dispatch(userWishlist(wishlistRef.current, userData[0].user_name));
          if (preview) {
            dispatch(getItemDetails(preview));
          }
          toaster.success("Added to wishlist");
        }
      }
    } else {
      navigate("/log");
    }
  }

  const fet = useback(() => {
    if (preview) {
      dispatch(getItemDetails(preview));
    }
  }, [dispatch, preview]);
  useEffect(() => {
    
      fet();
    
  }, [fet]);
  console.log(productDetails, name);
  console.log(wishlistRef.current)
  const updateQuantity = (newQuantity) => {
    // Find the item in the cart based on itemId
    countRef.current = newQuantity
    console.log(newQuantity)
  };
  function handleCart(item) {
    if (session) {
      if (userData) {
        // Check if the item is already in the wishlist
        const existingIndex = cartListRef.current?.findIndex(
          (existingItem) => existingItem.id === item.id
        );

        if (existingIndex !== -1) {
          // Item is already in the wishlist, remove it
          toaster.warning("Item is already in the cart");
        } else {
          // Item is not in the wishlist, add it
          cartListRef.current = [
            ...cartListRef.current,
            { ...item, amount: 1 },
          ];
          dispatch(userCartList(cartListRef.current, userData[0].user_name));
          toaster.success("Added to cart");
        }
      }
    } else {
      navigate("/log");
    }
  }
  existRef.current =
    wishlistRef.current?.find((item) => item.id === productDetails.id) !==
    undefined;
  console.log(existRef.current);
  return (
    <div className={styles.content}>
      {productDetails?.map((item) => (
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
                <Counter onQuantityChange={(count) => updateQuantity(count)}/>
              </div>
              <div>
                <Button name="Add to Cart" />
              </div>
            </section>
            <section className={styles.wishing}>
              <span>Open sizes guide</span>
              <span className={styles.wish}>
                {exist ? (
                  <i
                    onClick={() => handleWish(item)}
                    className="fa-solid fa-heart fa-xl"
                  ></i>
                ) : (
                  <i
                    onClick={() => handleWish(item)}
                    className="fa-regular fa-heart fa-xl"
                  ></i>
                )}
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
