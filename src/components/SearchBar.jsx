import { useState, useEffect, useRef } from 'react';
import commandsData from '../data/commands';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    // Cleanup: mark component as unmounted
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isMounted.current) return;

    if (query.length < 2) {
      setResults([]);
      return;
    }

    try {
      // Safely flatten commands
      const data = commandsData || {};
      const allCommands = Object.values(data).flat().filter(Boolean);
      const filtered = allCommands.filter(cmd =>
        cmd?.name?.toLowerCase().includes(query.toLowerCase()) ||
        cmd?.shortDesc?.toLowerCase().includes(query.toLowerCase())
      );

      if (isMounted.current) {
        setResults(filtered.slice(0, 8));
      }
    } catch (error) {
      console.error('Search error:', error);
      if (isMounted.current) setResults([]);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowResults(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (isMounted.current) setShowResults(false);
    }, 200);
  };

  const handleFocus = () => {
    if (query.length >= 2 && results.length > 0) {
      setShowResults(true);
    }
  };

  const handleResultClick = () => {
    setShowResults(false);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search commands..."
        value={query}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className={styles.searchInput}
      />
      {showResults && results.length > 0 && (
        <div className={styles.results}>
          {results.map(cmd => (
            <a
              key={cmd.name}
              href={`#${cmd.name}`}
              className={styles.resultItem}
              onClick={handleResultClick}
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