import { useRouter } from 'next/router';

import SignFormHeader from '@components/ui/organisms/header/sign-page-header/SignFormHeader';
import { Wrap } from '@pages/signin/index.page';

import SignupForm from './comp/signup-form/SignupForm';

const Signup = () => {
  const router = useRouter();

  return (
    <Wrap>
      <SignFormHeader router={router} />
      <SignupForm router={router} />
    </Wrap>
  );
};

export default Signup;
