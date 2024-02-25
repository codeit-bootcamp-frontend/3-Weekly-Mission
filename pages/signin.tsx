import { Input } from '@/components/Input';
import Image from 'next/image';
import styles from '@/styles/signin.module.css';

const SignIn = () => {
  return (
    <div className={styles['background-container']}>
      <div className={styles['sign-section']}>
        <div className={styles.header}>
          <a href="/">
            <Image
              width={211}
              height={38}
              src="./images/logo.svg"
              alt="홈으로 연결된 Linkbrary 로고"
            />
          </a>
          <p className={styles['header__text']}>
            <span>회원이 아니신가요? </span>
            <a className={styles['header__signup-link']}>회원 가입하기</a>
          </p>
        </div>

        <form className={styles.form}>
          <Input
            type="string"
            id="sign-email"
            label="이메일"
            placeholder="이메일을 입력해주세요."
          />
          <Input
            type="password"
            id="sign-password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
          />
          <button className={styles['submit-button']} type="button">
            로그인
          </button>
        </form>

        <article className={styles['social-sign']}>
          <p>소셜 로그인</p>
          <div className={styles['social-sign__icons']}>
            <a href="https://www.google.com">
              <Image
                width={42}
                height={42}
                src="/images/google.png"
                alt="구글 아이콘"
              />
            </a>
            <a href="https://www.kakaocorp.com/page">
              <Image
                width={42}
                height={42}
                src="/images/kakaotalk.png"
                alt="카카오톡 아이콘"
              />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SignIn;
