import { HTMLAttributes } from 'react';

import { TimeLineFragment } from '~api/editorData';

import styles from './Timeline.module.css';
import classNames from '~utils/classNames';

type Props = HTMLAttributes<HTMLDivElement> & {
  fragments: TimeLineFragment[];
};

const Timeline = ({ fragments, className, ...rest }: Props) => {
  return (
    <div {...rest} className={classNames(styles.timeline, className)}>
      {fragments.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

export default Timeline;
