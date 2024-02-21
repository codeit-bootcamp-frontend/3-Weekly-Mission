import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import '@style/global.css';
import { GlobalStyle } from '@style/globalStyle';
import { palette } from '@style/theme';

import { Modal, ModalProvider } from '@components/provider/modal';

import type {} from 'styled-components/cssprop';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/next.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <ThemeProvider theme={palette}>
        <GlobalStyle />
        <ModalProvider>
          <Component {...pageProps} />
          <Modal />
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}
