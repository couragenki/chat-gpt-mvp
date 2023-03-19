import styles from './Top.module.scss'
import { PageTemplate } from '@/components/pageTemplate';
import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

export default function TOPPAGE() {
  return (
    <div className={styles.topPage}>
      <PageTemplate>
        <Typography variant="h5" component="h2" mt={2}>
          このサイトではChat-GPTの活用事例を掲載しています
        </Typography>
        <section>
          <Typography variant="h6" component="h3" mt={2}>
            アプリ一覧
          </Typography>
          <ul>
            <li>
              <Link href="/apps/1">アプリNo.1: チャットアプリ</Link>
            </li>
            <li>
              <Link href="/apps/2">アプリNo.2: 学習レコメンド</Link>
            </li>
          </ul>
        </section>
      </PageTemplate>
    </div>
  );
}
