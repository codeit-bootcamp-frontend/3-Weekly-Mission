import React, { useState,useEffect } from 'react';
import './FolderList.css'
import add_svg from '../image/add.svg'
import FolderAtionBtn from './FolderActionBtn'




export default function FolderList() {
  const [folderLists, setFolderLists] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null); // 선택된 폴더 아이디
  async function fetchFolderLists() {
    try {
      const response = await fetch('https://bootcamp-api.codeit.kr/api/users/1/folders');
      const data = await response.json();
      setFolderLists(data.data);
    } catch (error) {
      console.error('Error fetching folder lists:', error);
    }
  }

  useEffect(() => {
    fetchFolderLists();
  }, []);

  const handleFolderClick = (folderId) => {//폴더 클릭시 폴더 아이디를 받아서 폴더 아이디를 변경
    setSelectedFolder(folderId);
  };

  return (
    <div className='folder_list_box'>
      <button className='folder_list_btn' onClick={() => handleFolderClick(null)}>
        전체
      </button>
      {folderLists.map((folderList) => (
        <button
          key={folderList.id}
          className='folder_list_btn'  // 선택된 폴더의 스타일 변경
          onClick={() => handleFolderClick(folderList.id)} // 클릭시 폴더 아이디를 받아서 폴더 아이디를 변경
        >
          {folderList.name}
        </button>
      ))}
      {selectedFolder !== null && ( // 선택된 폴더가 존재하는지 확인 후 렌더링
       <FolderAtionBtn/>
      )}
      <div>
        <img src={add_svg} alt='폴더리스트 기능버튼' className='folder_list_add_img'/>
      </div>
    </div>
  );
}
//api/users/1/folders