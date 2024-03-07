/* eslint-disable react-hooks/exhaustive-deps */
import type { AppProps } from "next/app";
import { useCallback, useEffect, useState } from "react";
import { UserInterface } from "@/types/types";
import { useRouter } from "next/router";
import getUser from "@/api/getUser";
import Nav from "@/components/common/Nav/Nav";
import Footer from "@/components/common/Footer/Footer";
import "@/styles/reset.css";
import { AuthProvider } from "@/contexts/authProvider";

export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  const ExistNav = ["/", "/folder", "/shared"];

  return (
    <>
      <AuthProvider>
        {ExistNav.includes(route) && <Nav isSticky={route !== "/folder"} />}
        <Component {...pageProps} />;{ExistNav.includes(route) && <Footer />}
      </AuthProvider>
    </>
  );
}
