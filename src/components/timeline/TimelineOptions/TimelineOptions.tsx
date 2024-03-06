import { HTMLAttributes } from 'react';
import { FaUnlockKeyhole, FaVolumeHigh, FaFilm } from 'react-icons/fa6';

import classNames from '~utils/classNames';

import styles from './TimelineOptions.module.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  type: 'video' | 'audio';
};

const TimelineOptions = ({ className, type }: Props) => {
  return (
    <div className={classNames(className, styles.options, styles[type])}>
      <button
        type="button"
        className={styles.control}
        title="Lock Track"
        disabled
      >
        <FaUnlockKeyhole />
      </button>
      <button type="button" className={styles.control} title="Mute Track">
        <FaVolumeHigh />
      </button>
      <button type="button" className={styles.control} title="Disable Track">
        <FaFilm />
      </button>
    </div>
  );
};

export default TimelineOptions;
