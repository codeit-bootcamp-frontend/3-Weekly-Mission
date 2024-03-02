import styles from '@/styles/sign.module.css';
import { SigninForm } from '@/components/SignPages/SigninForm';
import { SocialSign } from '@/components/SignPages/SocialSign';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SignHeader } from '@/components/SignPages/SignHeader';
import { redirectTo } from '@/utils/redirectTo';
import Cookies from 'js-cookie';

const SignIn = () => {
  const router = useRouter();

  useEffect(() => {
    const hasAccessToken = Boolean(Cookies.get('accessToken'));
    redirectTo(hasAccessToken, '/folder', router);
  }, []);

  return (
    <div className={styles['background-container']}>
      <div className={styles['sign-section']}>
        <SignHeader type="signin" />
        <SigninForm />
        <SocialSign type="signin" />
      </div>
    </div>
  );
};

export default SignIn;
