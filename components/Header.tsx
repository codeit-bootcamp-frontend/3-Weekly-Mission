import logo from "../public/logo.svg";
import styles from "./Header.module.css";
import useGetUser from "../hooks/useGetUser";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header({ isSticky }: { isSticky: boolean }) {
  const [profileImageSource, email] = useGetUser(!isSticky) || [];
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };
  return (
    <div className={styles["nav-wrapper"]}>
      <div
        className={
          isSticky ? `${styles["nav-folder-bg"]}` : `${styles["nav-bg"]}`
        }
      />
      <header
        className={isSticky ? `${styles["nav-folder"]}` : `${styles["nav"]}`}
      >
        <Image
          src={logo}
          className={styles.logo}
          alt="logo"
          onClick={handleLogoClick}
        />
        <div className={styles["profile-wrapper"]}>
          <Image
            width={28}
            height={28}
            src={profileImageSource}
            className={styles["profile-img"]}
            alt="profile-img"
          />
          <span className={styles["profile-email"]}>{email ?? "로그인"}</span>
        </div>
      </header>
    </div>
  );
}
