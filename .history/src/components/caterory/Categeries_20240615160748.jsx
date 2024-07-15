import More from '../reuseable/more/More'
import styles from './Categories.module.css'
function Categories(){
    return (
      <div className={styles.categories}>
        <div className={styles.menu}>
          <i className="fa-solid fa-bars fa-xl"></i>
          <span>All Categories</span>
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
          <div>
            <i className="fa-solid fa-right-to-bracket"></i>
          </div>
          <div>
            <WishList/>
          </div>
          <div className={styles.cart}>
            <CartBadge />
          </div>
        </div>
      </div>
    );
}
export default Categories