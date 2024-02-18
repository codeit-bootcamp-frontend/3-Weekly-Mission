import logo from "../public/logo.svg";
import styles from "./Header.module.css";
import useGetUserAsync from "../hooks/useGetUserAsync";
import Image from "next/image";

export default function Header({ isSticky }) {
  const [profileImageSource, email] = useGetUserAsync(isSticky);

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
        <Image src={logo} className={styles.logo} alt="logo" />
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
