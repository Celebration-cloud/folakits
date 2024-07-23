import { useParams } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import ShopComponent from '../../components/shop/ShopComponent'
import Footer from '../../components/footer/Footer'
import NewsLetter from '../../components/newsletter/NewsLetter'
import useWidthSize from '../../components/reuseable/width/useWidthSize'
import MobileNav from '../../components/reuseable/mobileNav/MobileNav'
function Shop({nameRef}) {
  const {name} = useParams()
  nameRef.current
  const { width } = useWidthSize();
  return (
    <div>
      <Nav/>
      <ShopComponent/>
      <NewsLetter/>
      <Footer/>
      {width < 880 && <MobileNav/>}
    </div>
  )
}

export default Shop
