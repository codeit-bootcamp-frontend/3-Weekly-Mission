// 전체에 적용할 때 _app.tsx

import "../styles/global.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
