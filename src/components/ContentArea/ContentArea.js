import styles from './ContentArea.module.css';
import OldArchitecture from '../Topics/OldArchitecture';
import NewArchitecture from '../Topics/NewArchitecture';
import ThreadModel from '../Topics/ThreadModel';
import MetroBundler from '../Topics/MetroBundler';
import HermesEngine from '../Topics/HermesEngine';
import FastRefresh from '../Topics/FastRefresh';
import CliVsExpo from '../Topics/CliVsExpo';

const topicsList = [
  { id: 'old-arch', title: 'The Old Architecture' },
  { id: 'new-arch', title: 'The New Architecture' },
  { id: 'threads', title: 'The Three Threads' },
  { id: 'metro', title: 'Metro Bundler' },
  { id: 'hermes', title: 'Hermes Engine' },
  { id: 'fast-refresh', title: 'Fast Refresh' },
  { id: 'cli-expo', title: 'CLI vs Expo' }
];

export default function ContentArea({ activeTopic, setActiveTopic }) {
  const currentIndex = topicsList.findIndex(t => t.id === activeTopic);
  const prevTopic = currentIndex > 0 ? topicsList[currentIndex - 1] : null;
  const nextTopic = currentIndex < topicsList.length - 1 ? topicsList[currentIndex + 1] : null;

  const renderTopic = () => {
    switch (activeTopic) {
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
