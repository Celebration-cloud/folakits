import Nav from '../../components/nav/Nav'
import Crumbs from '../../components/reuseable/breadcrumbs/Crumbs'
import BreadLink from '../../components/reuseable/breadlink/BreadLink'

function WishList() {
  return (
    <div>
      <Nav/>
      <BreadLink name="Wishlist">Wishlist</BreadLink>
    </div>
  )
}

export default WishList