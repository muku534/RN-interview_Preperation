'use client';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ toggleSidebar, isSidebarOpen, activeTrack, onTrackChange }) {
  const [toast, setToast] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleComingSoon = (e, section) => {
    e.preventDefault();
    setToast(`${section} is coming soon!`);
    setTimeout(() => setToast(''), 3000);
    setIsMobileNavOpen(false); // close mobile menu on click
  };

  const handleLinkClick = (e, trackId) => {
    e.preventDefault();
    onTrackChange(trackId);
    setIsMobileNavOpen(false);
  };

  const handleLinkClickWithToast = (e, trackId, section) => {
    handleLinkClick(e, trackId);
    handleComingSoon(e, section);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftSection}>
          <button className={styles.menuButton} onClick={toggleSidebar} aria-label="Toggle Sidebar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div className={styles.logoContainer}>
            <span className={styles.logoTitle}>React Native</span>
          </div>
        </div>

        <div className={`${styles.rightSection} ${isMobileNavOpen ? styles.mobileNavOpen : ''}`}>
          <a href="#plan" className={`${styles.navLink} ${activeTrack === 'plan' ? styles.active : ''}`} onClick={(e) => handleLinkClick(e, 'plan')}>Plan</a>
          <a href="#javascript" className={`${styles.navLink} ${activeTrack === 'javascript' ? styles.active : ''}`} onClick={(e) => handleLinkClick(e, 'javascript')}>JavaScript</a>
          <a href="#react-native" className={`${styles.navLink} ${activeTrack === 'react-native' ? styles.active : ''}`} onClick={(e) => handleLinkClick(e, 'react-native')}>React Native</a>
          <a href="#redux" className={`${styles.navLink} ${activeTrack === 'redux' ? styles.active : ''}`} onClick={(e) => handleLinkClickWithToast(e, 'redux', 'Redux')}>Redux</a>
          <a href="#navigation" className={`${styles.navLink} ${activeTrack === 'navigation' ? styles.active : ''}`} onClick={(e) => handleLinkClickWithToast(e, 'navigation', 'Navigation')}>Navigation</a>
          <a href="#api" className={`${styles.navLink} ${activeTrack === 'api' ? styles.active : ''}`} onClick={(e) => handleLinkClickWithToast(e, 'api', 'API')}>API</a>
        </div>

        <button
          className={styles.mobileNavToggle}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          aria-label="Toggle Mobile Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
      </nav>

      {toast && (
        <div className={styles.toast}>
          {toast}
        </div>
      )}
    </>
  );
}
