import { useRouter } from "next/router";
import ImageButton from "@/components/button/imageButton/ImageButton";
import Container from "@/container/Container";
import styles from "@/styles/signup.module.scss";
import SignupHeader from "./header/SignupHeader";
import SignupForm from "./form/SignupForm";

export default function Signup() {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.bg}>
      <Container className={styles.container}>
        <SignupHeader onClick={goToHome} />
        <SignupForm />
        <div className={styles.socialLogin}>
          다른 방식으로 가입하기
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
