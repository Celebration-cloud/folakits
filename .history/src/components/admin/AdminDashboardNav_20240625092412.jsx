// AdminDashboardNav.js
import React, { useState } from "react";
import styles from "./AdminDashboardNav.module.css";

const AdminDashboardNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <ul className={`${styles.navList} ${isOpen ? styles.showMenu : ""}`}>
        <li className={styles.navItem}>Dashboard</li>
        <li className={styles.navItem}>Orders</li>
        <li className={styles.navItem}>Products</li>
        <li className={styles.navItem}>Customers</li>
        <li className={styles.navItem}>Reports</li>
        <li className={styles.navItem}>Settings</li>
      </ul>
    </nav>
  );
};

export default AdminDashboardNav;
