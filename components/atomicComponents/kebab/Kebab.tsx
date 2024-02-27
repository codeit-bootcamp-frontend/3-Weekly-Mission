import styles from "./kebab.module.css";
import ModalMessge from "../modal/ModalMessage";
import { useState } from "react";
import { UserLinkType } from "../../../types/Types";

export default function Kebab({ link }: { link: UserLinkType }) {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(link);

  const handlePopMessage = () => {
    setModalOpen(true);
  };

  return (
    <ul className={styles.kebab_box}>
      <li onClick={handlePopMessage}>삭제하기</li>
      <li>폴더에 추가</li>
      <ModalMessge
        modalOpen={modalOpen}
        headerText={"링크 삭제"}
        folderName={link.url}
        buttonText={"삭제하기"}
        type={"red"}
        close={setModalOpen}
      />
    </ul>
  );
}
