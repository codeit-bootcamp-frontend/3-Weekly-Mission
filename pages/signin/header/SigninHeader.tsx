import ImageButton from "@/components/button/imageButton/ImageButton";
import styles from "./SigninHeader.module.scss";
import Link from "next/link";

type SignupHeaderProps = {
  onClick: () => void;
};

export default function SigninHeader({ onClick }: SignupHeaderProps) {
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
        회원이 아니신가요?
        <Link href="/signup">회원 가입하기</Link>
      </div>
    </div>
  );
}
