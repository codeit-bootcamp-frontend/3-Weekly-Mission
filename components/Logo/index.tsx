import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/">
      <div className={styles["image-box"]}>
        <Image fill src="/assets/logo.svg" alt="Linkbrary 로고" />
      </div>
    </Link>
  );
};

export default Logo;
