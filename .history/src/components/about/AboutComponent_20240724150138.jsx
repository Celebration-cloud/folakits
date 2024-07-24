import styles from './AboutComponent.module.css'
function AboutComponent() {
  // Inline CSS styles

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.heading}>Our product for you</div>
        <p className="text-gray-600">
          Discover a world of exceptional products at Folakits. We curate each
          item with care, ensuring quality, style, and functionality. From
          trendy fashion to cutting-edge gadgets, our collection caters to your
          unique needs. Explore and find your perfect match today!
        </p>
      </div>
      <div className={styles.column}>
        <div className={styles.heading}>About FolaKits</div>
        <p className="text-gray-600">
          At Folakits, we're more than just an online store. We're a community
          of passionate individuals who believe in the power of great products.
          Here's a glimpse into our story:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Founded in 2010, Folakits started as a small family business.</li>
          <li>
            Our Values: Transparency, integrity, and customer satisfaction.
          </li>
          <li>
            Our Mission: To enhance your life through innovative and reliable
            products.
          </li>
          <li>Join Us: Become a part of the Folakits family.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutComponent;
