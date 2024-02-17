import Footer from "@/components/Footer/Footer";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";

declare global {
  interface Window {
    Kakao: any;
  }
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
