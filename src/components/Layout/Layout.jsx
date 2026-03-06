import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className={styles.mainContainer}>
        <Sidebar isOpen={sidebarOpen} close={() => setSidebarOpen(false)} />
        <main className={styles.content}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}