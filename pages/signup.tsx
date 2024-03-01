import Image from 'next/image';
import styles from '@/styles/signup.module.css';
import Link from 'next/link';
import { SocialSign } from '@/components/SignForm/SocialSign';
import { SignupForm } from '@/components/SignForm/SignupForm';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter();

  useEffect(() => {
    const checkVaildUser = () => {
      if (localStorage.accessToken) {
        router.push('/folder');
      }
    };
    checkVaildUser();
  }, []);

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
        <SignupForm />
        <SocialSign type="signup" />
      </div>
    </div>
  );
};

export default Signup;
