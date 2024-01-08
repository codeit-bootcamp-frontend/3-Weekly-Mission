import React, { useState,useEffect } from 'react';

export default function FolderList() {
  const [folderLists, setFolderLists] = useState([]);

  async function folderListData(){
    try {
      const response = await fetch('https://bootcamp-api.codeit.kr/api/users/1/folders');
      const body = await response.json();
      const result = body.data
      setFolderLists(result)
    }
    catch (error){
      console.log("error")
    }
  }
  useEffect(() =>{
    folderListData()
  },[])

  return (
    <div>
      <button>전체</button>
      {folderLists.map((folderList)=>{
        return (
        <button>
        {folderList.name}
        </button>
     )})}
    </div>
  )
}
//api/users/1/folders