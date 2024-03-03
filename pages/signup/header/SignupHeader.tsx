import ImageButton from "@/components/button/imageButton/ImageButton";
import styles from "./SignupHeader.module.scss";
import Link from "next/link";

type SignupHeaderProps = {
  onClick: () => void;
};

export default function SignupHeader({ onClick }: SignupHeaderProps) {
  return (
    <div className={styles.header}>
      <ImageButton
        className={styles.logoButton}
        src="/assets/logo.svg"
        width={210}
        height={38}
        alt="로고 버튼"
        onClick={onClick}
      />
      <div className={styles.headerText}>
        이미 회원이신가요?
        <Link href="/signin">로그인 하기</Link>
      </div>
    </div>
  );
}
