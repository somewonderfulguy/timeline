import { CSSProperties, HTMLAttributes } from 'react';
import { useDrop } from 'react-dnd';

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
  // TODO: implement drop
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: type,
    drop: (item, monitor) => {
      // eslint-disable-next-line no-console
      console.log('dropped', item, monitor, monitor.getItem());
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  }));

  return (
    <div
      ref={drop}
      {...rest}
      className={classNames(styles.timeline, className)}
    >
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
