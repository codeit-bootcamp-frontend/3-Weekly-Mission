import '@/styles/index.css';
import '@/styles/reset.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import dotenv from 'dotenv';

dotenv.config();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.Kakao.cleanup();
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_AppKey);
  });

  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <div id="modal" />
      <Component {...pageProps} />
    </>
  );
}
