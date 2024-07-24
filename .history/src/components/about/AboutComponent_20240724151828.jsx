/* eslint-disable react/no-unescaped-entities */
import styles from './AboutComponent.module.css'
function AboutComponent() {
  // Inline CSS styles

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.heading}>Our product for you</div>
        <p className="text-gray-600">
          Our Selection for You Explore our curated collection at Folakits where
          fashion meets function. Discover clothing that blends comfort with
          trendsetting designs, jewelry that adds a touch of elegance to any
          outfit, and shoes crafted for both style and durability. At Folakits,
          we’re dedicated to bringing you wardrobe essentials that stand out.
          Update your look today with our exclusive range!
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
