import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import commandsData from '../../data/commands';
import styles from './Sidebar.module.css';

export default function Sidebar({ isOpen, close }) {
  const location = useLocation();

  useEffect(() => {
    close(); // close sidebar on route change (mobile)
  }, [location, close]);

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebarHeader}>
        <h3>Commands</h3>
        <button className={styles.closeButton} onClick={close}>×</button>
      </div>
      <div className={styles.sidebarContent}>
        {Object.entries(commandsData).map(([category, commands]) => (
          <div key={category} className={styles.category}>
            <div className={styles.categoryTitle}>{category}</div>
            {commands.map(cmd => (
              <a
                key={cmd.name}
                href={`#${cmd.name}`}
                className={styles.commandLink}
                onClick={close}
              >
                <span className={styles.commandName}>/{cmd.name}</span>
                <span className={styles.commandDesc}>{cmd.shortDesc}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}