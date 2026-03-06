import changelog from '../data/changelog';
import styles from './Changelog.module.css';

export default function Changelog() {
  return (
    <div className={styles.changelog}>
      <h1>Changelog</h1>
      {changelog.map(entry => (
        <div key={entry.version} className={styles.entry}>
          <h2>v{entry.version} <span className={styles.date}>{entry.date}</span></h2>
          <ul>
            {entry.changes.map((change, i) => (
              <li key={i}>{change}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}