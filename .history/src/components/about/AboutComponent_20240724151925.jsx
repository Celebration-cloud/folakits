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
          Discovering Folakits Welcome to Folakits – not just another e-commerce
          platform but a vibrant community driven by a passion for fashion and
          quality living. Since our inception in 2010 as a small family venture,
          we’ve grown into a trusted name known for our commitment to
          authenticity and customer satisfaction. Our mission: To infuse your
          everyday with pieces that are as unique as you are.
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Established in 2010 with family roots.</li>
          <li>Commitment to genuine quality and customer delight.</li>
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
