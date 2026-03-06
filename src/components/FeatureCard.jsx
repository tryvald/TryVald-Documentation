import styles from './FeatureCard.module.css';

export default function FeatureCard({ feature }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{feature.icon}</div>
      <h3 className={styles.title}>{feature.title}</h3>
      <p className={styles.description}>{feature.description}</p>
    </div>
  );
}