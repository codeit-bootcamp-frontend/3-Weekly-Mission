import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import { IProfileData } from '@api/folder-page/getProfileData';

import styles from './CommonHeader.module.css';
import LoginButton from './comp/login-button/LoginButton';
import LoginSuccessProfile from './comp/login-success-profile/LoginSuccessProfile';

const cn = classNames.bind(styles);

type THeaderProps = {
  profileData: IProfileData | null;
};

const CommonHeader = ({ profileData }: THeaderProps) => {
  return (
    <header id='header' role='heading' aria-level={1}>
      <nav className={cn('gnb', 'absolute')} role='navigation'>
        <Link href='/' rel='nofollow' className={cn('logo')}>
          <Image fill alt='symlink logo linked to home' src={'/images/logo/landing-logo.svg'} />
        </Link>
        {profileData?.email ? <LoginSuccessProfile profileData={profileData} /> : <LoginButton>로그인</LoginButton>}
      </nav>
    </header>
  );
};

export default CommonHeader;
