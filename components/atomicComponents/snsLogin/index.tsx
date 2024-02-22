import styles from "./snsLogin.module.css";
import Link from "next/link";
import Image from "next/image";
import { google_png, kakaotalk_svg } from "@/public/image";

const SnsLogin = ({ children }: { children: string }) => {
  const kakaoUrl = "https://www.kakaocorp.com/page";
  const googleUrl = "https://www.google.com";

  return (
    <div className={styles.sns_Login_wrapper}>
      <p className={styles.sns_Login_text}>{children}</p>
      <ul className={styles.sns_Icon_wrapper}>
        <li className={styles.google_wrapper}>
          <Link href={googleUrl}>
            <Image src={google_png} alt="구글" width={22} height={22} />
          </Link>
        </li>
        <li className={styles.kakao_wrapper}>
          <Link href={kakaoUrl}>
            <Image src={kakaotalk_svg} alt="구글" width={22} height={22} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SnsLogin;
