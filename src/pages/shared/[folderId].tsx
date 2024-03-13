import { useState } from 'react';
import useStickyState from '@/hooks/useStickyState';
import { Header } from '@/components/Header/index';
import { Favorites } from '@/components/Favorites/index';
import { SearchInput } from '@/components/SearchInput/index';
import { SharedCardList } from '@/components/SharedCardList';
import { Footer } from '@/components/Footer/index';
import { FolderLink } from '@/types/Common';
import { GetServerSideProps } from 'next';
import styles from '@/styles/folder.module.css';
import { getSharedFolderLinks } from '@/api/getData';
import { redirectIfNotAuth } from '@/utils/redirectIfNotAuth';
import { extractAccessToken } from '@/utils/extractAccessToken';

interface Props {
  initialLinksData: FolderLink[];
}

const Shared = ({ initialLinksData }: Props) => {
  const [isSticky, setIsSticky] = useStickyState(true);
  const [folderLinks, setFolderLinks] =
    useState<FolderLink[]>(initialLinksData);
  const [initialFolderLinks, setInitialFolderLinks] =
    useState<FolderLink[]>(initialLinksData);

  return (
    <>
      <Header isSticky={!isSticky} />
      <Favorites />
      <div className={styles.section}>
        <SearchInput
          folderLinks={folderLinks}
          setFolderLinks={setFolderLinks}
          initialFolderLinks={initialFolderLinks}
        />
        <SharedCardList folderLinks={folderLinks} />
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params) {
    return { notFound: true };
  }
  const redirect = redirectIfNotAuth(context, '/signin');
  if (redirect) {
    return redirect;
  }

  const folderId = context.params['folderId'] as string | number;
  const folderLinksData: FolderLink[] = await getSharedFolderLinks(folderId);

  return {
    props: {
      initialLinksData: folderLinksData,
    },
  };
};

export default Shared;
