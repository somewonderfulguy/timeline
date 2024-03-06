import { HTMLAttributes } from 'react';

import { MediaType, TimelineFragment } from '~api/editorData';
import classNames from '~utils/classNames';

import styles from './TimelineTile.module.css';
import soundWaveImg from './assets/sound-wave.png';

type Props = TimelineFragment &
  HTMLAttributes<HTMLDivElement> & {
    type: MediaType;
    scale: number;
  };

const TimelineTile = ({
  name,
  type,
  className,
  thumbnail,
  scale,
  ...rest
}: Props) => {
  const scaleCss = `${1 / scale} 1`;
  const width = `calc(100% * ${scale})`;
  return (
    <div {...rest} className={classNames(styles[type], className)}>
      <div
        className={styles.thumbnail}
        style={{
          ...(type === 'audio' && { backgroundImage: `url(${soundWaveImg})` }),
          ...(type === 'video' &&
            thumbnail && { backgroundImage: `url(${thumbnail})` }),
          scale: scaleCss,
          width
        }}
      />
      <div className={styles.name} style={{ scale: scaleCss, width }}>
        {name}
      </div>
    </div>
  );
};

export default TimelineTile;
