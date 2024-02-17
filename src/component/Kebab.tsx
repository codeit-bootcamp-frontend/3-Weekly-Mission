import "./kebab.css";
import ModalMessge from "./modal/ModalMessage";
import { useState } from "react";
// import { eventType } from "../Hook/Types";

export default function Kebab() {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePopMessage = () => {
    setModalOpen(true);
  };

  //onClick 빈값으로 놔두면 에러가 발생하니까 일단 막아둠 
  const alertMessage = () => {
    setModalOpen(false);
  };

  return (
    <ul className="kebab_box">
      <li onClick={handlePopMessage}>삭제하기</li>
      <li>폴더에 추가</li>
      <ModalMessge
        modalOpen={modalOpen}
        headerText={"링크 삭제"}
        folderName={"링크"}
        buttonText={"삭제하기"}
        type={"red"}
        close={setModalOpen}
      />
    </ul>
  );
}
