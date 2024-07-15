import styles from './Categories.module.css'
function Categories(){
    return (
      <div className={styles.categories}>
        <div className={styles.menu}>
          <i class="fa-thin fa-bars"></i>
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