import classNames from 'classnames/bind';
import Image from 'next/image';

import { ProcessedFolderOwnerProfile } from '@pages/shared/[folderId].page';

import styles from './Banner.module.css';

const cn = classNames.bind(styles);

const Banner = ({
  folderOwnerInfo: { name, image_source, folderName },
}: {
  folderOwnerInfo: ProcessedFolderOwnerProfile;
}) => {
  return (
    <div className={cn('hero-banner')}>
      <div className={cn('avatar-box')}>
        <div className={cn('avatar-img__wrap')}>
          <Image
            fill
            className={cn('avatar')}
            alt='아바타'
            src={!image_source ? '/images/shared/shared-avatar.svg' : image_source}
          />
        </div>
        <span className={cn('folder-owner')}>{name}</span>
      </div>
      <h1 className={cn('folder-name')}>{folderName}</h1>
    </div>
  );
};

export default Banner;
