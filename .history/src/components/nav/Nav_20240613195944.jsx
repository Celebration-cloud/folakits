import CartBadge from '../cartBadge/CartBadge'
import Input from '../input/Input'
import styles from './Nav.module.css'
import logo from '/public/OIG3.jpeg'
function Nav() {
  return (
    <nav className={styles.nav}>
        <div>
          <img className={styles.logo} src={logo} alt="" width={100} height={100} />
          <span>Fo</span>
        </div>
        <div className={styles.searchCart}>
          <div className={styles.input}>
            <Input />
          </div>
          <div className={styles.support}>
            <i className="fa-solid fa-headset"></i>
            <span>+61 (0) 3 8376 6284</span>
          </div>
          <div className={styles.cart}>
            <CartBadge />
            <span>$0.00</span>
          </div>
      </div>
    </nav>
  );
}

export default Nav
