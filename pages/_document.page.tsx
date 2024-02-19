import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/next.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <body>
        <Main />
        <div id='portal' />
        <NextScript />
      </body>
    </Html>
  );
}
