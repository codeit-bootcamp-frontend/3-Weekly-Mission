import Image from 'next/image';
import styles from './FloatingActionButton.module.css';
import add from '@/public/add.svg';

const FloatingActionButton = ({ onClick }) => {
  return (
    <>
      <button className={styles.fab} onClick={onClick}>
        폴더 추가
      </button>
      <Image
        src={add}
        className={styles.floatingAddButton}
        alt="add-icon"
        onClick={onClick}
      />
    </>
  );
};

export default FloatingActionButton;
