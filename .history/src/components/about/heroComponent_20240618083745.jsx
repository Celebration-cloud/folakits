import img1 from '/public/dark-blue-abstract-background-minimalist-design-vector.jpg'
function HeroComponent() {
  // Inline CSS styles
  const heroStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "500px", // Adjust height as needed
      color: "#fff",// Gradient background
      backgroundImage: 'url(`/public/dark-blue-abstract-background-minimalist-design-vector.jpg`)',
      textAlign: "center",
      padding: "20px",
    },
    mainText: {
      fontSize: "150px", // Adjust font size as needed
      fontWeight: "bolder",
      margin: "0 0 20px 0", // Adjust spacing as needed
    },
    subText: {
      fontSize: "30px", // Adjust font size as needed
      margin: "0",
      fontWeight: 'bolder',
    },
  };

  return (
    <div style={heroStyles.container}>
      <div style={heroStyles.mainText}>Be</div>
      <p style={heroStyles.subText}>
        Folakits is the WordPress theme that <br/> makes building website much easier.
      </p>
    </div>
  );
}

export default HeroComponent;
