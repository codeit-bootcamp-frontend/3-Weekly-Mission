import styles from './Folder.module.css';
import classNames from 'classnames/bind';
import { User } from '@/pages/folder';
import { Folder } from '@/pages/shared/[folderId]';

const cn = classNames.bind(styles);

interface Props {
  user: User;
  folder: Folder;
}

export default function Folder({ user, folder }: Props) {
  return (
    <div className={cn('information')}>
      <div className={cn('folder-info')}>
        <div className={cn('user-info')}>
          <img
            className={cn('owner-profile')}
            src={user.image_source || '/images/logo.svg'}
            alt="소유자 프로필"
          />
          <span className={cn('owner-name')}>{user.name || 'anonymous'}</span>
        </div>
        <div className={cn('folder-name')}>{folder.name || 'Linkbrary'}</div>
      </div>
    </div>
  );
}
