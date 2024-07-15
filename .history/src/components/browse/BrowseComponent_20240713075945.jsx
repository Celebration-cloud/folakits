import { useEffect, useState } from "react";
import styles from ''
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
  ];

  return (
    <div style={styles.container}>
      <div style={styles.title}>
        Browse <span style={{ color: "blue" }}>{count} +</span> products
      </div>
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
