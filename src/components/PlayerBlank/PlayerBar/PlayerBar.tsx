import styles from './PlayerBar.module.css';

const PlayerBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <div className={styles.progress} />
      </div>
      <div className={styles.controls}>
        <button className={styles.controlButton}>Previous</button>
        <button className={styles.controlButton}>Play</button>
        <button className={styles.controlButton}>Next</button>
      </div>
    </div>
  );
};

export default PlayerBar;
