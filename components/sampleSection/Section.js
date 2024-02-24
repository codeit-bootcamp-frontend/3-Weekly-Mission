import styles from './Section.module.css';
import Card from '../sampleCard/Card';
import { useEffect, useState } from 'react';
import timeDiffChecker from '../../utils/TimeDiffChecker/TimeDiffChecker';
import { todayIs } from '../../utils/TodayIs/TodayIs';
import { SAMPLE_FOLDER } from '@/public/URL';

function Section() {
  const [cardInfo, setCardInfo] = useState();
  const style = {};
  const logoStyle = {
    opacity: '0.2',
    width: '133px',
    height: '24px',
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(SAMPLE_FOLDER);
      const data = await response.json();
      setCardInfo(data['folder']['links']);
    };
    fetchData();
  }, []);

  if (!cardInfo) {
    return null;
  }

  const timeDiffs = cardInfo.map(item => {
    const today = new Date();
    const linkedDay = new Date(item.createdAt);
    return Math.floor((today - linkedDay) / 1000);
  });

  return (
    <section className={styles.section}>
      <div className={styles.divCard}>
        {cardInfo.map((cardData, index) => (
          <a
            rel="noreferrer"
            href={cardData.url}
            target={'_blank'}
            key={cardData.id}
          >
            <Card
              image={cardData.imageSource}
              createdAt={timeDiffChecker(timeDiffs[index])}
              description={cardData.description}
              uploadDate={todayIs()}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Section;
