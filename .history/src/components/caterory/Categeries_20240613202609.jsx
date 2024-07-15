import styles from './Categories.module.css'
function Categories(){
    return (
      <div className={styles.categories}>
        <div className={styles.menu}>
          <i className="fa-solid fa-bars fa-xl"></i>
          <span
        </div>
        <ul className={styles.ul}>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>Outlet</div>
      </div>
    );
}
export default Categories