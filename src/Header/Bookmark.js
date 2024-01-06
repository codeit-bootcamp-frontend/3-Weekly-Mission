import React, { useEffect, useState } from 'react'

export default function Bookmark(){
  const [folderData, setfolderData] = useState('');
    async function folderDatas(){
      try{
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
        const data = await response.json();
        const folder = data.folder; // response 안에 있는 folder 데이터
        setfolderData(folder) // folder 데이터를 folderData에 저장
      }
      catch(error){
        console.log('Error')
      }
    }
    useEffect(()=>{
      folderDatas()
    },[])
  return (
    <div className='headerUnder'>
    {folderData?.owner && ( // folderData가 있고, folderData 안에 owner가 있으면 // 
      <div className='bookmarkArea'>
        <img className='userLogo' src={folderData.owner.profileImageSource} alt='codeit' />
        <p className='userName'>@{folderData.owner.name}</p>
        <p className='bookmarkText'>{folderData.name}</p>
      </div>
    )}
  </div>
  )
}