import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./CardList.module.css";
import Image from "next/image";

interface Props {
  selectedFolderName: string;
}

function OptionBox({ selectedFolderName }: Props) {
  const [shareModal, setShareModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <span className={styles.options}>
        <span
          className={styles.option}
          onClick={() => {
            setShareModal(true);
          }}
        >
          <span className={styles.img}>
            <Image
              fill
              src="/svgs/share-icon.svg"
              alt="share"
              objectFit="cover"
            />
          </span>
          <span>공유</span>
        </span>
        <span className={styles.option} onClick={() => setEditModal(true)}>
          <span className={styles.img}>
            <Image fill src="/svgs/pen-icon.svg" alt="pen" />
          </span>
          <span>이름 변경</span>
        </span>
        <span className={styles.option} onClick={() => setDeleteModal(true)}>
          <span className={styles.img}>
            <Image fill src="/svgs/bin-icon.svg" alt="bin" />
          </span>
          <span>삭제</span>
        </span>
      </span>

      {shareModal && (
        <Modal
          setModal={setShareModal}
          title="폴더 공유"
          subTitle={selectedFolderName}
          isShare
        />
      )}
      {editModal && (
        <Modal
          setModal={setEditModal}
          title="폴더 이름 변경"
          btnText="변경하기"
          isInput
        />
      )}
      {deleteModal && (
        <Modal
          setModal={setDeleteModal}
          title="폴더 삭제"
          subTitle={selectedFolderName}
          btnText="삭제하기"
          btnColor="red"
        />
      )}
    </>
  );
}

export default OptionBox;
