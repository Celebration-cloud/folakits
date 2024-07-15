import More from '../reuseable/more/More'
import styles from './Categories.module.css'
import WishList from '../reuseable/wishList/WishList' 
import CartBadge from '../reuseable/cartBadge/CartBadge' 
import useWidthSize from "../reuseable/width/useWidthSize";
import Input from '../reuseable/input/Input'
function Categories(){
  const {width} = useWidthSize()
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
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
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
          <i className="fa-solid fa-right-to-bracket"></i>
          <WishList />
          <CartBadge />
        </div>
        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasWithBackdrop"
          aria-labelledby="offcanvasWithBackdropLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">
              Offcanvas with backdrop
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <p>.....</p>
          </div>
        </div>
      </div>
    );
}
export default Categories