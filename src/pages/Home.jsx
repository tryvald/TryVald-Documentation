import { useEffect } from 'react';
import commands from '../data/commands';
import CommandCard from '../components/CommandCard';
import styles from './Home.module.css';

export default function Home() {
  // Smooth scroll for hash links
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>TryVald</h1>
        <p className={styles.tagline}>Your all‑in‑one Discord bot</p>
        <div className={styles.heroButtons}>
          <a href="#getting-started" className={styles.primaryButton}>Get Started</a>
          <a href="https://discord.com/oauth2/authorize?client_id=1476990664204882062&permissions=8&integration_type=0&scope=bot+applications.commands" className={styles.secondaryButton} target="_blank" rel="noopener">Invite Bot</a>
        </div>
      </section>

      <section id="getting-started" className={styles.section}>
        <h2>Getting Started</h2>
        <p>Add TryVald to your server with the link above. The bot requires <strong>Administrator</strong> permissions to function fully. If you can't grant that, ensure the bot's role has necessary permissions (Manage Roles, Manage Channels, etc.).</p>
        {/* more instructions */}
      </section>

      {Object.entries(commands).map(([category, cmds]) => (
        <section key={category} id={category.toLowerCase()} className={styles.section}>
          <h2>{category}</h2>
          <div className={styles.commandGrid}>
            {cmds.map(cmd => (
              <CommandCard key={cmd.name} command={cmd} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}