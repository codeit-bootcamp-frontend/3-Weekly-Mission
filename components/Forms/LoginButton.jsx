import React, {useContext} from 'react';
import profileImg from '../../assets/icons/icon-profile-img-default.png';
import {UserContext} from "@/contexts/UserProvider";

function LoginButton() {

  const {userMail, isLogin, signIn} = useContext(UserContext);

  return (
      <>
        {
          isLogin ? <a className="login-success">
                <img src={profileImg} alt="smileIcon"/>
                <p className="success">
                  {userMail}
                </p>
              </a>
              :
              <a href="/pages/sign-in">
                <p className="button">
                  로그인
                </p>
              </a>
        }
      </>
  );
}

export default LoginButton;
