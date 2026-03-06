import { useState, useEffect } from 'react';
import commandsData from '../data/commands';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    const allCommands = Object.values(commandsData).flat();
    const filtered = allCommands.filter(cmd =>
      cmd.name.toLowerCase().includes(query.toLowerCase()) ||
      cmd.shortDesc.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.slice(0, 8));
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search commands..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowResults(true);
        }}
        onBlur={() => setTimeout(() => setShowResults(false), 200)}
        onFocus={() => setShowResults(true)}
        className={styles.searchInput}
      />
      {showResults && results.length > 0 && (
        <div className={styles.results}>
          {results.map(cmd => (
            <a
              key={cmd.name}
              href={`#${cmd.name}`}
              className={styles.resultItem}
              onClick={() => setShowResults(false)}
            >
              <span className={styles.resultName}>/{cmd.name}</span>
              <span className={styles.resultDesc}>{cmd.shortDesc}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}