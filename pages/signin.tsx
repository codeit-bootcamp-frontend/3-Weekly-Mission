import Image from 'next/image';
import styles from '@/styles/signin.module.css';
import Link from 'next/link';
import { SigninForm } from '@/components/SigninForm';
import { SocialSign } from '@/components/SocialSign';
import { MouseEvent } from 'react';
import { useRouter } from 'next/router';

const SignIn = () => {
  const router = useRouter();

  const handleSignTextClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (localStorage.accessToken) {
      router.push('/folder');
    } else {
      router.push('signup');
    }
  };

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
            <Link
              className={styles['header__signup-link']}
              href="/signup"
              onClick={handleSignTextClick}
            >
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
