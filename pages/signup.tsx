import styles from '@/styles/sign.module.css';
import { SocialSign } from '@/components/SignPages/SocialSign';
import { SignupForm } from '@/components/SignPages/SignupForm';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SignHeader } from '@/components/SignPages/SignHeader';
import { redirectIfAuth } from '@/utils/redirectIfAuth';

const Signup = () => {
  const router = useRouter();

  useEffect(() => {
    redirectIfAuth('/folder', router);
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
