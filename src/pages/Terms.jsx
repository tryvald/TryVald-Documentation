import tosContent from '../data/tos';
import styles from './Terms.module.css';

export default function Terms() {
  return (
    <div className={styles.terms}>
      <h1>Terms of Service</h1>
      <p className={styles.lastUpdated}>Last updated: {tosContent.lastUpdated}</p>
      
      {tosContent.sections.map((section, index) => (
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