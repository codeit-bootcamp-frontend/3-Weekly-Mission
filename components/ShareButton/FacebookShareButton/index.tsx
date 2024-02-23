/* eslint-disable */

import Image from 'next/image';
import styles from './styles.module.css';

export const FacebookShareButton = () => {
  const realUrl: string = 'https://adorable-malasada-14962e.netlify.app';

  const shareFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + realUrl);
  };

  return (
    <>
      <button
        className={styles['facebook-button']}
        type="button"
        onClick={() => {
          shareFacebook();
        }}
      >
        <Image
          width={42}
          height={42}
          src="/images/facebook.png"
          alt="페이스북 아이콘"
        />
        페이스북
      </button>
    </>
  );
};
