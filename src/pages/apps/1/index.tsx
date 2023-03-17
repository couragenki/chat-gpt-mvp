import Head from 'next/head'
import Link from "next/link";
import styles from './styles.module.scss'
import Button from "@mui/material/Button";
import Header from '@/components/Header';

export default function App1() {
  return (
    <>
      <Head>
        <title>APP 1</title>
      </Head>
      <Header />
      <Link href="/">
        <Button variant="contained">TOPへ</Button>
      </Link>
      <main className={styles.app1}>APP 1</main>
    </>
  );
}
