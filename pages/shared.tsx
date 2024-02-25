import { useState } from 'react';
import useStickyState from '@/hooks/useStickyState';
import { Header } from '@/components/Header/index';
import { Favorites } from '@/components/Favorites/index';
import { SearchInput } from '@/components/SearchInput/index';
import { SharedCardList } from '@/components/SharedCardList';
import { Footer } from '@/components/Footer/index';
import { FolderLink, FolderSample } from '@/types/Common';
import { GetStaticProps } from 'next';
import { getFolderSample } from '@/api/api';
import styles from '@/styles/folder.module.css';

interface Props {
  initialData: FolderLink[];
}

const Shared = ({ initialData }: Props) => {
  const [isSticky, setIsSticky] = useStickyState(true);
  const [folderLinks, setFolderLinks] = useState<FolderLink[]>(initialData);
  const [initialFolderLinks, setInitialFolderLinks] =
    useState<FolderLink[]>(initialData);

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const folderSampleData: FolderSample = await getFolderSample();
  const folderSampleLinksData: FolderLink[] = folderSampleData.links;
  const processedData = folderSampleLinksData.map(folderSampleLink => ({
    ...folderSampleLink,
    image_source: folderSampleLink.image_source || null,
  }));
  return {
    props: {
      initialData: processedData,
    },
  };
};

export default Shared;
