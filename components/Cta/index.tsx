import Link from "next/link";
import styles from "./style.module.css";

export default function Cta() {
  return (
    <div className={styles.cta}>
      <Link href="/signin.html">로그인</Link>
    </div>
  );
}
