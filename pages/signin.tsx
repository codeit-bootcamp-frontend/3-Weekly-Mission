import Image from 'next/image';
import styles from '@/styles/signin.module.css';
import Link from 'next/link';
import { SigninForm } from '@/components/SignForm/SigninForm';
import { SocialSign } from '@/components/SignForm/SocialSign';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SignIn = () => {
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
            <span>회원이 아니신가요? </span>
            <Link className={styles['header__signup-link']} href="/signup">
              회원 가입하기
            </Link>
          </p>
        </div>
        <SigninForm />
        <SocialSign type="signin" />
      </div>
    </div>
  );
};

export default SignIn;
