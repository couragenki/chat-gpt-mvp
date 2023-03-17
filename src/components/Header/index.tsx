import Link from 'next/link'
import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.headerComponent}>
      <div>
        <Link href="/">TOPへ戻る</Link>
      </div>
      <div>
        <Link href="/apps/1">APP1へ</Link>
      </div>
    </header>
  );
}
