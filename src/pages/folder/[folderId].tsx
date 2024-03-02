import { useEffect, useState } from 'react';
import { getFolderLinks, getSelectedFolder } from '@/api/getData';
import useStickyState from '@/hooks/useStickyState';
import { Header } from '@/components/Header/index';
import { AddLinkInput } from '@/components/AddLinkInput/index';
import { SearchInput } from '@/components/SearchInput/index';
import { FolderCardList } from '@/components/FolderCardList/index';
import { Footer } from '@/components/Footer/index';
import styles from '@/styles/folder.module.css';
import { Folder, FolderLink, SelectedFolder } from '@/types/Common';
import { GetServerSideProps } from 'next';
import { redirectTo } from '@/utils/redirectTo';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

interface Props {
  initialSelectedFolder: Folder;
  initialLinks: FolderLink[];
}

const Folder = ({ initialSelectedFolder, initialLinks }: Props) => {
  const [isSticky, setIsSticky] = useStickyState(true);
  const [folderLinks, setFolderLinks] = useState<FolderLink[]>(initialLinks);
  const [initialFolderLinks, setInitialFolderLinks] =
    useState<FolderLink[]>(initialLinks);
  const [selectedFolder, setSelectedFolder] = useState<SelectedFolder>({
    id: initialSelectedFolder?.id,
    name: initialSelectedFolder?.name,
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
  if (!context.params) {
    return { notFound: true };
  }
  const cookies = context.req.headers.cookie;
  if (!cookies) {
    return { notFound: true };
  }

  const folderId = context.params['folderId'] as string | number;
  const accessToken = cookies
    .split('; ')
    .find((row) => row.startsWith('accessToken='))
    ?.split('=')[1];

  try {
    const selectedFolderData: Folder = await getSelectedFolder(folderId);
    const folderLinksData: FolderLink[] = await getFolderLinks(
      folderId,
      accessToken,
    );
    return {
      props: {
        initialSelectedFolder: selectedFolderData,
        initialLinks: folderLinksData,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};
