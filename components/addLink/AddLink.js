import { useState, useEffect } from 'react';
import { FetchFolderData } from '@/pages/api/UsersAPI';
import styles from './AddLink.module.css';
import link from '@/public/link.svg';
import ModalAddLink from '../modalAddLink/ModalAddLink';
import Image from 'next/image';

function AddLink() {
  const [isShowAddLink, setIsShowAddLink] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [buttonInfo, setButtonInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const folderData = await FetchFolderData();
      setButtonInfo(folderData['data']);
    };
    fetchData();
  }, []);

  function handleAddLink(e) {
    e.preventDefault();
    setIsShowAddLink(!isShowAddLink);
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function tempActivate(e) {
    alert('아직 미구현');
  }

  if (!buttonInfo) {
    return null;
  }

  return (
    <div className={styles.addlinkContainer}>
      <div className={styles.addlinkInputbox}>
        <Image src={link} alt="link-icon" />
        <div>
          <input
            className={styles.addlinkInput}
            placeholder="링크를 추가해 보세요"
            id="add-link"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className={styles.addlinkButton} onClick={handleAddLink}>
            추가하기
          </button>
        </div>
      </div>
      {isShowAddLink && (
        <ModalAddLink
          handleClickClose={handleAddLink}
          buttonInfo={buttonInfo}
          link={inputValue}
          handleClickButton={tempActivate}
        />
      )}
    </div>
  );
}

export default AddLink;
