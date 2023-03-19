import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Link from 'next/link'
import React from 'react';
import styles from './styles.module.scss'

export default function Header() {
  const navItems = ["Home", "About", "Contact"];
  return (
    <header className={styles.headerComponent}>
      <AppBar position="relative">
        <Container maxWidth="md">
          <Toolbar>
            <Link href="/">
              <Typography variant="h6" color="white" noWrap>
                Chat GPTでアプリ開発
              </Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="md">
        <div className={styles.header}>
          <div className={styles.links}>
            <ul>
              <li className={styles.link}>
                <Link className={styles.text} href="/apps/1">
                  APP1へ
                </Link>
              </li>
              <li className={styles.link}>
                <Link className={styles.text} href="/apps/2">
                  APP2へ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}
