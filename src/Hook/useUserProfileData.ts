import React from 'react'
import { useState, useEffect } from 'react';
import {UserProfildData} from './Api'
import {UserProfileType} from './Types'

function useUserProfileData() {
  const [folderData, setfolderData] = useState<UserProfileType | null>(null);
  async function folderDatas(){
    try{
      const response = await UserProfildData();
      setfolderData(response) // folder 데이터를 folderData에 저장
    }
    catch(error){
      console.log('Error')
    }
  }
  useEffect(()=>{
    folderDatas()
  },[])
  return {folderData}
}

export default useUserProfileData

//const response = await UserProfildData();
//setfolderData(response)
//folderData의 response객체에는 folder로 감싸진 데이터가 있음.
//folderData.folder.owner로 접근 가능

//const response = await UserProfildData();
//const result = response.folder
//setfolderData(result) 로 하려면
// UserProfileType 타입의folder{}부분을 벗겨야함 
