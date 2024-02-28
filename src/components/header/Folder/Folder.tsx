import styles from './Folder.module.css';
import classNames from 'classnames/bind';
import { User } from '@/pages/folder';
import { Folder } from '@/pages/folder';
import { useEffect, useState } from 'react';
import { getFolderById, getUserById } from '@/pages/api/api';

const cn = classNames.bind(styles);

interface Props {
  folderId: number;
  userId: number;
}

export default function Folder({ folderId, userId }: Props) {
  const [user, setUser] = useState<User>(null);
  const [folder, setFolder] = useState<Folder>(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await getUserById(userId);
      if (!data) return;
      setUser(data[0]);
    }

    async function getFolder() {
      const { data } = await getFolderById(+folderId);
      if (!data) return;
      setFolder(data[0]);
    }

    getFolder();
    getUser();
  }, [userId, folderId]);

  return (
    <div className={cn('information')}>
      <div className={cn('folder-info')}>
        <div className={cn('user-info')}>
          <img
            className={cn('owner-profile')}
            src={user?.image_source || '/images/logo.svg'}
            alt="소유자 프로필"
          />
          <span className={cn('owner-name')}>{user?.name || 'anonymous'}</span>
        </div>
        <div className={cn('folder-name')}>{folder?.name || 'Linkbrary'}</div>
      </div>
    </div>
  );
}
