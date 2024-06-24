// components/NavbarItem.js
import Link from 'next/link';
import styles from '../src/styles/Navbar.module.css';

const NavbarItem = ({ href, children }) => {
  return (
    <li className={styles.navItem}>
      <Link href={href} legacyBehavior>
        <a className={styles.navLink}>{children}</a>
      </Link>
    </li>
  );
};

export default NavbarItem;
