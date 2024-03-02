import styles from '@/styles/sign.module.css';
import { SocialSign } from '@/components/SignPages/SocialSign';
import { SignupForm } from '@/components/SignPages/SignupForm';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SignHeader } from '@/components/SignPages/SignHeader';

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
        <SignHeader type="signup" />
        <SignupForm />
        <SocialSign type="signup" />
      </div>
    </div>
  );
};

export default Signup;
