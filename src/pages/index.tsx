import Head from 'next/head'
import styles from './Top.module.scss'
import Button from "@mui/material/Button";
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Button variant="contained">Hello World</Button>
      <main className={styles.main}></main>
    </>
  );
}
