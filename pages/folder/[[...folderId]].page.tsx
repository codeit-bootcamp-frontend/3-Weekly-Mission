import { useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { getAccessToken } from '@utils/local-storage/getAccessToken';

import Layout from './layout/Layout';

const FolderPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!getAccessToken()) {
      router.push('/signin');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Linkbrary folder page</title>
      </Head>
      <Layout />
    </>
  );
};

export default FolderPage;
