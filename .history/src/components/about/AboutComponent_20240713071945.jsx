import styles from ''
function AboutComponent() {
  // Inline CSS styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "50px",
      backgroundColor: "#F5F5F5",
    },
    column: {
      width: "45%", // Adjust width as needed
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    text: {
      fontSize: "16px",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <div style={styles.heading}>Our product for you</div>
        <p style={styles.text}>
          Vehicula quisque sed senectus enim nisl torquent velit viverra cubilia
          ligula in ut euismod conubia curabitur porta consequat potenti lorem
          ad sed taciti lacinia pulvinar suscipit diam justo eros inceptos dolor
          massa litora aliquet justo ultrices aliquam mi habitant aenean orci
          euismod justo aliquam fringilla molestie porttitor consequat phasellus
          sollicitudin.
        </p>
      </div>
      <div style={styles.column}>
        <div style={styles.heading}>About FolaKits</div>
        <p style={styles.text}>
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
