import Head from 'next/head'
import styles from './Top.module.scss'
import Header from '@/components/Header';

export default function TOP() {
  return (
    <>
      <Head>
        <title>TOP PAGE</title>
      </Head>
      <Header />
      <main className={styles.topPage}>
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
      </main>
    </>
  );
}
