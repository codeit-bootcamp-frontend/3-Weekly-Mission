import { useState } from "react";
import styles from "./FloatingButton.module.css";
import Modal from "../Modal/Modal";
import Image from "next/image";

function FloatingButton() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className={styles.floatingBtn} onClick={() => setModal(true)}>
        <span className={styles.floatingText}>
          <span>폴더추가</span>
          <Image
            src="/svgs/add-icon-white.svg"
            alt="add"
            width={20}
            height={20}
          />
        </span>
      </div>
      <div className={styles.fixedBtn} onClick={() => setModal(true)}>
        <span className={styles.fixedText}>
          <span>폴더추가</span>
          <Image src="/svgs/add-icon.svg" alt="add" width={20} height={20} />
        </span>
      </div>

      {modal && (
        <Modal
          setModal={setModal}
          title="폴더 추가"
          isInput
          btnText="추가하기"
        />
      )}
    </>
  );
}

export default FloatingButton;
