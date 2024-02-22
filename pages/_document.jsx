import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/*meta tag // outline*/}
        <meta name="keywords" content="linkbrary"/>
        <meta name="description" content="세상의 모든 정보를 쉽게 저장하고 관리해보세요."/>
        <meta name="robots" content="index,follow"/>

        {/*meta tag // settings*/}
        <meta content="text/html;" charSet="UTF-8" name="Content-Type"/>

        {/*meta tag // sns: Facebook*/}
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Linkbrary"/>
        <meta property="og:description" content="세상의 모든 정보를 쉽게 저장하고 관리해보세요."/>
        <meta property="og:image" content="resources/featured_libraries.jpg"/>
        <meta property="og:url" content="https://sprint-test-duke.netlify.app"/>

        {/*meta tag // sns: twitter *****Twitter allows meta-tags to be substituted by OG ******/}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image"
              content="https://sprint-test-duke.netlify.app/resources/featured_libraries.jpg"/>


        {/*styles*/}
        {/*<link rel="stylesheet" as="style"*/}
        {/*      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"/>*/}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
