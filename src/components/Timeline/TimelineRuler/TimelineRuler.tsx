import { HTMLAttributes } from 'react';

import styles from './TimelineRuler.module.css';
import classNames from '~utils/classNames';

const TimelineRuler = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={classNames(styles.rulerRoot, props.className)} />
  );
};

export default TimelineRuler;
