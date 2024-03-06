import { CSSProperties, HTMLAttributes } from 'react';

import { MediaType, TimelineFragment } from '~api/editorData';
import classNames from '~utils/classNames';

import styles from './TimelineTile.module.css';
import soundWaveImg from './assets/sound-wave.png';

type Props = TimelineFragment &
  HTMLAttributes<HTMLDivElement> & {
    type: MediaType;
    unscaleStyle: CSSProperties;
  };

const TimelineTile = ({
  name,
  type,
  className,
  thumbnail,
  unscaleStyle,
  ...rest
}: Props) => {
  return (
    <div {...rest} className={classNames(styles.tileContainer, className)}>
      <div className={classNames(styles[type], className)} style={unscaleStyle}>
        <div
          className={styles.thumbnail}
          style={{
            ...(type === 'audio' && {
              backgroundImage: `url(${soundWaveImg})`
            }),
            ...(type === 'video' &&
              thumbnail && { backgroundImage: `url(${thumbnail})` })
          }}
        />
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  );
};

export default TimelineTile;
