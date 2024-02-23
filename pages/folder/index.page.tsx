import { useMemo, useRef } from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { getFolderCategory, TFolderCategoryData } from '@api/folder-page/getFolderCategory';
import { useTargetVisibleState } from '@hooks/useTargetVisibleState';

import AddLink from './comp/add-link/AddLink';
import Article from './comp/article/Article';
import Footer from './comp/footer/Footer';
import Header from './comp/header/Header';
import FolderPageServerSidePropContextProvider from './context/folderPageContext';

export interface FolderCategoryDataWithIdTotal extends Partial<Omit<TFolderCategoryData, 'id' | 'name'>> {
  id: number | 'total';
  name: string;
}

interface ServerSideProps {
  folderCategoryList: FolderCategoryDataWithIdTotal[];
}

// 실제로는 로그인한 유저의 userId를 받아서 그 유저가 저장한 폴더 카테고리를 보여주도록 해야 함.
export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {
  // TODO: userId는 로그인한 유저의 id를 받아와야 함. 나중에 default 1도 없애셈.
  const { userId = '1' } = context.query;

  let folderCategoryList: FolderCategoryDataWithIdTotal[] = [];

  try {
    const res = await getFolderCategory(userId as string);

    if (res) {
      const { data } = res;

      if (data.length) {
        folderCategoryList.unshift({ name: '전체', id: 'total' });
      }

      folderCategoryList = [...folderCategoryList, ...data];
    }
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      folderCategoryList,
    },
  };
};

const FolderPage = <T extends HTMLElement>({
  folderCategoryList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const addLinkRef = useRef<T | null>(null);
  const footerRef = useRef<T | null>(null);

  const isAddLinkVisible = useTargetVisibleState(addLinkRef, ({ target }) => {
    if (target && target.clientHeight <= document.documentElement.scrollTop) {
      return false;
    }

    return true;
  });

  const isFooterVisible = useTargetVisibleState(footerRef);

  const shouldAddLinkLocateBottom = useMemo(
    () => !isAddLinkVisible && !isFooterVisible,
    [isAddLinkVisible, isFooterVisible],
  );

  return (
    <>
      <Head>
        <title>Linkbrary folder page</title>
      </Head>
      <FolderPageServerSidePropContextProvider folderCategoryList={folderCategoryList}>
        <Header />
        <AddLink ref={addLinkRef} shouldAddLinkLocateBottom={shouldAddLinkLocateBottom} />
        <Article />
        <Footer footerRef={footerRef} />
      </FolderPageServerSidePropContextProvider>
    </>
  );
};

export default FolderPage;
