import "./kebab.css";
import ModalMessge from "./modal/ModalMessage";
import { useState } from "react";

export default function Kebab({ onClick }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePopMessage = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <ul className="kebab_box">
      <li onClick={handlePopMessage}>삭제하기</li>
      <li>폴더에 추가</li>
      <ModalMessge
        modalOpen={modalOpen}
        headerText={"링크 삭제"}
        close={setModalOpen}
        folderName={"링크"}
        buttonText={"삭제하기"}
        type={"red"}
      />
    </ul>
  );
}
