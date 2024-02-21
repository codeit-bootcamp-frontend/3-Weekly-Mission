import classNames from 'classnames/bind';
import Image from 'next/image';

import { TSampleFolderUserInfo } from '@api/shared-page/getSampleUserFolders';

import styles from './Banner.module.css';

const cn = classNames.bind(styles);

const Banner = ({ userInfo }: { userInfo: TSampleFolderUserInfo | null }) => {
  return (
    <div className={cn('hero-banner')}>
      <div className={cn('avatar-box')}>
        <div className={cn('avatar-img__wrap')}>
          <Image
            fill
            className={cn('avatar')}
            alt='아바타'
            src={!userInfo ? '/images/shared/shared-avatar.svg' : userInfo.owner.profileImageSource}
          />
        </div>
        <span className={cn('folder-owner')}>{userInfo ? userInfo.owner.name : '@코드잇'}</span>
      </div>
      <h1 className={cn('folder-name')}>{userInfo ? userInfo.name : '⭐️ 즐겨찾기'}</h1>
    </div>
  );
};

export default Banner;
