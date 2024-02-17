import Modal from '../index.jsx';
import ModalSubmitButton from '../ModalSubmitButton/index.jsx';
import styles from './styles.module.css';

export const AddLinkModal = ({
  folders,
  inputValue,
  visible,
  handleCloseModal,
}) => {
  return (
    <Modal
      title="폴더에 추가"
      subTitle={inputValue}
      stateVisible={visible}
      handleCloseModal={handleCloseModal}
    >
      <div className={styles.modal}>
        <div className={styles['folder-list']}>
          {folders.map(folderItem => (
            <button
              className={styles['folder-list__button']}
              type="button"
              key={folderItem.id}
            >
              <div className={styles['folder-item']}>
                <p className={styles['folder-item-name']}>{folderItem.name}</p>
                <p className={styles['folder-item-count']}>
                  {folderItem.link.count}개 링크
                </p>
              </div>
              <img src="./images/check.png" alt="체크" />
            </button>
          ))}
        </div>
        <ModalSubmitButton type="submit">추가하기</ModalSubmitButton>
      </div>
    </Modal>
  );
};
