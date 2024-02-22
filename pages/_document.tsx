import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Linkbrary" />
        <meta
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta
          property="og:image"
          content="https://s3-alpha-sig.figma.com/img/2080/5edd/4edb32d644767d750d576d9e6c790df2?Expires=1702857600&Signature=k8FtsVa22S~CJQkqCVO8sFstQN9UR0atgM7FoM1HzRcT2thIlAy1x4M2GUKARPJafhJpQzsIfMWs5~lbLqnsMC96cV87woOdIWWxR93SZX16ZJTW-uEIADmTc~SS2Pm-qa3Eb-xbj18Z-yXZIeWgzfDZDDZs9QCleC1XENqYn7QTpu~~c7cNcjCNjpZb3AlCr0uI-yTLht5Wb1smue4hw5BIeffjBEK-k2lZosrNk18Ae34EB82BKbxZIejixgwlaC5AJ04cvh1UlXgwnKII3GxFqJ3T3g7tjRO2Ys-5RY584vsP15iIxOZJ98-UKr2CMeFeukk2PtlLP7qBnj0oWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
          integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
