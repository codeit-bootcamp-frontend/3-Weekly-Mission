import logo from "../public/logo.svg";
import styles from "./Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface HeaderProps {
  isSticky?: boolean;
  profileImageSource: string;
  email: string;
}

export default function Header({
  isSticky = false,
  profileImageSource,
  email,
}: HeaderProps) {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };
  return (
    <div className={cx("nav-wrapper")}>
      <div className={cx(isSticky ? "nav-folder-bg" : "nav-bg")} />
      <header className={cx(isSticky ? "nav-folder" : "nav")}>
        <Image
          src={logo}
          className={cx("logo")}
          alt="logo"
          onClick={handleLogoClick}
        />
        <div className={cx("profile-wrapper")}>
          <Image
            width={28}
            height={28}
            src={profileImageSource}
            className={cx("profile-img")}
            alt="profile-img"
          />
          <span className={cx("profile-email")}>{email ?? "로그인"}</span>
        </div>
      </header>
    </div>
  );
}
