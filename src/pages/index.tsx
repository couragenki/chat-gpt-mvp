import styles from './Top.module.scss'
import { PageTemplate } from '@/components/pageTemplate';
import React from 'react';

export default function TOPPAGE() {
  return (
    <div className={styles.topPage}>
      <PageTemplate>
        <p>このサイトではChat-GPTの活用事例を掲載しています</p>
        <section>
          <div>Chat-GPT x 学習</div>
          <ul>
            <li>hoge</li>
            <li>hoge</li>
            <li>hoge</li>
            <li>hoge</li>
          </ul>
        </section>
        <section>
          <div>Chat-GPT x 相談</div>
          <ul>
            <li>hoge</li>
            <li>hoge</li>
            <li>hoge</li>
            <li>hoge</li>
          </ul>
        </section>
        <section>
          <div>Chat-GPT x 恋愛</div>
          <ul>
            <li>hoge</li>
            <li>hoge</li>
            <li>hoge</li>
            <li>hoge</li>
          </ul>
        </section>
      </PageTemplate>
    </div>
  );
}
