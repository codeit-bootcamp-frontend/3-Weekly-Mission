import { useState } from 'react';
import { Card } from './Card/index';
import styles from './styles.module.css';

export const CardList = ({ link }) => {
  const [activeKebab, setActiveKebab] = useState(null);

  return (
    <>
      <div className={styles['card-list']}>
        {link && link.length > 0 ? (
          link?.map(link => {
            return (
              <Card
                key={link.id}
                link={link}
                isActive={activeKebab === link.id}
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
