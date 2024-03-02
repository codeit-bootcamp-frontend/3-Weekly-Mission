import Image from 'next/image';
import styles from './styles.module.css';
import { MouseEvent, ReactNode } from 'react';

interface Props {
  title: string;
  handleModalClose: (e: MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
  subTitle?: string | null;
}

export const Modal = ({
  title,
  handleModalClose,
  children,

  subTitle = undefined,
}: Props) => {
  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      handleModalClose(e);
    }
  };

  return (
    <>
      <div className={styles.container} onClick={handleModalClick}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>{title}</h1>
            {subTitle && <h2>{subTitle}</h2>}
          </div>
          <button
            className={styles['close-button']}
            type="button"
            onClick={(e) => handleModalClose(e)}
          >
            <Image
              width={24}
              height={24}
              src="/images/close.png"
              alt="닫기 버튼"
            />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};
