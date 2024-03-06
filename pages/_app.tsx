import "@/styles/CardList.css";
import "@/styles/Footer.css";
import "@/styles/Navbar.css";
import "@/styles/SharedPage.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import GlobalStyle from "@/styles/GlobalStyled";
import Head from "next/head";
import { useState } from "react";
import { NavbarUserInfo } from "@/types/userType";
import Script from "next/script";
import useUserChange from "@/hooks/useUserChange";

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<NavbarUserInfo>();
  useUserChange(setUser);

  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <noscript></noscript>
      </Head>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
        integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
        crossOrigin="anonymous"
      />
      <GlobalStyle />
      <Navbar user={user} />
      <Component user={user} setUser={setUser} {...pageProps} />
      <Footer />
    </>
  );
}
