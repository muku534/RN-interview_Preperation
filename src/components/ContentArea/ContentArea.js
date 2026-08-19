import styles from './ContentArea.module.css';

import OldArchitecture from '../Topics/OldArchitecture';
import NewArchitecture from '../Topics/NewArchitecture';
import ThreadModel from '../Topics/ThreadModel';
import MetroBundler from '../Topics/MetroBundler';
import HermesEngine from '../Topics/HermesEngine';
import FastRefresh from '../Topics/FastRefresh';
import CliVsExpo from '../Topics/CliVsExpo';
import MapMethod from '../Topics/MapMethod';
import FilterMethod from '../Topics/FilterMethod';
import FindMethod from '../Topics/FindMethod';
import FindIndexMethod from '../Topics/FindIndexMethod';
import SomeMethod from '../Topics/SomeMethod';
import EveryMethod from '../Topics/EveryMethod';
import IncludesMethod from '../Topics/IncludesMethod';
import ReduceMethod from '../Topics/ReduceMethod';
import ArrayMethodsSummary from '../Topics/ArrayMethodsSummary';

const trackTopicsList = {
  'javascript': [
    { id: 'js-map', title: 'map()' },
    { id: 'js-filter', title: 'filter()' },
    { id: 'js-find', title: 'find()' },
    { id: 'js-findindex', title: 'findIndex()' },
    { id: 'js-some', title: 'some()' },
    { id: 'js-every', title: 'every()' },
    { id: 'js-includes', title: 'includes()' },
    { id: 'js-reduce', title: 'reduce()' },
    { id: 'js-summary', title: 'Comparison & Traps' }
  ],
  'react-native': [
    { id: 'old-arch', title: 'The Old Architecture' },
    { id: 'new-arch', title: 'The New Architecture' },
    { id: 'threads', title: 'The Three Threads' },
    { id: 'metro', title: 'Metro Bundler' },
    { id: 'hermes', title: 'Hermes Engine' },
    { id: 'fast-refresh', title: 'Fast Refresh' },
    { id: 'cli-expo', title: 'CLI vs Expo' }
  ],
  'redux': [],
  'navigation': [],
  'api': []
};

export default function ContentArea({ activeTopic, setActiveTopic, activeTrack }) {
  const currentList = trackTopicsList[activeTrack] || [];
  const currentIndex = currentList.findIndex(t => t.id === activeTopic);
  const prevTopic = currentIndex > 0 ? currentList[currentIndex - 1] : null;
  const nextTopic = currentIndex !== -1 && currentIndex < currentList.length - 1 ? currentList[currentIndex + 1] : null;

  const renderTopic = () => {
    switch (activeTopic) {
      case 'js-map': return <MapMethod />;
      case 'js-filter': return <FilterMethod />;
      case 'js-find': return <FindMethod />;
      case 'js-findindex': return <FindIndexMethod />;
      case 'js-some': return <SomeMethod />;
      case 'js-every': return <EveryMethod />;
      case 'js-includes': return <IncludesMethod />;
      case 'js-reduce': return <ReduceMethod />;
      case 'js-summary': return <ArrayMethodsSummary />;
      case 'old-arch': return <OldArchitecture />;
      case 'new-arch': return <NewArchitecture />;
      case 'threads': return <ThreadModel />;
      case 'metro': return <MetroBundler />;
      case 'hermes': return <HermesEngine />;
      case 'fast-refresh': return <FastRefresh />;
      case 'cli-expo': return <CliVsExpo />;
      default: return <OldArchitecture />;
    }
  };

  return (
    <main className={styles.contentArea}>
      <div className={styles.container}>
        <article>
          <div key={activeTopic} className="animate-fade-in">
            {renderTopic()}
          </div>
        </article>
        
        <nav className={styles.pagination}>
          {prevTopic ? (
            <button className={styles.pageButton} onClick={() => setActiveTopic(prevTopic.id)}>
              <span className={styles.pageTitle}>« {prevTopic.title}</span>
            </button>
          ) : <div className={styles.pageEmpty}></div>}
          
          {nextTopic ? (
            <button className={`${styles.pageButton} ${styles.pageNext}`} onClick={() => setActiveTopic(nextTopic.id)}>
              <span className={styles.pageTitle}>{nextTopic.title} »</span>
            </button>
          ) : <div className={styles.pageEmpty}></div>}
        </nav>
      </div>
    </main>
  );
}
