import { getFolderSample } from '@/api/api';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { FolderSample } from '@/types/Common';

export const Favorites = () => {
  const [favorites, setFavorites] = useState<FolderSample>({
    count: 0,
    id: 0,
    links: [],
    name: '',
    owner: { id: 0, name: '', profileImageSource: '' },
  });

  useEffect(() => {
    (async () => {
      const data = await getFolderSample();
      setFavorites(data);
    })();
  }, []);

  return (
    <div className={styles['favorites-container']}>
      <div className={styles.favorites}>
        <Image
          width={60}
          height={60}
          src={favorites?.owner?.profileImageSource}
          alt="프로필 이미지"
        />
        <p className={styles['favorites__owner-name']}>
          {favorites?.owner?.name}
        </p>
        <p className={styles['favorites-name']}>{favorites?.name}</p>
      </div>
    </div>
  );
};
