import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import googleIcon from "../../images/googleIcon.svg";
import kakaotalkIcon from "../../images/kakaotalkIcon.svg";

const SignupSocialBox = () => {
  return (
    <div className={styles.social}>
      <span>다른 방식으로 가입하기</span>
      <div>
        <Link href="https://www.google.com">
          <Image
            src={googleIcon}
            width={45}
            height={45}
            alt="구글 아이콘"
            className={styles.button}
          />
        </Link>
        <Link href="https://www.kakaocorp.com/page">
          <Image
            src={kakaotalkIcon}
            width={45}
            height={45}
            alt="카카오톡 아이콘"
            className={styles.button}
          />
        </Link>
      </div>
    </div>
  );
};
export default SignupSocialBox;
