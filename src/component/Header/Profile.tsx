// import React, { useEffect, useState } from 'react'
import logo from "../../image/logo.svg";
import useUserIdData from "../../Hook/useUserIdData";
import { useNavigate } from "react-router-dom";
import { UserIdType } from "../../Hook/Types";

export default function Profile() {
  const { userIdDatas } = useUserIdData();
  const navigate = useNavigate();
  return (
    <div>
      {userIdDatas ? ( // profileData가 존재하는지 확인 후 렌더링
        <div className="nav">
          <img src={logo} alt="로고" onClick={() => navigate("/")} />
          {userIdDatas.map((profile: UserIdType) => (
            <div className="profileBox" key={profile.id}>
              <img
                className="profileImage"
                src={profile.image_source}
                alt="내 프로필"
              />
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
