// components/Navbar.js
import styles from '../src/styles/Navbar.module.css';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/add-car">Cadastrar</NavbarItem>
        <NavbarItem href="/cars">Lista de Carros</NavbarItem>
      </ul>
    </nav>
  );
};

export default Navbar;
