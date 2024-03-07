import { HTMLAttributes } from 'react';

import classNames from '~utils/classNames';

import styles from './PositionIndicator.module.css';

const PositionIndicator = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={classNames(styles.indicator, className)}>
      <div className={classNames(className, styles.head)} />
    </div>
  );
};

export default PositionIndicator;
