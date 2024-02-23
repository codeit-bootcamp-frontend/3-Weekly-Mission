import { useState } from 'react';
import { getFolderItem } from '@/api/api';
import useStickyState from '@/hooks/useStickyState';
import { Header } from '@/components/Header/index';
import { AddLinkInput } from '@/components/AddLinkInput/index';
import { SearchInput } from '@/components/SearchInput/index';
import { FolderCardList } from '@/components/FolderCardList/index';
import { Footer } from '@/components/Footer/index';
import styles from '@/styles/folder.module.css';
import { FolderItem, SelectedFolder } from '@/types/Common';
import { GetStaticProps } from 'next';

interface Props {
  initialData: FolderItem[];
}

const Folder = ({ initialData }: Props) => {
  const [isSticky, setIsSticky] = useStickyState(true);
  const [links, setLinks] = useState<FolderItem[]>(initialData);
  const [initialLinks, setInitialLinks] = useState<FolderItem[]>(initialData);
  const [selectedFolder, setSelectedFolder] = useState<SelectedFolder>({
    name: '전체',
    id: 'all',
  });

  return (
    <div>
      <Header isSticky={!isSticky} />
      <AddLinkInput />
      <div className={styles.section}>
        <SearchInput
          links={links}
          setLinks={setLinks}
          initialLinks={initialLinks}
        />
        <FolderCardList
          links={links}
          setLinks={setLinks}
          selectedFolder={selectedFolder}
          setSelectedFolder={setSelectedFolder}
        />
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const folderItemData: FolderItem[] = await getFolderItem('all');
  return {
    props: {
      initialData: folderItemData,
    },
  };
};

export default Folder;
