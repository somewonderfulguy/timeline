import { FaExpandAlt } from 'react-icons/fa';
import { FaBackwardStep, FaPlay, FaForwardStep } from 'react-icons/fa6';

import styles from './PlayerBar.module.css';

const PlayerBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <div className={styles.progress} />
      </div>
      <div className={styles.controls}>
        <button
          type="button"
          title="Step Back 1 Frame"
          className={styles.controlButton}
        >
          <FaBackwardStep />
        </button>
        <button
          type="button"
          title="Play-Stop Toggle"
          className={styles.controlButtonLarger}
        >
          <FaPlay />
        </button>
        <button
          type="button"
          title="Step Forward 1 Frame"
          className={styles.controlButton}
        >
          <FaForwardStep />
        </button>
      </div>
      <button
        type="button"
        title="Full Screen View"
        className={styles.expandButton}
      >
        <FaExpandAlt />
      </button>
    </div>
  );
};

export default PlayerBar;
