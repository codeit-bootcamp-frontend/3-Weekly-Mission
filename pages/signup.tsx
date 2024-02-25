import { Input } from '@/components/Input';
import Image from 'next/image';
import styles from '@/styles/signup.module.css';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div className={styles['background-container']}>
      <div className={styles['sign-section']}>
        <div className={styles.header}>
          <Link href="/">
            <Image
              width={211}
              height={38}
              src="./images/logo.svg"
              alt="홈으로 연결된 Linkbrary 로고"
            />
          </Link>
          <p className={styles['header__text']}>
            <span>이미 회원이신가요? </span>
            <Link className={styles['header__signin-link']} href="/signin">
              로그인 하기
            </Link>
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
            placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
          />
          <Input
            type="password"
            id="sign-confirm-password"
            label="비밀번호 확인"
            placeholder="비밀번호와 일치하는 값을 입력해주세요."
          />
          <button className={styles['submit-button']} type="button">
            회원가입
          </button>
        </form>

        <article className={styles['social-sign']}>
          <p>다른 방식으로 가입하기</p>
          <div className={styles['social-sign__icons']}>
            <Link href="https://www.google.com">
              <Image
                width={42}
                height={42}
                src="/images/google.png"
                alt="구글 아이콘"
              />
            </Link>
            <Link href="https://www.kakaocorp.com/page">
              <Image
                width={42}
                height={42}
                src="/images/kakaotalk.png"
                alt="카카오톡 아이콘"
              />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SignIn;
