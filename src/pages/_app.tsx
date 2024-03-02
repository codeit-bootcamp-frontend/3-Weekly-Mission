import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

interface ShareMethods {
  sendDefault: (settings: {
    objectType: 'feed';
    content: {
      title: string;
      description: string;
      imageUrl: string;
      link: {
        mobileWebUrl: string;
        webUrl?: string;
      };
    };
    buttons: Array<{
      title: string;
      link: {
        mobileWebUrl: string;
        webUrl?: string;
      };
    }>;
  }) => void;
}
interface AuthMethods {
  login: (settings: {
    success: (response: Record<string, unknown>) => void;
    fail: (error: Record<string, unknown>) => void;
  }) => void;
  logout: (callback: () => void) => void;
}

interface APIMethods {
  request: (settings: {
    url: string;
    success: (response: Record<string, unknown>) => void;
    fail?: (error: Record<string, unknown>) => void;
    always?: (response: Record<string, unknown>) => void;
  }) => void;
}

declare global {
  interface Window {
    Kakao: {
      init: (apiKey: string | undefined) => void;
      isInitialized: () => boolean;
      Share: ShareMethods;
      Auth: AuthMethods;
      API: APIMethods;
    };
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
