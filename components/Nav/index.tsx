import { User } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";

interface NavProps {
  user?: User;
}

const Nav = ({ user }: NavProps) => {
  return (
    <nav className={styles.nav}>
      <div className={styles["header-container"]}>
        <Link className={styles.logo} href="/">
          <Image fill src="/assets/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
        </Link>
        {user ? (
          <div className={styles["user-profile"]}>
            <div className={styles["user-image"]}>
              <Image fill src={user.image_source} alt={user.name} />
            </div>
            <div className={styles["user-email"]}>{user.email}</div>
          </div>
        ) : (
          <Link href="/" className={styles["login-button"]}>
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
