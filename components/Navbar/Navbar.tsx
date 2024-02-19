import { useUserData } from "@/hooks/useUserData";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

function Account() {
  const { userData } = useUserData();

  return (
    <>
      {userData ? (
        <div className={styles.accountFrame}>
          <span className={styles.profile}>
            <Image fill src={userData?.image_source} alt="profile-img" />
          </span>
          <span className={styles.email}>{userData?.email}</span>
        </div>
      ) : (
        <Link className={styles.login} href="/signin">
          로그인
        </Link>
      )}
    </>
  );
}
interface Props {
  isSticky?: boolean;
}
function Navbar({ isSticky }: Props) {
  return (
    <nav className={`${styles.nav} ${isSticky ? styles.folder : ""}`}>
      <div className={styles.gnb}>
        <Link href="/">
          <span className={styles.logo}>
            <Image fill src="/svgs/logo.svg" alt="linkbrary-logo" />
          </span>
        </Link>
        <Account />
      </div>
    </nav>
  );
}

export default Navbar;
