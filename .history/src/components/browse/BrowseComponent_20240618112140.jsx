import { useEffect, useState } from "react";

function BrowseComponent() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       const interval = setInterval(() => {
         setCount((prevCount) => prevCount + 3);
       }, 3000 / 6000);

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
      padding: "50px 10px 50px 10px",
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
      backgroundColor: "#F5F5F5",
      justifyContent: 'center',
      alignItems: "center",
      width: "30%", // Adjust based on the number of categories per row
      margin: "10px",
      gap: "30px",
      padding: "20px",
    },
    icon: {
      // Placeholder for the icon styles
      height: "100%",
      marginBottom: "5px",
    },
    categoryName: {
      fontSize: "18px",
      textAlign: "center",
    },
  };

  const categories = [
    {
      name: "Men Clothes",
      icon: <i className="fa-solid fa-person fa-2xl"></i>,
    }, // Replace 'NotebookIcon' with the actual icon component or path
    {
      name: "Women Clothes",
      icon: <i className="fa-solid fa-person-dress fa-2xl"></i>,
    },
    { name: "Jewelry", icon: <i className="fa-solid fa-ring fa-2xl"></i> },
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
            <div style={styles.icon}>{category.icon}</div>
            <div style={styles.categoryName}>{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseComponent;
