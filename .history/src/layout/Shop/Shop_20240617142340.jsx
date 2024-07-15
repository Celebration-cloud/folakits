import { useParams } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import ShopComponent from '../../components/shop/ShopComponent'
import styles from './Shop.module.css'
function Shop() {
  const {name} = useParams()
  console.log()
  return (
    <div>
      <Nav/>
      <ShopComponent/>
    </div>
  )
}

export default Shop
