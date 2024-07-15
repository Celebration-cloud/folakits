import styles from './AboutComponent.module.css'
function AboutComponent() {
  // Inline CSS styles

  return (
    <div cl={styles.container}>
      <div cl={styles.column}>
        <div cl={styles.heading}>Our product for you</div>
        <p cl={styles.text}>
          Vehicula quisque sed senectus enim nisl torquent velit viverra cubilia
          ligula in ut euismod conubia curabitur porta consequat potenti lorem
          ad sed taciti lacinia pulvinar suscipit diam justo eros inceptos dolor
          massa litora aliquet justo ultrices aliquam mi habitant aenean orci
          euismod justo aliquam fringilla molestie porttitor consequat phasellus
          sollicitudin.
        </p>
      </div>
      <div cl={styles.column}>
        <div cl={styles.heading}>About FolaKits</div>
        <p cl={styles.text}>
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
