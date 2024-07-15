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
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </ul>
        <div className={styles.outlet}>Outlet</div>
      </div>
    );
}
export default Categories