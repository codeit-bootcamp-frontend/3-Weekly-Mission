/* eslint-disable react-hooks/exhaustive-deps */
import type { AppProps } from "next/app";
import { useCallback, useEffect, useState } from "react";
import { UserInterface } from "@/types/types";
import { useRouter } from "next/router";
import getUser from "@/api/getUser";
import Nav from "@/components/common/Nav/Nav";
import Footer from "@/components/common/Footer/Footer";
import "@/styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  const [userValue, setUserValue] = useState<UserInterface>();
  const { route } = useRouter();

  const loadUser = useCallback(async () => {
    try {
      const { data } = await getUser();
      if (!data) return;
      setUserValue((prevValue) => {
        return { ...prevValue, ...data[0] };
      });
    } catch (error) {
      return;
    }
  }, []);

  const ExistNav = ["/", "/folder", "/shared"];

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      {ExistNav.includes(route) && (
        <Nav profile={userValue} isSticky={route !== "/folder"} />
      )}
      <Component {...pageProps} />;{ExistNav.includes(route) && <Footer />}
    </>
  );
}
