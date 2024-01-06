import React, { useEffect, useState } from 'react'

export default function Profile() {
 const [profileData, setProfileData] = useState('');
  
 async function fetchProfileData(){
   try{
     const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
     const data = await response.json();
     const result = data;
     setProfileData(result)
    }catch(error){
      console.log('Error')
    }
  }
  useEffect(()=>{
    fetchProfileData();
  },[]); 
  return (
    <div>
      {profileData ? ( 
        <div className='profileBox'>
          <img className='profileImage' src={profileData.profileImageSource} alt='myprofile' />
          <span>{profileData.email}</span>
        </div>
      ) : (
        <button>로그인</button>
      )}
    </div>
  )
}
