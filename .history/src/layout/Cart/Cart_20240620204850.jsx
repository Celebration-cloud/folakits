import { useState } from 'react';
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink'
import CartComponent from '../../components/cart/CartComponent';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 19.99, quantity: 2 },
    { id: 2, name: "Product B", price: 29.99, quantity: 1 },
    // Add more items as needed
  ]);
  return (
    <div>
      <Nav/>
      <BreadLink name="Cart">Cart</BreadLink>
      <CartComponent
    </div>
  )
}

export default Cart
