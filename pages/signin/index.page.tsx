import { useRouter } from 'next/router';
import styled from 'styled-components';

import SignFormHeader from '@components/ui/organisms/header/sign-page-header/SignFormHeader';

import SigninForm from './comp/signin-form/SigninForm';

const Signin = () => {
  const router = useRouter();

  return (
    <Wrap>
      <SignFormHeader router={router} />
      <SigninForm router={router} />
    </Wrap>
  );
};

export default Signin;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3rem;

  position: relative;

  padding-top: 23.8rem;
`;
