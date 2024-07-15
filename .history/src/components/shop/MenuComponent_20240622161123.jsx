// MenuComponent.js
import React from "react";
import styles from "./MenuComponent.module.css";

const MenuComponent = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuItem}>
        Accessories <span className={styles.chevron}>▼</span>
      </div>
      <div className={styles.menuItem}>
        Gaming <span className={styles.chevron}>▼</span>
      </div>
      <div className={styles.menuItem}>
        Notebooks <span className={styles.chevron}>▼</span>
      </div>
      <div className={styles.menuItem}>
        Smartphones <span className={styles.chevron}>▼</span>
      </div>
      <div className={styles.menuItem}>
        Smartwatches <span className={styles.chevron}>▼</span>
      </div>
      <div className={styles.menuItem}>
        TV/Audio <span className={styles.chevron}>▼</span>
      </div>
    </div>
  );
};

export default MenuComponent;
