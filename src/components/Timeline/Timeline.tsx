import { HTMLAttributes } from 'react';

import { MediaType, TimelineFragment } from '~api/editorData';
import classNames from '~utils/classNames';

import TimelineTile from './TimelineTile';

import styles from './Timeline.module.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  fragments: TimelineFragment[];
  type: MediaType;
  scale: number;
};

const Timeline = ({ fragments, className, type, scale, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={classNames(styles.timeline, className)}
      style={{ ...rest.style, scale: `${scale} 1` }}
    >
      {fragments.map((props) => (
        <TimelineTile
          key={props.id}
          type={type}
          className={styles.tile}
          {...props}
          style={{ left: props.start, width: props.duration }}
          scale={scale}
        />
      ))}
    </div>
  );
};

export default Timeline;
