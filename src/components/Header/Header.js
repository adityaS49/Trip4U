import styles from './Header.module.css'; 

const Header = (props)=> {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src="/logo.svg" alt="TripForU" className={styles.headerLogo} />
      </div>
      <div className={styles.headerRight}>
        <ul className={styles.headerNav}>
          <li className={styles.headerNavItem}>
            <a href="#" className={styles.headerNavLink}>
              Flights
            </a>
          </li>
          <li className={styles.headerNavItem}>
            <a href="#" className={styles.headerNavLink}>
              Hotels
            </a>
          </li>
          <li className={styles.headerNavItem}>
            <a href="#" className={styles.headerNavLink}>More</a>
          </li>
        </ul>
        <div className={styles.headerUser}>
          <span className={styles.headerUserName}>Profile</span>
          <span className={styles.headerUserIcon}>{/* User icon */}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
