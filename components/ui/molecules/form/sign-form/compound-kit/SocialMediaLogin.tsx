import classNames from 'classnames/bind';
import Image from 'next/image';

import styles from './SocialMediaLogin.module.css';

const cn = classNames.bind(styles);

const SocialMediaLogin = () => {
  return (
    <div className={cn('social-media-area')}>
      <span className={cn('social-media-area-text')}>소셜 로그인</span>
      <ul className={cn('social-media-link-box')}>
        <li>
          <a className={cn('social-media-link')} href='https://www.google.com/'>
            <Image fill alt='구글 로그인 바로가기 아이콘' src='/images/site-map/google.svg' />
          </a>
        </li>
        <li>
          <a className={cn('social-media-link')} href='https://www.kakaocorp.com/page/'>
            <Image fill alt='카카오 로그인 바로가기 아이콘' src='/images/site-map/kakao.svg' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaLogin;
