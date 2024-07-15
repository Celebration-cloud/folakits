import styles from './Categories.module.css'
function Categories(){
    return (
      <div className={styles.categories}>
        <div className={mes}></div>
        <ul>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div></div>
      </div>
    );
}
export default Categories