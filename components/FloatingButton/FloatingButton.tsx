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
          <span className={styles.img}>
            <Image fill src="/svgs/add-icon-white.svg" alt="add" />
          </span>
        </span>
      </div>
      <div className={styles.fixedBtn} onClick={() => setModal(true)}>
        <span className={styles.fixedText}>
          <span>폴더추가</span>
          <span className={styles.img}>
            <Image fill src="/svgs/add-icon.svg" alt="add" />
          </span>
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
