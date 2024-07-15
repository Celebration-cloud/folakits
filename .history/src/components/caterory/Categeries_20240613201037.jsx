import styles from './Categories.module.css'
function Categories(){
    return (
      <div className={styles.categories}>
        <div className={styles.menu}></div>
        <ul>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>Outle</div>
      </div>
    );
}
export default Categories