import { Html, Head, Main, NextScript } from "next/document";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <div id="modal-root" />
        <NextScript />
      </body>
      <script
        async
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
        integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
        crossOrigin="anonymous"
      ></script>
    </Html>
  );
}
