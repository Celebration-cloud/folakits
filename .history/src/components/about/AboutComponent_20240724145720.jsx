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
          trendy fashion to cutting-edge , our collection caters to your
          unique needs. Explore and find your perfect match today!
        </p>
      </div>
      <div className={styles.column}>
        <div className={styles.heading}>About FolaKits</div>
        <p className={styles.text}>
          Rhoncus fringilla quisque dictumst eget rhoncus ullamcorper tempus
          nunc scelerisque vehicula nunc nisl eleifend libero ligula primis
          turpis aliquet eget condimentum consectetur vitae aliquet pulvinar at
          eros consequat eget sit mauris sociosqu aliquam senectus adipiscing
          primis ad facilisis bibendum aptent eget faucibus himenaeos viverra
          enim.
        </p>
      </div>
    </div>
  );
}

export default AboutComponent;
