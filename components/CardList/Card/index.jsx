import { formatDate, uploadDate } from '@/utils/formatDate';
import { KebabButton } from '../../KebabButton/index';
import styles from './styles.module.css';

export const Card = ({ link, isActive, setActiveKebab }) => {
  const handleKebabButtonClick = e => {
    e.preventDefault();
    e.stopPropagation();

    setActiveKebab(link.id);
  };

  const handleCardBlur = () => {
    setActiveKebab(null);
  };

  const stopPropagation = e => {
    e.stopPropagation();
  };

  return (
    <>
      <a
        className={styles.card}
        href={link.url}
        target="_blank"
        rel="noreferrer"
        onClick={stopPropagation}
      >
        <div className={styles['card__image-container']}>
          <img
            className={styles['card__image']}
            src={link.image_source ? link.image_source : '/images/no-image.svg'}
            alt={link.title}
          />
        </div>
        <img
          className={styles['card__favorite-button']}
          src="/images/star.svg"
          width="34px"
          alt="즐겨찾기 아이콘"
        />
        <div className={styles['card__text']}>
          <div className={styles['card__text--header']}>
            <p className={styles['card__text--formatted-date']}>
              {formatDate(link)}
            </p>
            <button onClick={handleKebabButtonClick} onBlur={handleCardBlur}>
              <img src="/images/kebab.svg" width="21px" alt="케밥 아이콘" />
            </button>
            {isActive && <KebabButton link={link} />}
          </div>
          <p className={styles['card__text--description']}>
            {link.description}
          </p>
          <p className={styles['card__text--date']}>{uploadDate(link)}</p>
        </div>
      </a>
    </>
  );
};
