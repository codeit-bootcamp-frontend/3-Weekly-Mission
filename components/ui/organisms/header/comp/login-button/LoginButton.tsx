import { PropsWithChildren } from 'react';

import AnchorButton from '@components/ui/atoms/button/anchor-btn/AnchorButton';

type TLoginButtonProps = PropsWithChildren;

const LoginButton = ({ children }: TLoginButtonProps) => {
  return (
    <AnchorButton rel='nofollow' width='short' href='/src/pages/auth/signin/'>
      {children}
    </AnchorButton>
  );
};

export default LoginButton;
