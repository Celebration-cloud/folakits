import { useState } from 'react';
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink'
import CartComponent from '../../components/cart/CartComponent';
import img1 from '/public/gown.png'
import NewsLetter from '../../components/newsletter/NewsLetter';
import Footer from '../../components/footer/Footer';
import useWidthSize from '../../components/reuseable/width/useWidthSize';
function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "BeFlashdrive",
      image: img1,
      price: 7.3,
      quantity: 2,
    },
    {
      id: 2,
      name: "Another Product",
      image: img1,
      price: 29.99,
      quantity: 1,
    },
    // Add more items as needed
  ]);
  const { width } = useWidthSize();
  return (
    
    <div>
      <Nav />
      <BreadLink name="Cart">Cart</BreadLink>
      <CartComponent cartItems={cartItems} />
      <NewsLetter/>
      <Footer/>
      {width <}
    </div>
  );
}

export default Cart
