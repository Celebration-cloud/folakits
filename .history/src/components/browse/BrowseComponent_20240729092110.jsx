import { useEffect, useState } from "react";
import styles from './BrowseComponent.module.css'
function BrowseComponent() {
     const [count, setCount] = useState(0);
     const navigate = useNavigate
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
    { name: "Shoes", icon: <i className="fa-solid fa-shoe-prints"></i> },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Browse <span style={{ color: "blue" }}>{count} +</span> products
      </div>
      <div className={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/${"Men's clothes"}`);
              dispatch(getCategoryItems("Men's clothes"));
            }}
            className={styles.category}
          >
            <div className={styles.icon}>{category.icon}</div>
            <div className={styles.categoryName}>{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseComponent;
