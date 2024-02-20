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
  style,
  link,
  buttonInfo,
}) {
  const [isShowPopover, setIsShowPopover] = useState(false);
  const [isShowModalDeleteLink, setIsShowModalDeleteLink] = useState(false);
  const [isShowAddLink, setIsShowAddLink] = useState(false);

  function popOver(e) {
    e.preventDefault();
    setIsShowPopover(!isShowPopover);
  }

  function handleDeleteLink(e) {
    e.preventDefault();
    setIsShowModalDeleteLink(!isShowModalDeleteLink);
  }
  function handleAddLink(e) {
    e.preventDefault();
    setIsShowAddLink(!isShowAddLink);
  }
  function DeleteLink(e) {
    e.preventDefault();
    alert('아직 미구현');
  }

  return (
    <article className={styles.card}>
      <figure className={styles.imageBox}>
        <Image
          width={340}
          height={254}
          src={image}
          alt="default-card-image"
          style={style}
          className={styles.cardImage}
        />
        <Image src={star} alt="star-icon" className={styles.star} />
      </figure>
      <div className={styles.textBox}>
        <h5>{createdAt}</h5>
        <Image
          src={kebab}
          alt="kebab-icon"
          className={styles.kebab}
          onClick={popOver}
        />
        {isShowPopover && (
          <div className={styles.popover}>
            <div className={styles.popoverSon} onClick={handleDeleteLink}>
              삭제하기
            </div>
            <div className={styles.popoverSon} onClick={handleAddLink}>
              폴더에 추가
            </div>
          </div>
        )}
        <p>{description}</p>
        <h6>{uploadDate}</h6>
      </div>

      {isShowModalDeleteLink && (
        <ModalDeleteLink
          handleClickClose={handleDeleteLink}
          handleClickDelete={DeleteLink}
          link={link}
        />
      )}
      {isShowAddLink && (
        <ModalAddLink
          handleClickClose={handleAddLink}
          handleClickButton={DeleteLink}
          link={link}
          buttonInfo={buttonInfo}
        />
      )}
    </article>
  );
}

export default Card;
