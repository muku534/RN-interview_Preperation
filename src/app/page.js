'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import ContentArea from '../components/ContentArea/ContentArea';
import styles from './page.module.css';

export default function Home() {
  const [activeTrack, setActiveTrack] = useState('javascript');
  const [activeTopic, setActiveTopic] = useState('js-map');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  
  const handleTrackChange = (trackId) => {
    setActiveTrack(trackId);
    const defaultTopics = {
      'javascript': 'js-map',
      'react-native': 'old-arch'
    };
    if (defaultTopics[trackId]) {
      setActiveTopic(defaultTopics[trackId]);
    }
  };

  return (
    <div className={styles.layout}>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} activeTrack={activeTrack} onTrackChange={handleTrackChange} />
      <div className={styles.mainContainer}>
        <div 
          className={`${styles.mobileOverlay} ${isSidebarOpen ? styles.overlayOpen : ''}`}
          onClick={() => setIsSidebarOpen(false)}
        />
        <div className={`${styles.sidebarWrapper} ${isSidebarOpen ? '' : styles.sidebarClosed}`}>
          <Sidebar activeTopic={activeTopic} setActiveTopic={setActiveTopic} activeTrack={activeTrack} />
        </div>
        <div className={styles.contentWrapper}>
          <ContentArea activeTopic={activeTopic} setActiveTopic={setActiveTopic} activeTrack={activeTrack} />
        </div>
      </div>
    </div>
  );
}
