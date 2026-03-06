import privacyContent from '../data/privacy';
import styles from './Privacy.module.css';

export default function Privacy() {
  return (
    <div className={styles.privacy}>
      <h1>Privacy Policy</h1>
      <p className={styles.lastUpdated}>Last updated: {privacyContent.lastUpdated}</p>
      
      {privacyContent.sections.map((section, index) => (
        <section key={index} className={styles.section}>
          <h2>{section.title}</h2>
          <div className={styles.content}>
            {section.content.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}