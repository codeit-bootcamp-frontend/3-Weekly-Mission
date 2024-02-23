/* eslint-disable */

import { useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

export const KakaoShareButton = () => {
  const realUrl: string = 'https://adorable-malasada-14962e.netlify.app';

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Linkbrary',
        description: '세상의 모든 정보를 쉽게 저장하고 관리해 보세요',
        imageUrl: '/images/link-brary.png',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '링크 저장 하러가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <button
        className={styles['kakao-button']}
        type="button"
        onClick={() => {
          shareKakao();
        }}
      >
        <Image
          width={42}
          height={42}
          src="/images/kakao.png"
          alt="카카오톡 아이콘"
        />
        카카오톡
      </button>
    </>
  );
};
