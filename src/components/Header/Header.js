import Link from "next/link";
import styles from "./Header.module.css";

const Header = props => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
            <img src="/logo.svg" alt="TripForU" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonText}>
            <img src='/web-check-in.svg' />
            <span>Web Check-In</span>
        </div>
        <div className={styles.buttonText}>
            <img src='/web-check-in.svg' />
            <span>24x7 Helpline</span></div>
        <div className={styles.buttonText}>
        <img src='/person.svg' />
            <span>Login/Register</span>
        </div>
      </div>
    </header>
  )
}

export default Header