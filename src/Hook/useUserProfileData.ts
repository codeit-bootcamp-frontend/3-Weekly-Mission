import React from 'react'
import { useState, useEffect } from 'react';
import {UserProfildData} from './Api'
import {UserProfileType} from './Types'

function useUserProfileData() {
  const [folderData, setfolderData] = useState<UserProfileType | null>(null);
  async function folderDatas(){
    try{
      const response = await UserProfildData();
      // const result = response.folder; // response 안에 있는 folder 데이터
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


