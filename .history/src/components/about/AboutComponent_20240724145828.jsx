import styles from './AboutComponent.module.css'
function AboutComponent() {
  // Inline CSS styles

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.heading}>Our product for you</div>
        <p className={styles.text}>
          Discover a world of exceptional products at Folakits. We curate each
          item with care, ensuring quality, style, and functionality. From
          trendy fashion to cutting-edge gadgets, our collection caters to your
          unique needs. Explore and find your perfect match today!
        </p>
      </div>
      <div className={styles.column}>
        <div className={styles.heading}>About FolaKits</div>
        <p className={styles.text}>
          At Folakits, we’re more than just an online store. We’re a community
          of passionate individuals who believe in the power of great products.
          Here’s a glimpse into our story: Our Journey: Founded in 2010,
          Folakits started as a small family business. Over the years, we’ve
          grown into a trusted brand, serving customers worldwide. Our Values:
          Transparency, integrity, and customer satisfaction drive everything we
          do. We’re committed to providing exceptional service and top-notch
          products. Our Mission: To enhance your life through innovative and
          reliable products. Whether it’s fashion, home decor, or tech gadgets,
          we’ve got you covered. Join Us: Become a part of the Folakits family.
          Shop with confidence, knowing that every purchase supports our
          mission.
        </p>
      </div>
    </div>
  );
}

export default AboutComponent;
