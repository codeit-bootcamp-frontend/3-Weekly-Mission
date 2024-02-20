import React, { useState } from "react";
import FolderAtionBtn from "./FolderActionBtn";
import useUserFolderListData from "../../../hook/useUserFolderListData";
import styles from "./FolderList.module.css";
import Card from "../CardSection/Card";
import ModalMessge from "../../atomicComponents/modal/ModalMessage";
import Image from "next/image";
import { add_svg } from "@/public/image";

export default function FolderListBtn() {
  const { folderLists } = useUserFolderListData();
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlechangModal = () => {
    setModalOpen(true);
  };

  const handleFolderClick = (folderId: number | null) => {
    setSelectedFolderId(folderId);
  };

  return (
    <div className={styles.folder_list_box}>
      <div className={styles.folder_list_btn_box}>
        <div>
          <button
            className={styles.folder_list_btn}
            onClick={() => handleFolderClick(null)}
          >
            전체
          </button>
          {folderLists.map((folderList) => (
            <button
              key={folderList.id}
              className={`${styles.folder_list_btn} ${
                selectedFolderId === folderList.id ? `${styles.selected}` : ""
              }`}
              onClick={() => handleFolderClick(folderList.id)}
            >
              {folderList.name}
            </button>
          ))}
        </div>
        <Image
          src={add_svg}
          alt="추가 버튼"
          className={styles.add_btn}
          onClick={handlechangModal}
          width={15}
          height={15}
        />
        <ModalMessge
          modalOpen={modalOpen}
          close={setModalOpen}
          headerText={"폴더 추가"}
          placeholder={"내용 입력"}
          buttonText={"추가하기"}
          type={"blue"}
        />
      </div>

      <FolderAtionBtn folderLists={folderLists} />
      {selectedFolderId !== null ? (
        <div className={styles.folder_card_img}>
          <Card selectedFolderId={selectedFolderId} />
        </div>
      ) : (
        <div className={styles.folder_card_img}>
          <Card />
        </div>
      )}
    </div>
  );
}
/////// map을 한번만 사용해서 folderList 데이터를 folderactonBtn에 전달해주는 방법을 사용하면 좋을것같다

///////////////////////

// import React, { useState } from "react";
// import FolderAtionBtn from "./FolderActionBtn";
// import useUserFolderListData from "../../hook/useUserFolderListData";
// import styles from "./FolderList.module.css";
// import Card from "../CardSection/Card";
// import ModalMessge from "../modal/ModalMessage";
// import Image from "next/image";
// import { add_svg } from "@/public/image";
// import { UserFolderType } from "../../types/Types";

// function FolderListBtns({ folderList, selectedFolderId, setSelectedFolderId }: { folderList: UserFolderType, selectedFolderId: number | null, setSelectedFolderId: (folderId: number | null) => void }) {
//   // const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const handlechangModal = () => {
//     setModalOpen(true);
//   };

//   const handleFolderClick = (folderId: number | null) => {
//     setSelectedFolderId(folderId);
//   };

//   return (
//     <div className={styles.folder_list_box}>
//       <div className={styles.folder_list_btn_box}>
//         <div>
//           <button
//             className={styles.folder_list_btn}
//             onClick={() => handleFolderClick(null)}
//           >
//             전체
//           </button>
//           <button
//             className={`${styles.folder_list_btn} ${
//               selectedFolderId === folderList.id ? `${styles.selected}` : ""
//             }`}
//             onClick={() => handleFolderClick(folderList.id)}
//           >
//             {folderList.name}
//           </button>
//         </div>
//         <Image
//           src={add_svg}
//           alt="추가 버튼"
//           className={styles.add_btn}
//           onClick={handlechangModal}
//           width={15}
//           height={15}
//         />
//         <ModalMessge
//           modalOpen={modalOpen}
//           close={setModalOpen}
//           headerText={"폴더 추가"}
//           placeholder={"내용 입력"}
//           buttonText={"추가하기"}
//           type={"blue"}
//         />
//       </div>
//       <FolderAtionBtn folderList={folderList} />
//       {selectedFolderId !== null ? (
//         <div className={styles.folder_card_img}>
//           <Card selectedFolderId={selectedFolderId} />
//         </div>
//       ) : (
//         <div className={styles.folder_card_img}>
//           <Card />
//         </div>
//       )}
//     </div>
//   );
// }

// export default function FolderListBtn() {
//   const { folderLists } = useUserFolderListData();
//   const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);

//   return (
//     <>
//       {folderLists.map((folderList) => (
//         <FolderListBtns
//           key={folderList.id}
//           folderList={folderList}
//           selectedFolderId={selectedFolderId}
//           setSelectedFolderId={setSelectedFolderId}
//         />
//       ))}
//     </>
//   );
// }
