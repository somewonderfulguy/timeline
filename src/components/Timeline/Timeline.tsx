import { CSSProperties, HTMLAttributes } from 'react';

import { MediaType, TimelineFragment } from '~api/editorData';
import classNames from '~utils/classNames';

import TimelineTile from './TimelineTile';

import styles from './Timeline.module.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  fragments: TimelineFragment[];
  type: MediaType;
  unscaleStyle: CSSProperties;
};

const Timeline = ({
  fragments,
  className,
  type,
  unscaleStyle,
  ...rest
}: Props) => {
  return (
    <div {...rest} className={classNames(styles.timeline, className)}>
      {fragments.map((props) => (
        <TimelineTile
          key={props.id}
          type={type}
          className={styles.tile}
          {...props}
          style={{ left: props.start, width: props.duration }}
          unscaleStyle={unscaleStyle}
        />
      ))}
    </div>
  );
};

export default Timeline;
