import Link from "next/link";
import styles from "./main-header.module.css"; // Import the CSS module

export default function MainHeader() {
  return (
    <div className={styles.header}>
      {/* Replace with an actual logo or logo image */}
      <Link href="/" className={styles.navLink}>
        <div className={styles.logo}>MyLogo</div>
      </Link>
      <ul className={styles.navList}>
        {/* <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li> */}
        <li className={styles.navItem}>
          <Link href="/news" className={styles.navLink}>
            News
          </Link>
        </li>
      </ul>
    </div>
  );
}
