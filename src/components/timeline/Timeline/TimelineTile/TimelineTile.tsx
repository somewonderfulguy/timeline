import { CSSProperties, HTMLAttributes, useMemo } from 'react';
import { useDrag } from 'react-dnd';

import { MediaType, TimelineFragment } from '~api/editorData';
import classNames from '~utils/classNames';

import styles from './TimelineTile.module.css';
import soundWaveImg from './assets/sound-wave.png';

type Props = TimelineFragment &
  HTMLAttributes<HTMLDivElement> & {
    type: MediaType;
    unscaleStyle: CSSProperties;
    timelineId: string;
  };

export type DragItem = TimelineFragment & {
  timelineId: string;
};

const TimelineTile = ({
  name,
  type,
  className,
  thumbnail,
  duration,
  start,
  src,
  id,
  options,
  timelineId,
  unscaleStyle,
  ...rest
}: Props) => {
  const dragTileProps = useMemo(
    () => ({
      id,
      thumbnail,
      options,
      duration,
      start,
      name,
      src,
      timelineId
    }),
    [id, thumbnail, options, duration, start, name, src, timelineId]
  );

  const [, drag] = useDrag(
    () => ({
      type,
      item: dragTileProps satisfies DragItem,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
      })
    }),
    [dragTileProps]
  );

  return (
    <div
      ref={drag}
      {...rest}
      className={classNames(styles.tileContainer, className)}
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
