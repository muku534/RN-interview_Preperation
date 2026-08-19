'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import ContentArea from '../components/ContentArea/ContentArea';
import styles from './page.module.css';

export default function Home() {
  const [activeTopic, setActiveTopic] = useState('old-arch');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <div className={styles.layout}>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className={styles.mainContainer}>
        <div 
          className={`${styles.mobileOverlay} ${isSidebarOpen ? styles.overlayOpen : ''}`}
          onClick={() => setIsSidebarOpen(false)}
        />
        <div className={`${styles.sidebarWrapper} ${isSidebarOpen ? '' : styles.sidebarClosed}`}>
          <Sidebar activeTopic={activeTopic} setActiveTopic={setActiveTopic} />
        </div>
        <div className={styles.contentWrapper}>
          <ContentArea activeTopic={activeTopic} setActiveTopic={setActiveTopic} />
        </div>
      </div>
    </div>
  );
}
