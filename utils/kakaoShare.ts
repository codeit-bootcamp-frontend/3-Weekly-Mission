declare global {
  interface Window {
    Kakao: any; // 또는 정확한 Kakao 타입을 찾아서 지정
  }
}

export const shareKakao = (url: string, folderName: string) => {
  if (!window.Kakao.isInitialized()) {
    const key = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
    if (!key) {
      return;
    }
    window.Kakao.init(key);
  }

  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "Linkbrary",
      description: `${folderName} 페이지`,
      imageUrl:
        "https://visitbusan.net/uploadImgs/files/cntnts/20211130150754165_wufrotr",
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: url,
        webUrl: url,
      },
    },
  });
};
