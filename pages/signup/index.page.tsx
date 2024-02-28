import { useEffect } from 'react';

import { useRouter } from 'next/router';

import SignFormHeader from '@components/ui/organisms/header/sign-page-header/SignFormHeader';
import { Wrap } from '@pages/signin/index.page';

import { getAccessToken } from '@utils/local-storage/getAccessToken';

import SignupForm from './comp/signup-form/SignupForm';

const Signup = () => {
  const router = useRouter();

  useEffect(() => {
    if (getAccessToken()) {
      router.push('/folder');
    }
  }, [router]);

  return (
    <Wrap>
      <SignFormHeader router={router} />
      <SignupForm router={router} />
    </Wrap>
  );
};

export default Signup;
