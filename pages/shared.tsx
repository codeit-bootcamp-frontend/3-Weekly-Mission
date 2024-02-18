import { useState } from 'react';
import useStickyState from '@/hooks/useStickyState';
import { Header } from '@/components/Header/index';
import { Favorites } from '@/components/Favorites/index';
import { SearchInput } from '@/components/SearchInput/index';
import { SharedCardList } from '@/components/SharedCardList';
import { Footer } from '@/components/Footer/index';
import { FolderItem, FolderSample } from '@/types/Common';
import { GetStaticProps } from 'next';
import { getFolderSample } from '@/api/api';
import styles from '@/styles/folder.module.css';

interface Props {
  initialData: FolderItem[];
}

const Shared = ({ initialData }: Props) => {
  const [isSticky, setIsSticky] = useStickyState(true);
  const [link, setLink] = useState<FolderItem[]>(initialData);
  const [initialLink, setInitialLink] = useState<FolderItem[]>(initialData);

  return (
    <>
      <Header isSticky={!isSticky} />
      <Favorites />
      <div className={styles.section}>
        <SearchInput link={link} setLink={setLink} initialLink={initialLink} />
        <SharedCardList link={link} />
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const folderSampleData: FolderSample = await getFolderSample();
  const folderSampleitemData: FolderItem[] = folderSampleData.links;
  const processedData = folderSampleitemData.map(item => ({
    ...item,
    image_source: item.image_source || null,
  }));
  return {
    props: {
      initialData: processedData,
    },
  };
};

export default Shared;
