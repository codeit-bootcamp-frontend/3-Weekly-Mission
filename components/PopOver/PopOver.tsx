import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./PopOver.module.css";

function PopOver({ folderData }: any) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  return (
    <>
      <div className={styles.popOver}>
        <div className={styles.deleteBtn} onClick={() => setDeleteModal(true)}>
          삭제하기
        </div>
        <div className={styles.addBtn} onClick={() => setAddModal(true)}>
          폴더에 추가
        </div>
      </div>

      {deleteModal && (
        <Modal
          setModal={setDeleteModal}
          title="링크 삭제"
          btnText="삭제하기"
          btnColor="red"
        />
      )}
      {addModal && (
        <Modal
          setModal={setAddModal}
          title="폴더에 추가"
          subTitle="링크 주소"
          isAddLink
          btnText="추가하기"
          folderData={folderData}
        />
      )}
    </>
  );
}

export default PopOver;
