import styles from './UserSection.module.css';
import Card from '@/components/sampleCard/Card';
import { useState, useEffect } from 'react';
import timeDiffChecker from '../../utils/TimeDiffChecker/TimeDiffChecker';
import { todayIs } from '../../utils/TodayIs/TodayIs';
import logo from '@/public/logo.svg';
import pen from '@/public/pen.svg';
import share from '@/public/share.svg';
import remove from '@/public/delete.svg';
import add from '@/public/add.svg';
import ModalDeletefolder from '@/components/modalDeleteFolder/ModalDeleteFolder';
import ModalEditFolderName from '@/components/modalEditFolderName/ModalEditFolderName';
import ModalSharedFolder from '@/components/modalSharedFolder/ModalSharedFolder';
import ModalAddFolder from '@/components/modalAddFolder/ModalAddFolder';
import { FetchLinkData, FetchFolderData } from '@/pages/api/UsersAPI';
import { useRouter } from 'next/router';
import emptyFolder from '@/public/empty-folder.png';
import Image from 'next/image';

function UserSection({ searchWord }) {
  const [buttonInfo, setButtonInfo] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);
  const [selectedButton, setSelectedButton] = useState('전체');
  const [filterdData, setFilteredData] = useState([]);
  const [isShowModalDeleteFolder, setIsShowModalDeleteFolder] = useState(false);
  const [isShowModalEditFolderName, setIsShowModalEditFolderName] =
    useState(false);
  const [isShowModalSharedFolder, setIsShowModalSharedFolder] = useState(false);
  const [isShowModalAddFolder, setIsShowModalAddFolder] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [folderId, setFolderId] = useState('');
  const router = useRouter();
  const [firstResult, setFirstResult] = useState([]);

  const style = {};
  const logoStyle = {
    opacity: '0.2',
    width: '133px',
    height: '24px',
  };

  useEffect(() => {
    const fetchData = async () => {
      const linkData = await FetchLinkData();
      const folderData = await FetchFolderData();
      if (folderData['data'].length === 0) {
        router.push('/folderEmpty');
        return;
      }
      setButtonInfo(folderData['data']);
      setCardInfo(linkData['data']);
      setFilteredData(linkData['data']);
      setFirstResult(linkData['data']);
    };
    fetchData();
  }, [router]);

  useEffect(() => {
    if (searchWord !== '') {
      const beforeSearch = [...firstResult];
      const afterSearch = beforeSearch.filter(item => {
        return (
          (item.url && item.url.includes(searchWord)) ||
          (item.title && item.title.includes(searchWord)) ||
          (item.description && item.description.includes(searchWord))
        );
      });
      setFilteredData(afterSearch);
    } else if (searchWord === '') {
      setFilteredData(firstResult);
    }
  }, [searchWord, firstResult]);

  if (!buttonInfo && !cardInfo) {
    return null;
  }

  const handleButtonClick = name => {
    setSelectedButton(name);
  };

  const handleFilter = category => {
    if (category === '전체') {
      setFilteredData(cardInfo);
      setFirstResult(cardInfo);
    } else {
      const filterd = cardInfo.filter(item => item['folder_id'] === category);
      setFilteredData(filterd);
      setFirstResult(filterd);
    }
  };

  const handleDeleteFolder = () => {
    setIsShowModalDeleteFolder(!isShowModalDeleteFolder);
  };

  const handleEditFolderName = () => {
    setIsShowModalEditFolderName(!isShowModalEditFolderName);
  };

  const handleSharedFolder = () => {
    setIsShowModalSharedFolder(!isShowModalSharedFolder);
  };

  const handleAddFolder = () => {
    setIsShowModalAddFolder(!isShowModalAddFolder);
  };

  const handleFolderInfo = (name, id) => {
    setFolderName(name);
    setFolderId(id);
  };

  function tempActivate(e) {
    alert('아직 미구현');
  }
  const timeDiffs = cardInfo.map(item => {
    const today = new Date();
    const linkedDay = new Date(item.created_at);
    return Math.floor((today - linkedDay) / 1000);
  });

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.buttonButtonArea}>
          <button
            onClick={() => {
              handleButtonClick('전체');
              handleFilter('전체');
            }}
            className={`${selectedButton === '전체' ? styles.selected : ''}`}
          >
            전체
          </button>
          {buttonInfo.map(item => (
            <button
              onClick={e => {
                handleButtonClick(item.name);
                handleFilter(item.id);
                handleFolderInfo(e.target.innerHTML, item.id);
              }}
              key={item.id}
              className={item.name === selectedButton ? styles.selected : ''}
            >
              {item.name}
            </button>
          ))}
        </div>
        <Image
          src={add}
          alt="add-icon"
          className={styles.addButton}
          onClick={handleAddFolder}
        />
        <div className={styles.buttonTextArea}>
          <p>{selectedButton}</p>
          <div
            className={`${styles.toolBox} ${selectedButton === '전체' ? styles.hidden : ''}`}
          >
            <div onClick={handleSharedFolder}>
              <Image src={share} alt="share-icon" />
              공유
            </div>
            <div onClick={handleEditFolderName}>
              <Image src={pen} alt="pen-icon" />
              이름 변경
            </div>
            <div onClick={handleDeleteFolder}>
              <Image src={remove} alt="delete-icon" />
              삭제
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div className={styles.divCard}>
          {filterdData.map((cardData, index) => (
            <a
              rel="noreferrer"
              href={cardData.url}
              target={'_blank'}
              key={cardData.id}
            >
              <Card
                style={cardData.image_source !== null ? style : logoStyle}
                image={
                  cardData.image_source !== null ? cardData.image_source : logo
                }
                createdAt={timeDiffChecker(timeDiffs[index])}
                description={cardData.description}
                uploadDate={todayIs()}
                link={cardData.url}
                buttonInfo={buttonInfo}
              />
            </a>
          ))}
          {filterdData.length === 0 && (
            <div className={styles.emptyFolder}>
              <Image src={emptyFolder} alt="empty-image" />
              <p>이 폴더는 비어있습니다.</p>
            </div>
          )}
        </div>
      </section>
      {isShowModalDeleteFolder && (
        <ModalDeletefolder
          name={selectedButton}
          handleClickClose={handleDeleteFolder}
          handleClickButton={tempActivate}
        />
      )}
      {isShowModalEditFolderName && (
        <ModalEditFolderName
          name={selectedButton}
          handleClickClose={handleEditFolderName}
          handleClickButton={tempActivate}
        />
      )}
      {isShowModalSharedFolder && (
        <ModalSharedFolder
          name={selectedButton}
          handleClickClose={handleSharedFolder}
          buttonInfo={buttonInfo}
          cardInfo={cardInfo}
          folderName={folderName}
          folderId={folderId}
        />
      )}
      {isShowModalAddFolder && (
        <ModalAddFolder
          name={selectedButton}
          handleClickClose={handleAddFolder}
          handleClickButton={tempActivate}
        />
      )}
    </>
  );
}

export default UserSection;
