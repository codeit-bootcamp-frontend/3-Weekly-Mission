import { getFolderSample } from '@/api/api';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { FolderSample } from '@/types/Common';

export const Favorites = () => {
  const [favorites, setFavorites] = useState<FolderSample | undefined>();

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
          src={
            favorites
              ? favorites.owner?.profileImageSource
              : '/images/no-image.svg'
          }
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
