import {UserFolderListData} from './Api.js'
import {useState,useEffect } from 'react';

export default function useUserFolderListData() {
  const [folderLists, setFolderLists] = useState([]);
  console.log(folderLists)

  useEffect(() => {
  async function fetchFolderLists() {
    try {
      const response = await UserFolderListData();
      const result = response.data;
      setFolderLists(result);
    } catch (error) {
      console.log('폴더 데이터를 불러오는 중 에러 발생 :',error);
    };
  }

    fetchFolderLists();
  }, []);


  return {folderLists}
};

