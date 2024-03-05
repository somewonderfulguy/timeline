import PlayerBlank from '~components/PlayerBlank';
import Timeline from '~components/Timeline';
import TimelineOptions from '~components/TimelineOptions';

import styles from './App.module.css';
import './reset.css';

function App() {
  return (
    <>
      <PlayerBlank />
      <div className={styles.timelineRoot}>
        <div className={styles.timelineRow}>
          <TimelineOptions />
          <Timeline />
        </div>
        <div className={styles.timelineRow}>
          <TimelineOptions />
          <Timeline />
        </div>
      </div>
    </>
  );
}

export default App;
