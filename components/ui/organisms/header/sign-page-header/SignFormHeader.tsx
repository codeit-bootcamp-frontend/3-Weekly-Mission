import classNames from 'classnames/bind';
import Link from 'next/link';
import { NextRouter } from 'next/router';

import LinkbraryLogo from '@components/ui/atoms/icon/logo/LinkbraryLogo';

import styles from './SignFormHeader.module.css';

const cn = classNames.bind(styles);

type SignFormHeaderProps = {
  router: NextRouter;
};

const SignFormHeader = ({ router }: SignFormHeaderProps) => {
  const path = router.pathname;

  return (
    <header className={cn('header')}>
      <LinkbraryLogo />
      <p className={cn('header-message')}>
        {path === '/signin' ? '회원이 아니신가요?' : '이미 회원이신가요?'}
        <Link className={cn('header-link')} href='/signup'>
          {path === '/signin' ? '회원 가입하기' : '로그인하기'}
        </Link>
      </p>
    </header>
  );
};

export default SignFormHeader;
