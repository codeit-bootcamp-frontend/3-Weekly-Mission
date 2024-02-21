import Head from 'next/head';

import Article from './comp/article/Article';
import Banner from './comp/banner/Banner';
import Footer from './comp/footer/Footer';
import Header from './comp/header/Header';
import { useGetUserFolders } from './hooks/useGetUserFolders';

const SharedPage = () => {
  const { links, userInfo } = useGetUserFolders();

  return (
    <>
      <Head>
        <title>Linkbrary shared page</title>
      </Head>
      <Header />
      <Banner userInfo={userInfo} />
      <Article links={links} />
      <Footer />
    </>
  );
};

export default SharedPage;
