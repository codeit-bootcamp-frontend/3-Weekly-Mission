import ModalMessge from "../modal/ModalMessage";
import { useState } from "react";
import useUserFolderListData from "../../hook/useUserFolderListData";
import styles from "./FolderActionBtn.module.css";
import { UserFolderType } from "../../types/Types";
import Image from "next/image";
import { share_svg, pen_svg, delete_svg } from "@/public/image";

// 모달에 폴더이름 전달해주기 위핸 props
export default function FolderAtionBtns() {
  const [snsmodalOpen, setSnsModalOpen] = useState(false);
  const [namemodalOpen, setNameModalOpen] = useState(false);
  const [folderRemoveModal, setFolderRemoveModal] = useState(false);

  const handleShareModal = () => {
    setSnsModalOpen(true);
  };

  const handlechangModal = () => {
    setNameModalOpen(true);
  };

  const handleRemoveModal = () => {
    setFolderRemoveModal(true);
  };

  return (
    <div className={styles.Folder_Action_Btn_Area}>
      <span>유용한 글</span>

      <div className={styles.Folder_Action_Btn_Box}>
        <button onClick={handleShareModal}>
          <Image src={share_svg} alt="공유 버튼" width={20} height={20} />
          공유
        </button>

        <button onClick={handlechangModal}>
          <Image src={pen_svg} alt="이름 변경 버튼" width={20} height={20}/>
          이름 변경
        </button>

        <button onClick={handleRemoveModal}>
          <Image src={delete_svg} alt="삭제" width={20} height={20}/>
          삭제
        </button>

        {snsmodalOpen ? (
          <ModalMessge
            modalOpen={snsmodalOpen}
            close={setSnsModalOpen}
            headerText={"공유"}
            folderName={"폴더"}
            icon={true}
          />
        ) : null}

        {namemodalOpen ? (
          <ModalMessge
            modalOpen={namemodalOpen}
            close={setNameModalOpen}
            headerText={"폴더 이름 변경"}
            placeholder={"유용한 팁"}
            buttonText={"변경하기"}
            type={"blue"}
          />
        ) : null}
        {folderRemoveModal ? (
          <ModalMessge
            modalOpen={folderRemoveModal}
            close={setFolderRemoveModal}
            headerText={"폴더 삭제"}
            folderName={"폴더"}
            buttonText={"삭제하기"}
            type={"red"}
          />
        ) : null}
      </div>
    </div>
  );
}
