import { getFolderSample } from '@/pages/api/api';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export const Favorites = () => {
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    (async () => {
      const data = await getFolderSample();
      setFavorites(data);
    })();
  }, []);

  return (
    <div className={styles['favorites-container']}>
      <div className={styles.favorites}>
        <img
          className={styles['favorites__owner-image']}
          src={favorites?.owner?.profileImageSource}
          width="60"
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
