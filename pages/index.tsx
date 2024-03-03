import styles from "@/styles/home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.temp}>
      홈페이지
      <Link href={"/folder"}>
        <button>폴더 페이지로</button>
      </Link>
    </div>
  );
}
