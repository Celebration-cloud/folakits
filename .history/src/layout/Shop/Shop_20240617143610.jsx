import { useParams } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import ShopComponent from '../../components/shop/ShopComponent'
import styles from './Shop.module.css'
import Footer from '../../components/footer/Footer'
function Shop() {
  const {name} = useParams()
  return (
    <div>
      <Nav/>
      <ShopComponent name={name}/>
      <N
      <Footer/>
    </div>
  )
}

export default Shop
