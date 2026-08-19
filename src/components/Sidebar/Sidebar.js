'use client';

import { useState } from 'react';
import styles from './Sidebar.module.css';

const trackCategories = {
  'javascript': [
    {
      title: 'JavaScript Fundamentals',
      topics: [
        { id: 'js-map', title: 'map()' },
        { id: 'js-filter', title: 'filter()' },
        { id: 'js-find', title: 'find()' },
        { id: 'js-findindex', title: 'findIndex()' },
        { id: 'js-some', title: 'some()' },
        { id: 'js-every', title: 'every()' },
        { id: 'js-includes', title: 'includes()' },
        { id: 'js-reduce', title: 'reduce()' },
        { id: 'js-summary', title: 'Comparison & Traps' }
      ]
    }
  ],
  'react-native': [
    {
      title: 'Architecture Deep Dive',
      topics: [
        { id: 'old-arch', title: 'The Old Architecture' },
        { id: 'new-arch', title: 'The New Architecture' },
        { id: 'threads', title: 'The Three Threads' },
        { id: 'metro', title: 'Metro Bundler' },
        { id: 'hermes', title: 'Hermes Engine' },
        { id: 'fast-refresh', title: 'Fast Refresh' },
        { id: 'cli-expo', title: 'CLI vs Expo' }
      ]
    }
  ],
  'redux': [],
  'navigation': [],
  'api': []
};

export default function Sidebar({ activeTopic, setActiveTopic, activeTrack }) {
  // Keep the first category expanded by default
  const [expanded, setExpanded] = useState({ 0: true });

  const categories = trackCategories[activeTrack] || [];

  const toggleCategory = (idx) => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {categories.map((category, idx) => {
          const isExpanded = expanded[idx];
          return (
            <div key={idx} className={styles.category}>
              <button
                className={styles.categoryHeader}
                onClick={() => toggleCategory(idx)}
              >
                <span className={styles.categoryTitle}>{category.title}</span>
                <svg
                  className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              <div className={`${styles.collapsibleWrapper} ${isExpanded ? styles.expanded : ''}`}>
                <div className={styles.collapsibleInner}>
                  <ul className={styles.topicList}>
                    {category.topics.map((topic) => (
                      <li key={topic.id}>
                        <button
                          className={`${styles.navItem} ${activeTopic === topic.id ? styles.active : ''}`}
                          onClick={() => setActiveTopic(topic.id)}
                        >
                          {topic.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
