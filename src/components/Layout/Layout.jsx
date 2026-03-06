import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);      // for mobile
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // for desktop

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleCollapse = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className={styles.layout}>
      <Navbar 
        toggleSidebar={toggleSidebar} 
        toggleCollapse={toggleCollapse}
        collapsed={sidebarCollapsed}
      />
      <div className={styles.mainContainer}>
        <Sidebar 
          isOpen={sidebarOpen} 
          close={() => setSidebarOpen(false)}
          collapsed={sidebarCollapsed}
        />
        <main className={`${styles.content} ${sidebarCollapsed ? styles.contentExpanded : ''}`}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}