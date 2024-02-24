import styles from './Card.module.css';
import { useState } from 'react';
import logo from '@/public/logo.svg';
import star from '@/public/star.svg';
import kebab from '@/public/kebab.svg';
import ModalDeleteLink from '../modalDeleteLink/ModalDeleteLink';
import ModalAddLink from '../modalAddLink/ModalAddLink';
import Image from 'next/image';

const DEFAULT_CARD_VALUE = {
  createdAt: '10minutes ago',
  description:
    'Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd',
  uploadDate: '2023.3.15',
};

function Card({
  image = logo,
  createdAt = DEFAULT_CARD_VALUE.createdAt,
  description = DEFAULT_CARD_VALUE.description,
  uploadDate = DEFAULT_CARD_VALUE.uploadDate,
  link,
  buttonInfo,
}) {
  const [isShowPopover, setIsShowPopover] = useState(false);
  const [isShowModalDeleteLink, setIsShowModalDeleteLink] = useState(false);
  const [isShowAddLink, setIsShowAddLink] = useState(false);

  function defaultClickEvent(e, callbackFn) {
    e.preventDefault();
    callbackFn();
  }

  function popOver() {
    setIsShowPopover(!isShowPopover);
  }

  function handleDeleteLink() {
    setIsShowModalDeleteLink(!isShowModalDeleteLink);
  }
  function handleAddLink() {
    setIsShowAddLink(!isShowAddLink);
  }
  function deleteLink() {
    alert('아직 미구현');
  }

  return (
    <article className={styles.card}>
      <figure className={styles.imageBox}>
        <Image
          width={340}
          height={254}
          src={image ? image : logo}
          alt="default-card-image"
          className={
            image !== logo ? styles.cardImage : styles.defaultCardImage
          }
        />
        <Image src={star} alt="star-icon" className={styles.star} />
      </figure>
      <div className={styles.textBox}>
        <h5>{createdAt}</h5>
        <Image
          src={kebab}
          alt="kebab-icon"
          className={styles.kebab}
          onClick={e => defaultClickEvent(e, popOver)}
        />
        {isShowPopover && (
          <div className={styles.popover}>
            <div
              className={styles.popoverSon}
              onClick={e => defaultClickEvent(e, handleDeleteLink)}
            >
              삭제하기
            </div>
            <div
              className={styles.popoverSon}
              onClick={e => defaultClickEvent(e, handleAddLink)}
            >
              폴더에 추가
            </div>
          </div>
        )}
        <p>{description}</p>
        <h6>{uploadDate}</h6>
      </div>

      {isShowModalDeleteLink && (
        <ModalDeleteLink
          handleClickClose={e => defaultClickEvent(e, handleDeleteLink)}
          handleClickDelete={e => defaultClickEvent(e, deleteLink)}
          link={link}
        />
      )}
      {isShowAddLink && (
        <ModalAddLink
          handleClickClose={e => defaultClickEvent(e, handleAddLink)}
          handleClickButton={e => defaultClickEvent(e, deleteLink)}
          link={link}
          buttonInfo={buttonInfo}
        />
      )}
    </article>
  );
}

export default Card;
