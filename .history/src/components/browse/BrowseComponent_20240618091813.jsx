import { useEffect, useState } from "react";

function BrowseComponent() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       const interval = setInterval(() => {
         setCount((prevCount) => prevCount + 1);
       }, 2000 / 4000);

       if (count === 6000) {
         clearInterval(interval);
       }

       return () => clearInterval(interval);
     }, [count]);
  // Inline CSS styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "20px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      margin: "10px 0",
    },
    categoriesContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: "100%",
    },
    category: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "30%", // Adjust based on the number of categories per row
      margin: "10px",
    },
    icon: {
      // Placeholder for the icon styles
      width: "50px",
      height: "50px",
      marginBottom: "5px",
    },
    categoryName: {
      fontSize: "18px",
      textAlign: "center",
    },
  };

  const categories = [
    { name: "Notebooks", icon: "NotebookIcon" }, // Replace 'NotebookIcon' with the actual icon component or path
    { name: "Smartphones", icon: "SmartphoneIcon" },
    { name: "Smartwatches", icon: "SmartwatchIcon" },
    { name: "TV/Audio", icon: "TVAudioIcon" },
    { name: "Gaming", icon: "GamingIcon" },
    { name: "Accessories", icon: "AccessoriesIcon" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.title}>Browse <span style={{color: "blue"}}>{count} +</span> products</div>
      <div style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <div key={index} style={styles.category}>
            <div style={styles.icon}>{/* Render the icon here */}</div>
            <div style={styles.categoryName}>{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseComponent;
