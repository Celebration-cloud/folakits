// AdminDashboardNav.js
import styles from "./AdminDashboardNav.module.css";

const AdminDashboardNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
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
