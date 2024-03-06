import { HTMLAttributes } from 'react';

import { MediaType, TimelineFragment } from '~api/editorData';
import classNames from '~utils/classNames';

import TimelineTile from './TimelineTile';

import styles from './Timeline.module.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  fragments: TimelineFragment[];
  type: MediaType;
};

const Timeline = ({ fragments, className, type, ...rest }: Props) => {
  return (
    <div {...rest} className={classNames(styles.timeline, className)}>
      {fragments.map((props) => (
        <TimelineTile
          type={type}
          className={styles.tile}
          {...props}
          style={{ left: props.start, width: props.duration }}
        />
      ))}
    </div>
  );
};

export default Timeline;
