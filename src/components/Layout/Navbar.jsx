import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import styles from './Navbar.module.css';

export default function Navbar({ toggleSidebar, toggleCollapse, collapsed }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <button className={styles.menuButton} onClick={toggleSidebar}>
          ☰
        </button>
        <button className={styles.collapseButton} onClick={toggleCollapse}>
          {collapsed ? '→' : '←'}
        </button>
        <Link to="/" className={styles.logo}>
          <img src="/logo.svg" alt="TryVald" height="32" />
          <span>TryVald Docs</span>
        </Link>
      </div>
      <div className={styles.navCenter}>
        <SearchBar />
      </div>
      <div className={styles.navRight}>
        <Link to="/changelog" className={styles.navLink}>Changelog</Link>
        <Link to="/terms" className={styles.navLink}>Terms</Link>
        <Link to="/privacy" className={styles.navLink}>Privacy</Link>
      </div>
    </nav>
  );
}