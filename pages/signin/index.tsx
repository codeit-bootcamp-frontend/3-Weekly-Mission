import { useRouter } from "next/router";
import SigninHeader from "./header/SigninHeader";
import Container from "@/container/Container";
import styles from "@/styles/signin.module.scss";
import SigninForm from "./form/SigninForm";
import ImageButton from "@/components/button/imageButton/ImageButton";

export default function Signin() {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };
  return (
    <div className={styles.bg}>
      <Container className={styles.container}>
        <SigninHeader onClick={goToHome} />
        <SigninForm />
        <div className={styles.socialLogin}>
          소셜 로그인
          <div className={styles.snsButtons}>
            <GoogleButton />
            <KakaoButton />
          </div>
        </div>
      </Container>
    </div>
  );
}

function GoogleButton() {
  const handleClick = () => {
    console.log("구글 로그인");
  };

  return (
    <ImageButton
      src="/assets/google.svg"
      width={42}
      height={42}
      onClick={handleClick}
      alt="구글 로그인 버튼"
    />
  );
}

function KakaoButton() {
  const handleClick = () => {
    console.log("카카오 로그인");
  };

  return (
    <ImageButton
      src="/assets/kakao.png"
      width={42}
      height={42}
      onClick={handleClick}
      alt="카카오 로그인 버튼"
    />
  );
}
