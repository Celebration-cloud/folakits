import More from '../reuseable/more/More'
import styles from './Categories.module.css'
import WishList from '../reuseable/wishList/WishList' 
import CartBadge from '../reuseable/cartBadge/CartBadge' 
import useWidthSize from "../reuseable/width/useWidthSize";

function Categories(){
  const {width} = 
  const {width} = useWidthSize()
    return (
      <div className={styles.categories}>
        <div className={styles.menu}>
          <i className="fa-solid fa-bars fa-xl"></i>
          {width > 770 && <span>All Categories</span> }
        </div>
        <ul className={styles.ul}>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <More />
          </li>
        </ul>
        <div className={styles.outlet}>
            <i className="fa-solid fa-right-to-bracket"></i>
            <WishList/>
            <CartBadge />
        </div>
      </div>
    );
}
export default Categories