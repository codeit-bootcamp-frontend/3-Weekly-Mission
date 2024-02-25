import { useState } from 'react';
import { Card } from './Card/index';
import styles from './styles.module.css';
import { FolderLink } from '@/types/Common';

interface Props {
  folderLinks: FolderLink[];
}

export const CardList = ({ folderLinks }: Props) => {
  const [activeKebab, setActiveKebab] = useState<string | number | null>(null);

  return (
    <>
      <div className={styles['card-list']}>
        {folderLinks?.length > 0 ? (
          folderLinks.map(folderLink => (
            <Card
              key={folderLink.id}
              folderLink={folderLink}
              isActive={activeKebab === folderLink.id}
              activeKebab={activeKebab}
              setActiveKebab={setActiveKebab}
            />
          ))
        ) : (
          <p className={styles['no-link']}>저장된 링크가 없습니다.</p>
        )}
      </div>
    </>
  );
};
