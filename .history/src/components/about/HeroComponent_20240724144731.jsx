// import img1 from '/public/dark-blue-abstract-background-minimalist-design-vector.jpg'
import styles from './HeroComponent.module.css'
function HeroComponent() {
  // Inline CSS styles

  return (
    <div className={styles.container}>
      <div className={styles.mainText}>Folakits</div>
      <p className={styles.subText}>
        Folakits is the WordPress theme that <br/> makes building website much easier.
      </p>
    </div>
  );
}

export default HeroComponent;
