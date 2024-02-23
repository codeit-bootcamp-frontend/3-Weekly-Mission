import { formatDate, uploadDate } from '@/utils/formatDate';
import { KebabButton } from '../../KebabButton/index';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FolderLink } from '@/types/Common';
import { MouseEvent, useState } from 'react';

interface Props {
  folderLink: FolderLink;
  isActive: boolean;
  activeKebab: string | number | null;
  setActiveKebab: React.Dispatch<React.SetStateAction<string | number | null>>;
}

export const Card = ({
  folderLink,
  isActive,
  activeKebab,
  setActiveKebab,
}: Props) => {
  const [hasError, setHasError] = useState(false);
  const handleKebabButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveKebab(activeKebab === folderLink.id ? null : folderLink.id);
  };

  const handleCardBlur = () => {
    if (activeKebab !== folderLink.id) {
      setActiveKebab(null);
    }
  };

  const imageUrl: string | null = folderLink.image_source;
  const absoluteImageUrl = imageUrl?.startsWith('//')
    ? `https:${imageUrl}`
    : imageUrl;
  const fallbackImgUrl = '/images/no-image.svg';
  const imgSrc = (() => {
    if (hasError || !absoluteImageUrl) {
      return fallbackImgUrl;
    }
    return absoluteImageUrl;
  })();

  return (
    <>
      <Link
        className={styles.card}
        href={folderLink.url ?? '/404'}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles['card__image-container']}>
          <Image
            fill
            src={imgSrc}
            alt="카드 이미지"
            style={{ objectFit: 'cover' }}
            onError={() => {
              setHasError(true);
            }}
          />
        </div>
        <Image
          width={34}
          height={34}
          className={styles['card__favorite-button']}
          src="/images/star.svg"
          alt="즐겨찾기 아이콘"
        />
        <div className={styles['card__text']}>
          <div className={styles['card__text--header']}>
            <p className={styles['card__text--formatted-date']}>
              {formatDate(folderLink)}
            </p>
            <button
              type="button"
              onClick={handleKebabButtonClick}
              onBlur={handleCardBlur}
            >
              <Image
                width={21}
                height={21}
                src="/images/kebab.svg"
                alt="케밥 아이콘"
              />
            </button>
            {isActive && <KebabButton folderLink={folderLink} />}
          </div>
          <p className={styles['card__text--description']}>
            {folderLink.description}
          </p>
          <p className={styles['card__text--date']}>{uploadDate(folderLink)}</p>
        </div>
      </Link>
    </>
  );
};
