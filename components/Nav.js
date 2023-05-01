import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const hideMenu = () => (mobile ? setMobile(!mobile) : null);

  return (
    <nav className={styles.navbar}>
      <div className={styles.flexContainer}>
        <Link href="/" onClick={hideMenu} className={styles.navLinkText}>
          Home
        </Link>
        <ul className={mobile ? styles.mobileMenu : styles.navLinks}>
          <li onClick={hideMenu} className={styles.navLinkItem}>
            <Link href="stats" className={styles.navLinkText}>Stats</Link>
          </li>
          <li onClick={hideMenu} className={styles.navLinkItem}>
            <Link href="goals" className={styles.navLinkText}>Goals</Link>
          </li>
          <li onClick={hideMenu} className={styles.navLinkItem}>
            <Link href="workout" className={styles.navLinkText}>Workout</Link>
          </li>
          <li onClick={hideMenu} className={styles.navLinkItem}>
            <Link href="nutrition" className={styles.navLinkText}>Nutrition</Link>
          </li>
          <li onClick={hideMenu} className={styles.navLinkItem}>
            <Link href="progress" className={styles.navLinkText}>Progress</Link>
          </li>
        </ul>
        <button className={styles.hamburger} onClick={() => setMobile(!mobile)}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
