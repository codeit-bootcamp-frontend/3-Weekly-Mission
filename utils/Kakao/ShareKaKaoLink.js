export const shareKakao = (route, title) => {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init("39e36379232c0a9c4af7969a3d7593ea"); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    kakao.Link.sendDefault({
      objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: title, // 인자값으로 받은 title
        description: "항상 행복하세요", // 인자값으로 받은 title
        imageUrl:
          "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13212676&filePath=L2Rpc2sxL25ld2RhdGEvMjAxOS8yMS9DTFMxMDAwNC8xMzIxMjY3Nl9XUlQyMDE5MTAwOF8x&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004",
        link: {
          mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
          webUrl: route,
        },
      },
      buttons: [
        {
          title: title,
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  }
};
