import { useState } from 'react';
import { Card } from './Card/index';
import styles from './styles.module.css';
import { FolderItem } from '@/types/Common';

export const CardList = ({ links }: { links: FolderItem[] }) => {
  const [activeKebab, setActiveKebab] = useState<string | number | null>(null);

  return (
    <>
      <div className={styles['card-list']}>
        {links && links.length > 0 ? (
          links?.map(link => {
            return (
              <Card
                key={link.id}
                link={link}
                isActive={activeKebab === link.id}
                activeKebab={activeKebab}
                setActiveKebab={setActiveKebab}
              />
            );
          })
        ) : (
          <p className={styles['no-link']}>저장된 링크가 없습니다.</p>
        )}
      </div>
    </>
  );
};
