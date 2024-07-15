
function Advert() {
  // Inline CSS styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%", // Adjust to fit the content or desired view height
      color: "#333", // Dark text color for contrast
      backgroundImage: 'url("/public/")', // Replace with your image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      textAlign: "center",
      padding: "50px", // Adjust padding as needed
    },
    heading: {
      fontSize: "48px", // Large font size for the heading
      fontWeight: "bold",
      marginBottom: "20px", // Space below the heading
    },
    text: {
      fontSize: "24px", // Smaller font size for the subtext
      maxWidth: "600px", // Max width for better readability
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our builder is top quality</h1>
      <p style={styles.text}>
        Our builder is top quality theme editor that helps you to make eCommerce
        website.
      </p>
    </div>
  );
}

export default Advert;
