import Link from "next/link";
import styles from './styles.module.scss'
import Button from "@mui/material/Button";
import { PageTemplate } from '@/components/pageTemplate';

export default function App1() {
  return (
    <div className={styles.app1}>
      <PageTemplate>
        <div>APP 1</div>
        <Link href="/">
          <Button variant="contained">TOPへ</Button>
        </Link>
      </PageTemplate>
    </div>
  );
}
