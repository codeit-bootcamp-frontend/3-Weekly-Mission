import Image from 'next/image';

import styles from './Bookmark.module.css';

type TBookmarkProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Bookmark = ({ onClick, ...rest }: TBookmarkProps) => {
  return (
    <button type='button' {...rest} onClick={onClick} className={styles['link-card-bookmark-btn']}>
      <Image
        fill
        className={styles['link-card-bookmark-btn-img']}
        src={'/images/folder/star.svg'}
        alt='링크 카드 북마크 이미지'
      />
    </button>
  );
};

export default Bookmark;
