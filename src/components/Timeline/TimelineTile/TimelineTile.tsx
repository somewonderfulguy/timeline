import { HTMLAttributes } from 'react';

import { MediaType, TimelineFragment } from '~api/editorData';
import classNames from '~utils/classNames';

import styles from './TimelineTile.module.css';
import soundWaveImg from './assets/sound-wave.png';

type Props = TimelineFragment &
  HTMLAttributes<HTMLDivElement> & {
    type: MediaType;
  };

const TimelineTile = ({ name, type, className, thumbnail, ...rest }: Props) => {
  return (
    <div {...rest} className={classNames(styles[type], className)}>
      <div
        className={styles.thumbnail}
        style={{
          ...(type === 'audio' && { backgroundImage: `url(${soundWaveImg})` }),
          ...(type === 'video' &&
            thumbnail && { backgroundImage: `url(${thumbnail})` })
        }}
      />
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default TimelineTile;
