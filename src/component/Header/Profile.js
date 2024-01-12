// import React, { useEffect, useState } from 'react'
import logo from '../../image/logo.svg';
import useUserIdData from '../../Hook/useUserIdData.js';


export default function Profile() {
  const {userIdDatas} = useUserIdData();
  console.log(userIdDatas)
  return (
    <div>
      {userIdDatas ? ( // profileData가 존재하는지 확인 후 렌더링
        <div className='nav'>
          <img src={logo} alt='로고' />
          {userIdDatas.map((profile) => (
            <div className='profileBox' key={profile.id}>
              <img className='profileImage' src={profile.image_source} alt='내 프로필' />
              <span>{profile.email}</span>
            </div>
          ))}
        </div>
      ) : (
        <button>로그인</button>
      )}
    </div>
  );
}


// export default function Profile() {
//   const [profileData, setProfileData] = useState(null);

//   async function fetchProfileData() {
//     try {
//       const response = await fetch('https://bootcamp-api.codeit.kr/api/users/1');
//       const data = await response.json();
//       const result = data.data; // 응답에서 'data' 속성에 접근
//       setProfileData(result);
//     } catch (error) {
//       console.log('프로필 데이터를 불러오는 중 에러 발생:', error);
//     }
//   }

//   useEffect(() => {
//     fetchProfileData();
//   }, []);

//   return (
//     <div>
//       {profileData ? ( // profileData가 존재하는지 확인 후 렌더링
//         <div className='nav'>
//           <img src={logo} alt='로고' />
//           {profileData.map((profile) => (
//             <div className='profileBox' key={profile.id}>
//               <img className='profileImage' src={profile.image_source} alt='내 프로필' />
//               <span>{profile.email}</span>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <button>로그인</button>
//       )}
//     </div>
//   );
// }

// export default function Profile() {
//   const {userIdDatas} = useUserIdDate();

//   return (
//     <div>
//       {userIdDatas ? ( 
//         <div className='nav'>
//           <img src={logo} alt='로고' />
//             <div className='profileBox' >
//               <img className='profileImage' src={userIdDatas?.image_source} alt='내 프로필' />
//               <span>{userIdDatas?.email}</span>
//             </div>
//         </div>
//       ) : (
//         <button>로그인</button>
//       )}
//     </div>
//   );
// }
