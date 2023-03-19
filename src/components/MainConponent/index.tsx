import React from 'react';
import styles from './styles.module.scss'
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const MainConponent: React.FC<Props> = (props) => {
  return (
    <div className={styles.mainComponent}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}