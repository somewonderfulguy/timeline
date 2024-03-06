import { CSSProperties, HTMLAttributes } from 'react';
import { useDrag } from 'react-dnd';

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
  style,
  thumbnail,
  unscaleStyle,
  id,
  ...rest
}: Props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div
      ref={drag}
      {...rest}
      className={classNames(styles.tileContainer, className)}
      style={{
        ...style,
        ...(isDragging && { opacity: 0.5 })
      }}
    >
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
