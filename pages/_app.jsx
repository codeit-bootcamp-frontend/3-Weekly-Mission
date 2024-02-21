import GlobalStyles from "@/styles/GlobalStyles";
import Head from "next/head";
import UserProvider from "@/contexts/UserProvider";

export default function App({Component, pageProps}) {
  return (
      <>
        <Head>
          <title>Linkbrary</title>
          <meta name="viewport"
                content="width=device-width, initial-scale=1.0"/>
        </Head>
        <GlobalStyles/>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </>
  );
}
``
