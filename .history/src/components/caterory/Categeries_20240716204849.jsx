import More from '../reuseable/more/More'
import styles from './Categories.module.css'
import WishList from '../reuseable/wishList/WishList' 
import CartBadge from '../reuseable/cartBadge/CartBadge' 
import useWidthSize from "../reuseable/width/useWidthSize";
import Input from '../reuseable/input/Input'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import MenuComponent from '../shop/MenuComponent';
function Categories(){
  const { loading, error, userData} = useSelector(state => state.storeKey)
  const {width} = useWidthSize()
  const navigate = useNavigate()
  const shop = "Shop"
    return (
      <div className={styles.categories}>
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBackdrop"
          aria-controls="offcanvasWithBackdrop"
          className={styles.menu}
        >
          <i className="fa-solid fa-bars fa-xl"></i>
          {width > 770 && <span>All Categories</span>}
        </button>
        {width > 880 ? (
          <ul className={styles.ul}>
            <li>
              <NavLink to={`/${shop}`}>Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <More />
            </li>
          </ul>
        ) : (
          <div>
            <Input />
          </div>
        )}

        <div className={styles.outlet}>
          {width > 880 && (
           <Link
            to="/log"
            onClick={() => {
              navigate("/log"), window.location.reload();
            }}
            style={{ color: "black" }}
          >
            <i className="fa-solid fa-right-to-bracket"></i>
          </Link> 
          )}
          
          <Link to="/log/wishlist" style={{ color: "black" }}>
            <WishList />
          </Link>
          <Link to="/cart" style={{ color: "black" }}>
            <CartBadge />
          </Link>
        </div>
        <div
          className={`${styles.scroll} offcanvas offcanvas-start`}
          tabIndex="-1"
          id="offcanvasWithBackdrop"
          aria-labelledby="offcanvasWithBackdropLabel"
          style={{ width: "400px" }}
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <MenuComponent/>
          </div>
        </div>
      </div>
    );
}
export default Categories