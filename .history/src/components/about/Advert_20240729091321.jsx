
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
      backgroundImage: 'url("/public/wp5204110.webp")', // Replace with your image path
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
      color: white
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Discover Style & Elegance</h1>
      <p style={styles.text}>
        Your One-Stop Shop for Fashion Essentials! At Folakits, we bring you an
        exquisite collection of clothing, jewelry, and footwear crafted to
        perfection. Elevate your wardrobe with our premium selections today!
      </p>
    </div>
  );
}

export default Advert;
