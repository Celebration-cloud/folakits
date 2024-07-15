import { useParams } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import ShopComponent from '../../components/shop/ShopComponent'
import Footer from '../../components/footer/Footer'
import NewsLetter from '../../components/newsletter/NewsLetter'
import useWidthSize from '../../components/reuseable/width/useWidthSize'
function Shop() {
  const {name} = useParams()
  const { width } = useWidthSize();
  return (
    <div>
      <Nav/>
      <ShopComponent name={name}/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Shop
