import { HTMLAttributes } from 'react';

import { MediaType, TimelineFragment } from '~api/editorData';

import styles from './TimelineTile.module.css';
import classNames from '~utils/classNames';

type Props = TimelineFragment &
  HTMLAttributes<HTMLDivElement> & {
    type: MediaType;
  };

const TimelineTile = ({ name, type, className, ...rest }: Props) => {
  return (
    <div {...rest} className={classNames(styles[type], className)}>
      {name}
    </div>
  );
};

export default TimelineTile;
