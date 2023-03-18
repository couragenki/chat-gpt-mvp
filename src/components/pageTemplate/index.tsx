import React from 'react';
import styles from './styles.module.scss'
import { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import { MainConponent } from '../MainConponent';

type Props = {
  children: ReactNode;
};

export const PageTemplate: React.FC<Props> = (props) => {
  return (
    <div className={styles.pageTemplate}>
      <Head>
        <title>TOP PAGE</title>
      </Head>
      <Header />
      <MainConponent>{props.children}</MainConponent>
    </div>
  );
};
