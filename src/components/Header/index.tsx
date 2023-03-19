import Link from 'next/link'
import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.headerComponent}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link className={styles.title} href="/">
            TOPへ戻る
          </Link>
        </div>
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
    </header>
  );
}
