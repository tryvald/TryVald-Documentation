import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logoSection}>
            <img src="/logo.svg" alt="TryVald" className={styles.logo} />
            <span className={styles.tagline}>_ &gt; all-in-one discord bot</span>
          </div>
          <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
            ↑
          </button>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4>Product</h4>
            <Link to="/#features">Features</Link>
            <Link to="/#commands">Commands</Link>
            <a href="https://discord.com/oauth2/authorize?client_id=1476990664204882062&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener">Invite Bot</a>
          </div>
          <div className={styles.linkGroup}>
            <h4>Resources</h4>
            <Link to="/changelog">Changelog</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4>Connect</h4>
            <a href="https://github.com/DAEKK0" target="_blank" rel="noopener">GitHub</a>
            <a href="https://discord.gg/xCyKnu4ysa" target="_blank" rel="noopener">Discord</a>
            <a href="mailto:support@tryvald.com">Email</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.ascii}>[ tryvald ]_</div>
          <div className={styles.copyright}>© {currentYear} TryVald. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}