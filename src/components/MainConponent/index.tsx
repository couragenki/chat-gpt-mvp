import React from 'react';
import styles from './styles.module.scss'
import { ReactNode } from 'react';
import { Container } from '@mui/material';

type Props = {
  children: ReactNode;
};

export const MainConponent: React.FC<Props> = (props) => {
  return (
    <div className={styles.mainComponent}>
      <Container maxWidth="md">{props.children}</Container>
    </div>
  );
}