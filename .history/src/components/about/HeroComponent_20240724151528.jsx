// import img1 from '/public/dark-blue-abstract-background-minimalist-design-vector.jpg'
import styles from './HeroComponent.module.css'
function HeroComponent() {
  // Inline CSS styles

  return (
    <div className={styles.container}>
      <div className={styles.mainText}>
        Unleash Style with Folakits – Your Ultimate Fashion Destination
      </div>
      <p className={styles.subText}>
        Discover elegance at your fingertips with Folakits’ exclusive range of
        clothing, jewelry, and footwear. Transform your wardrobe with our trendy
        collections designed to empower your personal style. Shop now and step
        into a world where fashion meets convenience!
      </p>
    </div>
  );
}

export default HeroComponent;
