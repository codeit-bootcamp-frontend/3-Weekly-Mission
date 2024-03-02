import { useEffect, useState } from 'react';
import { getFolderLinks } from '@/api/api';
import useStickyState from '@/hooks/useStickyState';
import { Header } from '@/components/Header/index';
import { AddLinkInput } from '@/components/AddLinkInput/index';
import { SearchInput } from '@/components/SearchInput/index';
import { FolderCardList } from '@/components/FolderCardList/index';
import { Footer } from '@/components/Footer/index';
import styles from '@/styles/folder.module.css';
import { FolderLink, SelectedFolder } from '@/types/Common';
import { GetStaticProps } from 'next';
import { ALL_CONTENTS_FOLDER } from '@/constants/constants';
import { redirectTo } from '@/utils/redirectTo';
import { useRouter } from 'next/router';

interface Props {
  initialData: FolderLink[];
}

const Folder = ({ initialData }: Props) => {
  const [isSticky, setIsSticky] = useStickyState(true);
  const [folderLinks, setFolderLinks] = useState<FolderLink[]>(initialData);
  const [initialFolderLinks, setInitialFolderLinks] =
    useState<FolderLink[]>(initialData);
  const [selectedFolder, setSelectedFolder] = useState<SelectedFolder>({
    name: ALL_CONTENTS_FOLDER.NAME,
    id: ALL_CONTENTS_FOLDER.ID,
  });
  const router = useRouter();

  useEffect(() => {
    redirectTo(!localStorage.accessToken, '/signin', router);
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const folderLinksData: FolderLink[] = await getFolderLinks('all');
  return {
    props: {
      initialData: folderLinksData,
    },
  };
};

export default Folder;
