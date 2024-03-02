import { getFolderInformation, getFolderOwner } from '@/api/getData';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { User, Folder } from '@/types/Common';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

export const Favorites = () => {
  const [owner, setOwner] = useState<User | undefined>();
  const [folder, setFolder] = useState<Folder | undefined>();
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const folderId = router.query['folderId'] as string | number;
      const OwnerData = await getFolderOwner(1);
      setOwner(OwnerData);
      try {
        const folderData = await getFolderInformation(folderId);
        setFolder(folderData);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError?.response?.status === 404) {
          setErrorMessage(
            (axiosError.response.data as { message: string }).message,
          );
          return;
        }
        throw error;
      }
    })();
  }, []);

  return (
    <div className={styles['favorites-container']}>
      <div className={styles.favorites}>
        <Image
          width={60}
          height={60}
          src={owner ? owner.image_source : '/images/no-image.svg'}
          alt="프로필 이미지"
        />

        <p className={styles['favorites__owner-name']}>{owner?.name}</p>
        <p className={styles['favorites-name']}>
          {folder ? folder.name : errorMessage}
        </p>
      </div>
    </div>
  );
};
