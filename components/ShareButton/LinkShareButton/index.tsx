/* eslint-disable */

import Image from 'next/image';
import styles from './styles.module.css';

export const LinkShareButton = () => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        className={styles['link-copy-button']}
        type="button"
        onClick={() => {
          handleCopyClipBoard(location.href);
        }}
      >
        <Image
          width={42}
          height={42}
          src="/images/link.png"
          alt="링크 복사 아이콘"
        />
        링크 복사
      </button>
    </>
  );
};
