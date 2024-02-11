import "./kebab.css";
import ModalMessge from "./modal/ModalMessage";
import { useState } from "react";

export default function Kebab({ onClick }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePopMessage = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const close = () => {
    setModalOpen();
  };

  return (
    <ul className="kebab_box">
      <li onClick={handlePopMessage}>삭제하기</li>
      <li>폴더에 추가</li>
      <ModalMessge
        modalOpen={modalOpen}
        headerText="폴더 삭제"
        buttonText="삭제하기"
        onClick={close}
        type={"red"}
      />
    </ul>
  );
}
