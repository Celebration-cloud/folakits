
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink'
import CartComponent from '../../components/cart/CartComponent';
import NewsLetter from '../../components/newsletter/NewsLetter';
import Footer from '../../components/footer/Footer';
import useWidthSize from '../../components/reuseable/width/useWidthSize';
import MobileNav from '../../components/reuseable/mobileNav/MobileNav';
function Cart() {
  const { width } = useWidthSize();
  return (
    
    <div>
      <Nav />
      <BreadLink name="Cart">Cart</BreadLink>
      <CartComponent  />
      <NewsLetter/>
      <Footer/>
      {width < 880 && <MobileNav/>}
    </div>
  );
}

export default Cart
