import Head from 'next/head'
import styles from './Top.module.scss'
import Button from "@mui/material/Button";
import Header from '@/components/Header';
import Link from 'next/link';

export default function TOP() {
  return (
    <>
      <Head>
        <title>TOP</title>
      </Head>
      <Header />
      <Link href="/apps/1">
        <Button variant="contained">APP1へ</Button>
      </Link>
      <main className={styles.main}></main>
    </>
  );
}
