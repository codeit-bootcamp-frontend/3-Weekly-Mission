import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@style/globalStyle';
import { palette } from '@style/theme';
import '@style/global.css';

import { Modal, ModalProvider } from '@components/provider/modal';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={palette}>
      <GlobalStyle />
      <ModalProvider>
        <Component {...pageProps} />
        <Modal />
      </ModalProvider>
    </ThemeProvider>
  );
}
