import Image from 'next/image';

import styles from './AddLinkBar.module.css';

type TAddLinkBarProps = {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleModal: () => void;
};

const AddLinkBar = ({ handleModal, input, onChange }: TAddLinkBarProps) => {
  return (
    <div className={styles['add-link-box']}>
      <div className={styles['add-link-input-box']}>
        <Image
          width={20}
          height={20}
          sizes='(max-width: 767px) 16px, 20px'
          className={styles['add-link-img']}
          src={'/images/folder/folder-link.svg'}
          alt='폴더 링크 추가 아이콘'
        />
        <input
          className={styles['add-link-input']}
          type='text'
          placeholder='링크를 추가해 보세요'
          onChange={onChange}
          value={input}
        />
      </div>
      <button type='button' className={styles['add-link-cta']} onClick={handleModal}>
        추가하기
      </button>
    </div>
  );
};

export default AddLinkBar;
