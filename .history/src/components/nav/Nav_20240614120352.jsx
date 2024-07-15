import Categories from '../caterory/Categeries';
import CartBadge from '../reuseable/cartBadge/CartBadge'
import Input from '../reuseable/input/Input'
import WishList from '../reuseable/wishList/WishList';
import styles from './Nav.module.css'
import logo from '/public/OIG3.jpeg'
function Nav() {
  return (
    <>
    <Categories/>
    </>
    <nav className={styles.nav}>
      <div className={styles.logoSection}>
        <img className={styles.logo} src={logo} alt="" width={50} height={50} />
        <span>
          <strong>
            <h3>FolaKits</h3>
          </strong>
        </span>
      </div>
      <div className={styles.searchCart}>
        <div className={styles.input}>
          <Input />
        </div>
        <div className={styles.support}>
          <i className="fa-solid fa-headset"></i>
          <span>+61 (0) 3 8376 6284</span>
        </div>
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
    </nav>
  );
}

export default Nav
