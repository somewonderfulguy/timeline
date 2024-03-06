import { HtmlHTMLAttributes } from 'react';

import PlayerBar from './PlayerBar';

import img from './assets/video-placeholder.jpg';
import styles from './PlayerBlank.module.css';

const PlayerBlank = (props: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <div className={styles.container}>
        <div className={styles.player}>
          <img src={img} alt="player-preview" />
        </div>
      </div>
      <PlayerBar />
    </div>
  );
};

export default PlayerBlank;
