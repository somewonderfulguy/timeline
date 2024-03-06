import { HTMLAttributes, ReactNode } from 'react';

import classNames from '~utils/classNames';

import styles from './PositionIndicator.module.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

const PositionIndicator = ({ className, children, ...props }: Props) => {
  return (
    <div {...props} className={classNames(styles.indicator, className)}>
      {children}
    </div>
  );
};

const Head = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={classNames(className, styles.head)} />;
};

PositionIndicator.Head = Head;

export default PositionIndicator;
