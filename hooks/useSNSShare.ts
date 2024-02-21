import { useEffect } from 'react';

type TUseSNSShareProps = {
  title: string;
  origin: string;
  userId: number | null;
  folderId: number | null;
};

const useSNSShare = ({ title, origin, userId, folderId }: TUseSNSShareProps) => {
  if ((userId !== 0 && Boolean(!userId)) || (folderId !== 0 && Boolean(!folderId))) {
    return {
      shareToFacebook: () => {},
      shareToKakaotalk: () => {},
      copyFolderUrl: () => {},
    };
  }

  const url = `${origin}/shared?user=${userId}&folder=${folderId}`;

  /**
   * @see {@link https://become-a-developer.tistory.com/63} - Parameter 'href' should represent a valid URL 에러 뜰 시.  URL을 읽어들일 수 없음 에러 뜰 시
   */
  // {호스트 주소}/shared?user={현재 로그인 중인 유저 ID}&folder={현재 열려있는 폴더 ID}
  const shareToFacebook = () => {
    const sharedLink = encodeURIComponent(url);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  const shareToKakaotalk = () => {
    if (window.Kakao === undefined) {
      return;
    }

    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    }

    kakao.Share.sendDefault({
      objectType: 'text',
      text: title,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    });
  };

  const copyFolderUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      console.log('Content copied to clipboard');
    } catch (e) {
      console.error('Failed to copy');
    }
  };

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js';
    script.integrity = process.env.NEXT_PUBLIC_KAKAO_INTEGRITY;
    script.crossOrigin = 'anonymous';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return {
    shareToFacebook,
    shareToKakaotalk,
    copyFolderUrl,
  };
};

export { useSNSShare };
