import { useState } from 'react';
import { Card } from './Card/index';
import styles from './styles.module.css';
import { FolderItem } from '@/types/Common';

export const CardList = ({ link }: { link: FolderItem[] }) => {
  const [activeKebab, setActiveKebab] = useState<string | number | null>(null);

  return (
    <>
      <div className={styles['card-list']}>
        {link && link.length > 0 ? (
          link?.map(item => {
            return (
              <Card
                key={item.id}
                link={item}
                isActive={activeKebab === item.id}
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
