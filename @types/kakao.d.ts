// Kakao d.ts 확장
declare namespace Kakao {
  namespace Share {
    function sendDefault(params: {
      objectType: string;
      text: string;
      link: { mobileWebUrl: string; webUrl: string };
    }): void;
  }
}
