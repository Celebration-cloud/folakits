import { useState } from 'react';
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink'
import CartComponent from '../../components/cart/CartComponent';
import img1 from '/p'
function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "BeFlashdrive",
      image: "path_to_beflashdrive_image.jpg",
      price: 7.3,
      quantity: 2,
    },
    {
      id: 2,
      name: "Another Product",
      image: "path_to_another_product_image.jpg",
      price: 29.99,
      quantity: 1,
    },
    // Add more items as needed
  ]);
  return (
    <div>
      <Nav />
      <BreadLink name="Cart">Cart</BreadLink>
      <CartComponent cartItems={cartItems} />
    </div>
  );
}

export default Cart
