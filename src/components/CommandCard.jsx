import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './CommandCard.module.css';

export default function CommandCard({ command }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.card} id={command.name}>
      <div className={styles.header} onClick={() => setExpanded(!expanded)}>
        <span className={styles.name}>/{command.name}</span>
        <span className={styles.shortDesc}>{command.shortDesc}</span>
        <span className={styles.expandIcon}>{expanded ? '−' : '+'}</span>
      </div>
      {expanded && (
        <div className={styles.details}>
          <p>{command.description}</p>
          <div className={styles.usage}>
            <strong>Usage:</strong> <code>{command.usage}</code>
          </div>
          <div className={styles.example}>
            <strong>Example:</strong>
            <SyntaxHighlighter language="bash" style={vscDarkPlus}>
              {command.example}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
}