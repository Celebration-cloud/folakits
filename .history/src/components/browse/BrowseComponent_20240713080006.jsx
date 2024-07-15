import { useEffect, useState } from "react";
import styles from './BrowseComponent.module.css'
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
    <div s={styles.container}>
      <div s={styles.title}>
        Browse <span s={{ color: "blue" }}>{count} +</span> products
      </div>
      <div s={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <div key={index} s={styles.category}>
            <div s={styles.icon}>{category.icon}</div>
            <div s={styles.categoryName}>{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseComponent;
