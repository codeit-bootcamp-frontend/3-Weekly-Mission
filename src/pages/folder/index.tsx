import { useEffect, useState } from 'react';
import { getFolderLinks } from '@/api/getData';
import useStickyState from '@/hooks/useStickyState';
import { Header } from '@/components/Header/index';
import { AddLinkInput } from '@/components/AddLinkInput/index';
import { SearchInput } from '@/components/SearchInput/index';
import { FolderCardList } from '@/components/FolderCardList/index';
import { Footer } from '@/components/Footer/index';
import styles from '@/styles/folder.module.css';
import { FolderLink, SelectedFolder } from '@/types/Common';
import { GetServerSideProps } from 'next';
import { ALL_CONTENTS_FOLDER } from '@/constants/constants';
import { redirectTo } from '@/utils/redirectTo';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

interface Props {
  initialLinksData: FolderLink[];
}

const Folder = ({ initialLinksData }: Props) => {
  const [isSticky, setIsSticky] = useStickyState(true);
  const [folderLinks, setFolderLinks] =
    useState<FolderLink[]>(initialLinksData);
  const [initialFolderLinks, setInitialFolderLinks] =
    useState<FolderLink[]>(initialLinksData);
  const [selectedFolder, setSelectedFolder] = useState<SelectedFolder>({
    id: ALL_CONTENTS_FOLDER.ID,
    name: ALL_CONTENTS_FOLDER.NAME,
  });
  const router = useRouter();

  useEffect(() => {
    const hasAccessToken = Boolean(Cookies.get('accessToken'));
    redirectTo(!hasAccessToken, '/signin', router);
  }, []);

  return (
    <div>
      <Header isSticky={!isSticky} />
      <AddLinkInput />
      <div className={styles.section}>
        <SearchInput
          folderLinks={folderLinks}
          setFolderLinks={setFolderLinks}
          initialFolderLinks={initialFolderLinks}
        />
        <FolderCardList
          folderLinks={folderLinks}
          setFolderLinks={setFolderLinks}
          selectedFolder={selectedFolder}
          setSelectedFolder={setSelectedFolder}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Folder;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.headers.cookie;
  if (!cookies) {
    return { notFound: true };
  }
  const accessToken = cookies
    .split('; ')
    .find((row) => row.startsWith('accessToken='))
    ?.split('=')[1];

  const folderLinksData: FolderLink[] = await getFolderLinks(
    ALL_CONTENTS_FOLDER.ID,
    accessToken,
  );
  return {
    props: {
      initialLinksData: folderLinksData,
    },
  };
};
