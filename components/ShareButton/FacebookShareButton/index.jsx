/* eslint-disable */

import styles from './styles.module.css';

export const FacebookShareButton = () => {
  const realUrl = 'https://adorable-malasada-14962e.netlify.app';
  const resultUrl = window.location.href;

  const shareFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + realUrl);
  };

  return (
    <>
      <button
        className={styles['facebook-button']}
        onClick={() => {
          shareFacebook();
        }}
      >
        <img src="/images/facebook.png" alt="페이스북 아이콘" width="42" />
        페이스북
      </button>
    </>
  );
};
