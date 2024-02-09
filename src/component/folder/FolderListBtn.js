// import React, { useState } from "react";
// import add_svg from "../../image/add.svg";
// import FolderAtionBtn from "./FolderActionBtn";
// import useUserFolderListData from "../../Hook/useUserFolderListData";
// import useUserLinkData from "../../Hook/useUserLinkData";
// import "./FolderList.css";
// import Card from "../CardSection/Card";

// export default function FolderListBtn() {
//   const { folderLists } = useUserFolderListData();
//   const [selectedFolderId, setSelectedFolderId] = useState(null);

//   const handleFolderClick = (folderId) => {
//     setSelectedFolderId(folderId);
//   };

//   return (
//     <div className="folder_list_box">
//       <button
//         className="folder_list_btn"
//         onClick={() => handleFolderClick(null)}
//       >
//         전체
//       </button>
//       <FolderAtionBtn />
//       {folderLists.map((folderList) => (
//         <button
//           key={folderList.id}
//           className={`folder_list_btn ${
//             selectedFolderId === folderList.id ? "selected" : ""
//           }`} // 선택된 폴더의 스타일 변경
//           onClick={() => handleFolderClick(folderList.id)} // 클릭시 폴더 아이디를 받아서 폴더 아이디를 변경
//         >
//           {folderList.name}
//         </button>
//       ))}
//       <div>
//         <img
//           src={add_svg}
//           alt="폴더리스트 기능버튼"
//           className="folder_list_add_img"
//         />
//       </div>
//     </div>
//   );
// }
//api/users/1/folders

import React, { useState } from "react";
import add_svg from "../../image/add.svg";
import FolderAtionBtn from "./FolderActionBtn";
import useUserFolderListData from "../../Hook/useUserFolderListData";
import useUserLinkData from "../../Hook/useUserLinkData";
import "./FolderList.css";
import Card from "../CardSection/Card";

export default function FolderListBtn() {
  const { folderLists } = useUserFolderListData();
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const handleFolderClick = (folderId) => {
    setSelectedFolderId(folderId);
  }

  return (
    <div className='folder_list_box'>
      <button className='folder_list_btn' onClick={() => handleFolderClick(null)}>
        전체
      </button>
      <FolderAtionBtn/>
      {folderLists.map((folderList) => (
        <button
          key={folderList.id}
          className={`folder_list_btn ${selectedFolderId === folderList.id ? 'selected' : ''}`}  // 선택된 폴더의 스타일 변경
          onClick={() => handleFolderClick(folderList.id)} // 클릭시 폴더 아이디를 받아서 폴더 아이디를 변경
        >
          {folderList.name}
        </button>
      ))}
      {selectedFolderId !== null && ( // 선택된 폴더가 존재하는지 확인 후 렌더링
        <div>
          {/* <FolderAtionBtn/> */}
          <div>
          <Card selectedFolderId={selectedFolderId}/>
          </div>
        </div>
      )}
      <div>
        <img src={add_svg} alt='폴더리스트 기능버튼' className='folder_list_add_img'/>
      </div>
    </div>
  );
}
//api/users/1/folders
