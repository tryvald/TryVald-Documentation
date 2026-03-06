import styles from './VersionTag.module.css';

export default function VersionTag({ version, type = 'stable' }) {
  // Map type to CSS class
  const typeClass = styles[type] || styles.stable;

  return (
    <span className={`${styles.tag} ${typeClass}`}>
      {version}
    </span>
  );
}