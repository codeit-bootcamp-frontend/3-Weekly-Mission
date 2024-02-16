import "@/styles/CardList.css";
import "@/styles/Footer.css";
import "@/styles/Navbar.css";
import "@/styles/SharedPage.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import GlobalStyle from "@/styles/GlobalStyled";
import Head from "next/head";
import { useEffect, useState } from "react";
import { NavbarUserInfo } from "@/types/userType";
import { getUser } from "@/apis/api";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<NavbarUserInfo>();
  const checkUser = async () => {
    try {
      const res = await getUser();
      const userInfo: NavbarUserInfo = res.data[0];
      if (!userInfo) {
        throw new Error("유저 정보가 없습니다!");
      }
      setUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
        integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
        crossOrigin="anonymous"
      />
      <GlobalStyle />
      <Navbar user={user} />
      <Component user={user} {...pageProps} />
      <Footer />
    </>
  );
}
