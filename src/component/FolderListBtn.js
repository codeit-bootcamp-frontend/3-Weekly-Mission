import React, { useState} from 'react';
import add_svg from '../image/add.svg'
import FolderAtionBtn from './FolderActionBtn'
import useUserFolderListData from '../Hook/useUserFolderListData';
import useUserLinkData from '../Hook/useUserLinkData';
import './FolderList.css'
import Card from './CardSection/Card';



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
          <FolderAtionBtn/>
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




// export default function FolderList() {
//   const [folderLists, setFolderLists] = useState([]);
//   const [selectedFolder, setSelectedFolder] = useState(null); // Track the selected folder

//   async function fetchFolderLists() {
//     try {
//       const response = await fetch('https://bootcamp-api.codeit.kr/api/users/1/folders');
//       const data = await response.json();
//       setFolderLists(data.data);
//     } catch (error) {
//       console.error('Error fetching folder lists:', error);
//     }
//   }

//   useEffect(() => {
//     fetchFolderLists();
//   }, []);

//   const handleFolderClick = (folderId) => {//폴더 클릭시 폴더 아이디를 받아서 폴더 아이디를 변경
//     setSelectedFolder(folderId);
// };

//   return (
//     <div className='folder_list_box'>
//       <button className='folder_list_btn' onClick={() => handleFolderClick(null)}>
//         전체
//       </button>
//       {folderLists.map((folderList) => (
//         <button
//           key={folderList.id}
//           className={`folder_list_btn ${selectedFolder === folderList.id ? 'selected' : ''}`}  // 선택된 폴더의 스타일 변경
//           onClick={() => handleFolderClick(folderList.id)} // 클릭시 폴더 아이디를 받아서 폴더 아이디를 변경
//         >
//           {folderList.name}
//         </button>
//       ))}
//       {selectedFolder !== null && ( // 선택된 폴더가 존재하는지 확인 후 렌더링
//        <FolderAtionBtn/>
//       )}
//       <div>
//         <img src={add_svg} alt='폴더리스트 기능버튼' className='folder_list_add_img'/>
//       </div>
//     </div>
//   );
// }

// import React, { useState} from 'react';
// import add_svg from '../image/add.svg'
// import FolderAtionBtn from './FolderActionBtn'
// import useUserFolderListData from '../Hook/useUserFolderListData';
// import useUserLinkData from '../Hook/useUserLinkData';
// import FolderLinkList from './FolderLinkList';
// import './FolderList.css'



// export default function FolderListBtn() {
//   const { folderLists } = useUserFolderListData();
//   const [selectedFolderId, setSelectedFolderId] = useState(null); 

//   const handleFolderClick = (folderId) => {
//     setSelectedFolderId(folderId);
//   }

//   return (
//     <div className='folder_list_box'>
//       <button className='folder_list_btn' onClick={() => handleFolderClick(null)}>
//         전체
//       </button>
//       {folderLists.map((folderList) => (
//         <button
//           key={folderList.id}
//           className={`folder_list_btn ${selectedFolderId === folderList.id ? 'selected' : ''}`}  // 선택된 폴더의 스타일 변경
//           onClick={() => handleFolderClick(folderList.id)} // 클릭시 폴더 아이디를 받아서 폴더 아이디를 변경
//         >
//           {folderList.name}
//         </button>
//       ))}
//       {selectedFolderId !== null && ( // 선택된 폴더가 존재하는지 확인 후 렌더링
//         <div>
//           <FolderAtionBtn/>
//           {linkData.map((link) => (//폴더 아이디가 존재하면 링크 데이터를 렌더링
//             <FolderLinkList link={link}/>
//           ))}
//         </div>
//       )}
//       <div>
//         <img src={add_svg} alt='폴더리스트 기능버튼' className='folder_list_add_img'/>
//       </div>
//     </div>  
//   );
// }